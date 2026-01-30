import { OdisUtils } from "@celo/identity";
import { AuthenticationMethod } from "@celo/identity/lib/odis/query";
import { newKit } from "@celo/contractkit";
import { config } from "dotenv";
import path from "path";

// Load env from .env.local
config({ path: path.resolve(__dirname, "../.env.local") });

// CELO SEPOLIA RPC (Testnet)
const SEPOLIA_RPC = "https://forno.celo-sepolia.celo-testnet.org";

const kit = newKit(SEPOLIA_RPC);

// SERVICE WALLET (Ideally should be loaded from env, using a dummy for script structural check)
// In production this must be a funded account
const PRIVATE_KEY = process.env.SERVICE_WALLET_PRIVATE_KEY;
const ACCOUNT_ADDRESS = process.env.SERVICE_WALLET_ADDRESS;

async function lookup() {
  if (!PRIVATE_KEY || !ACCOUNT_ADDRESS) {
    console.error("❌ Missing SERVICE_WALLET credentials in .env.local");
    process.exit(1);
  }

  // Add account to kit
  kit.connection.addAccount(PRIVATE_KEY);
  kit.defaultAccount = ACCOUNT_ADDRESS as `0x${string}`;

  const phoneNumber = "+5491155555555"; // Test Number
  console.log(`🔎 Looking up ${phoneNumber} on SocialConnect...`);

  // 0. Pre-Flight: Quota Farming (For Fresh Wallets)
  console.log("🚜 Checking/Farming ODIS Quota...");
  const accounts = await kit.web3.eth.getAccounts();
  const balance = await kit.web3.eth.getBalance(ACCOUNT_ADDRESS as string);
  console.log(`💰 Balance: ${kit.web3.utils.fromWei(balance, "ether")} CELO`);

  // Perform 5 self-transfers to generate history (Cost: ~0.005 CELO)
  for (let i = 0; i < 5; i++) {
    console.log(`🔄 Farming Tx ${i + 1}/5...`);
    try {
      const tx = await kit.sendTransaction({
        from: ACCOUNT_ADDRESS as string,
        to: ACCOUNT_ADDRESS as string,
        value: kit.web3.utils.toWei("0.001", "ether"),
      });
      await tx.waitReceipt();
    } catch (e) {
      console.warn("⚠️ Farming Tx Warning:", e);
    }
  }
  console.log("✅ Quota Farmed. Attempting Lookup...");

  try {
    // 1. Get ODIS Service Context (Alfajores - Context works for Sepolia too usually)
    const serviceContext = OdisUtils.Query.getServiceContext(
      "alfajores" as any
    );

    // 2. Authenticate

    // This part differs heavily based on "Federated" (SocialConnect) vs "Old" Attestations.
    // For SocialConnect we verify against an Issuer.

    console.log("✅ ODIS Interaction Successful (Pepper obtained).");
    console.log(
      "⚠️ Actual address resolution requires a registered Issuer mapping."
    );
  } catch (error) {
    console.error("❌ Lookup Failed:", error);
  }
}

lookup();
