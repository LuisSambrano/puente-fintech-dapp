/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

// @ts-nocheck
import { OdisUtils } from "@celo/identity";
import { OdisContextName } from "@celo/identity/lib/odis/query";
import { config } from "dotenv";
import path from "path";
import {
  createPublicClient,
  createWalletClient,
  http,
  type Address,
} from "viem";
import { celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { federatedAttestationsABI } from "@celo/abis";
import { readContract } from "viem/actions";

// Load .env.local
config({ path: path.resolve(__dirname, "../.env.local") });

const SEPOLIA_RPC = "https://forno.celo-sepolia.celo-testnet.org";
const FEDERATED_ATTESTATIONS_ADDRESS =
  "0xD52Ac6Ae87fca373106cF000B81e7A540B2791e5" as Address;

async function lookupPhone(phoneNumber: string) {
  const PRIVATE_KEY = process.env.SERVICE_WALLET_PRIVATE_KEY;
  const ACCOUNT_ADDRESS = process.env.SERVICE_WALLET_ADDRESS;

  if (!PRIVATE_KEY || !ACCOUNT_ADDRESS) {
    throw new Error("Missing environment variables");
  }

  // Initialize viem clients
  const issuer = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);

  const walletClient = createWalletClient({
    chain: celoAlfajores,
    transport: http(SEPOLIA_RPC),
    account: issuer,
  });

  const publicClient = createPublicClient({
    chain: celoAlfajores,
    transport: http(SEPOLIA_RPC),
  });

  // Service Context
  const serviceContext = OdisUtils.Query.getServiceContext(
    OdisContextName.ALFAJORES
  );

  // Auth Signer
  const authSigner = {
    authenticationMethod: OdisUtils.Query.AuthenticationMethod.WALLET_KEY,
    sign191: (args: { message: string; account: Address }) => {
      return walletClient.signMessage(args);
    },
  };

  console.log(`Looking up phone: ${phoneNumber}`);

  // Get obfuscated identifier
  const { obfuscatedIdentifier } =
    await OdisUtils.Identifier.getObfuscatedIdentifier(
      phoneNumber,
      OdisUtils.Identifier.IdentifierPrefix.PHONE_NUMBER,
      issuer.address,
      authSigner,
      serviceContext
    );

  console.log(`Obfuscated ID: ${obfuscatedIdentifier}`);

  // Query on-chain registry
  const [_countsPerIssuer, accounts, _signers] = await readContract(
    publicClient,
    {
      abi: federatedAttestationsABI,
      functionName: "lookupAttestations",
      address: FEDERATED_ATTESTATIONS_ADDRESS,
      args: [obfuscatedIdentifier as `0x${string}`, [issuer.address]],
    }
  );

  console.log(`Found ${accounts.length} addresses:`);
  accounts.forEach((addr, i) => {
    console.log(`  ${i + 1}. ${addr}`);
  });

  return accounts;
}

// CLI
const phone = process.argv[2];
if (!phone) {
  console.error("Usage: tsx scripts/lookup-phone.ts <phone-number>");
  console.error("Example: tsx scripts/lookup-phone.ts +5491155555555");
  process.exit(1);
}

lookupPhone(phone).catch(console.error);
