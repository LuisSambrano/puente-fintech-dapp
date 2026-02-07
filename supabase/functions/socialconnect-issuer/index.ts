import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import { createPublicClient, createWalletClient, webSocket, http, parseAbi } from "https://esm.sh/viem@1.16.6";
import { privateKeyToAccount } from "https://esm.sh/viem@1.16.6/accounts";
import { celo, celoAlfajores } from "https://esm.sh/viem@1.16.6/chains";
// Note: @celo/identity and ODIS libraries might need specific handling in Deno. 
// For this MVP, we will focus on the structure and use viem for contract interaction.
// Real ODIS blinding requires the 'blind-threshold-bls' WASM or similar, which is complex in Edge.
// We will placeholder the ODIS blind signature part with a TODO or a mock for the Buildathon if WASM isn't available.

console.log("Hello from SocialConnect Issuer!");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { action, phone, account, code } = await req.json();
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // 1. REQUEST VERIFICATION (Send SMS)
    if (action === "request_verification") {
      if (!phone || !account) throw new Error("Missing phone or account");

      // Generate 6-digit code
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

      // Store in DB
      const { error } = await supabaseClient
        .from("verification_codes")
        .insert({
          phone_number: phone,
          code: generatedCode,
          expires_at: expiresAt.toISOString(),
          metadata: { account },
        });

      if (error) throw error;

      // Twilio Integration
      const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
      const authToken = Deno.env.get("TWILIO_AUTH_TOKEN");
      const fromNumber = Deno.env.get("TWILIO_FROM_NUMBER");

      if (!accountSid || !authToken || !fromNumber) {
        throw new Error("Twilio secrets missing");
      }

      const body = new URLSearchParams({
        To: phone,
        From: fromNumber,
        Body: `Your verification code is: ${generatedCode}`
      });

      const twilioRes = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: "POST",
          headers: {
            "Authorization": "Basic " + btoa(`${accountSid}:${authToken}`),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body,
        }
      );

      if (!twilioRes.ok) {
        const errorText = await twilioRes.text();
        console.error("Twilio Error:", errorText);
        throw new Error("Failed to send SMS via Twilio");
      }

      console.log(`[SMS SENT] To: ${phone}`);

      return new Response(JSON.stringify({ success: true, message: "Code sent" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. VERIFY AND REGISTER (Register in Blockchain)
    if (action === "verify_and_register") {
      if (!phone || !code || !account) throw new Error("Missing params");

      // Verify Code in DB
      const { data: record, error } = await supabaseClient
        .from("verification_codes")
        .select("*")
        .eq("phone_number", phone)
        .eq("code", code)
        .single();

      if (error || !record) throw new Error("Invalid or expired code");

      if (new Date(record.expires_at) < new Date()) throw new Error("Code expired");

      // --- VIEM / CELO LOGIC START ---
      // This is where we would interact with FederatedAttestations.
      // For the Buildathon MVP, if we can't do full ODIS blinding in Edge, 
      // we might verify the phone and simply return a "Verified" status 
      // or use a relayer approach.
      // Below is the scaffolding for the contract call.

      const PRIVATE_KEY = Deno.env.get("SERVICE_WALLET_PRIVATE_KEY");
      if (!PRIVATE_KEY) throw new Error("Server configuration error: Missing Service Wallet Key");

      // Define Celo Sepolia Chain (if not in viem exports)
      const celoSepolia = {
        id: 11142220,
        name: 'Celo Sepolia',
        network: 'celo-sepolia',
        nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
        rpcUrls: {
          default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
          public: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
        },
        blockExplorers: {
          default: { name: 'Celo Sepolia Explorer', url: 'https://celo-sepolia.blockscout.com' },
        },
        testnet: true,
      };

      const accountSigner = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
      const client = createWalletClient({
        account: accountSigner,
        chain: celoSepolia, // Updated to Celo Sepolia
        transport: http(),
      });

      // Update internal DB: Flag user as verified
      const { error: updateError } = await supabaseClient
        .from("users")
        .update({ 
          phone_verified: true, 
          phone_number: phone,
          last_synced_at: new Date().toISOString() 
        })
        .eq("wallet_address", account);

      if (updateError) {
        console.warn("User record update failed after verification:", updateError.message);
        // We don't throw here to avoid failing the whole request if the user record doesn't exist yet,
        // although in our flow it should exist because of the sync hook.
      }

      // Cleanup OTP
      await supabaseClient.from("verification_codes").delete().eq("id", record.id);

      return new Response(JSON.stringify({ 
        success: true, 
        message: "Verification successful",
        txHash: "0xMOCK_HASH_FOR_BUILDATHON" 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    throw new Error("Invalid action");

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
