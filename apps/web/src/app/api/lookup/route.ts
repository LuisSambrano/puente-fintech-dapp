import { NextResponse } from "next/server";
import { OdisUtils } from "@celo/identity";
import { AuthenticationMethod } from "@celo/identity/lib/odis/query";
import { newKit } from "@celo/contractkit";

// Config
const SEPOLIA_RPC = "https://forno.celo-sepolia.celo-testnet.org";

// Environment Variables check
const PRIVATE_KEY = process.env.SERVICE_WALLET_PRIVATE_KEY;
const ACCOUNT_ADDRESS = process.env.SERVICE_WALLET_ADDRESS;

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone Number required" },
        { status: 400 }
      );
    }

    if (!PRIVATE_KEY || !ACCOUNT_ADDRESS) {
      return NextResponse.json(
        { error: "Server misconfiguration (Wallet)" },
        { status: 500 }
      );
    }

    // Initialize Kit
    const kit = newKit(SEPOLIA_RPC);
    kit.connection.addAccount(PRIVATE_KEY);
    kit.defaultAccount = ACCOUNT_ADDRESS as `0x${string}`;

    // 1. Context
    const serviceContext = OdisUtils.Query.getServiceContext(
      "alfajores" as any
    );

    // 2. Auth
    const authSigner: any = {
      authenticationMethod: AuthenticationMethod.WALLET_KEY,
      contractKit: kit,
    };

    const { pepper, phoneHash } =
      await OdisUtils.PhoneNumberIdentifier.getPhoneNumberIdentifier(
        phoneNumber,
        ACCOUNT_ADDRESS,
        authSigner,
        serviceContext
      );

    console.log(
      `[API] ODIS Success. Pepper prefix: ${pepper.substring(0, 5)}...`
    );
    console.log(`[API] Computed Hash: ${phoneHash}`);

    // 4. Query On-Chain Registry (Federated Attestations)
    // "Who owns this phone number?"

    // Connect to Contract
    const federatedAttestations =
      await kit.contracts.getFederatedAttestations();

    // Lookup Matches (In production, you might query specific reputable Issuers)
    // This returns a list of Attestations objects
    const attestations = await federatedAttestations.lookupAttestations(
      phoneHash,
      [ACCOUNT_ADDRESS]
    ); // Checking against self as issuer for now, or generally

    // Note: lookupAttestations usually filters by trusted issuers.
    // For this Lab, we'll try to see if ANYONE verified it, or fail over to Mock.

    let resolvedAddress = null;

    if (attestations.accounts.length > 0) {
      // Just take the first one for MVP
      // resolvedAddress = attestations.accounts[0];
      // Logic depends on SDK return shape, usually it's { accounts: [], counts: 0 }
    }

    // --- LAB FALLBACK (FOR DEMO/TESTING ONLY) ---
    // Since we haven't set up a full Issuer Node (Complex), we simulate the registry
    // for our specific test number.
    if (!resolvedAddress && process.env.NODE_ENV !== "production") {
      if (phoneNumber === "+5491155555555") {
        console.log("[LAB] Using Mock Registry Fallback");
        resolvedAddress = ACCOUNT_ADDRESS; // Resolve to Service Wallet for demo loopback
      }
    }
    // --------------------------------------------

    if (resolvedAddress) {
      return NextResponse.json({
        found: true,
        address: resolvedAddress,
        identifier: phoneHash,
      });
    } else {
      return NextResponse.json(
        {
          found: false,
          error: "Number not registered in SocialConnect",
        },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.error("[API] Lookup Failed:", error);

    // Handle ODIS specific errors
    if (error.message?.includes("odisQuotaError")) {
      return NextResponse.json(
        { error: "ODIS Quota Exceeded (Service Wallet)" },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Lookup Failed" },
      { status: 500 }
    );
  }
}
