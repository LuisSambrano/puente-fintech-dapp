/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { NextResponse } from "next/server";
import {
  createPublicClient,
  createWalletClient,
  http,
  type Address,
} from "viem";
import { celoAlfajores } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import { federatedAttestationsABI } from "@celo/abis";

// Force dynamic rendering to prevent static generation
export const dynamic = "force-dynamic";
// Prevent edge runtime - use Node.js for @celo/identity compatibility
export const runtime = "nodejs";

// Config
const SEPOLIA_RPC = "https://forno.celo-sepolia.celo-testnet.org";
const FEDERATED_ATTESTATIONS_ADDRESS =
  "0xD52Ac6Ae87fca373106cF000B81e7A540B2791e5" as Address; // Alfajores

// Environment Variables check
const PRIVATE_KEY = process.env.SERVICE_WALLET_PRIVATE_KEY;
const ACCOUNT_ADDRESS = process.env.SERVICE_WALLET_ADDRESS;

export async function POST(request: Request) {
  try {
    // Dynamic imports to avoid build-time bundling issues
    const { OdisUtils } = await import("@celo/identity");
    const { OdisContextName } = await import("@celo/identity/lib/odis/query");

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

    // Initialize viem clients (NO contractkit)
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

    // 1. Service Context (ODIS)
    const serviceContext = OdisUtils.Query.getServiceContext(
      OdisContextName.ALFAJORES
    );

    // 2. Auth Signer (viem pattern, NO contractkit)
    const authSigner: any = {
      authenticationMethod: OdisUtils.Query.AuthenticationMethod.WALLET_KEY,
      sign191: (args: { message: string; account: Address }) => {
        return walletClient.signMessage(args);
      },
    };

    console.log(`[API] Looking up phone: ${phoneNumber}`);

    // 3. Get obfuscated identifier from ODIS
    const { obfuscatedIdentifier } =
      await OdisUtils.Identifier.getObfuscatedIdentifier(
        phoneNumber,
        OdisUtils.Identifier.IdentifierPrefix.PHONE_NUMBER,
        issuer.address,
        authSigner,
        serviceContext
      );

    console.log(
      `[API] Obfuscated ID: ${obfuscatedIdentifier.substring(0, 10)}...`
    );

    // 4. Query On-Chain Registry (Federated Attestations)
    // Using viem's readContract directly
    const { readContract } = await import("viem/actions");

    const [_countsPerIssuer, accounts, _signers] = await readContract(
      publicClient,
      {
        abi: federatedAttestationsABI,
        functionName: "lookupAttestations",
        address: FEDERATED_ATTESTATIONS_ADDRESS,
        args: [obfuscatedIdentifier as `0x${string}`, [issuer.address]],
      }
    );

    console.log(`[API] Found ${accounts.length} addresses`);

    let resolvedAddress: Address | null = null;

    if (accounts.length > 0) {
      resolvedAddress = accounts[0] as Address;
    }

    // --- LAB FALLBACK (FOR DEMO/TESTING ONLY) ---
    if (!resolvedAddress && process.env.NODE_ENV !== "production") {
      if (phoneNumber === "+5491155555555") {
        console.log("[LAB] Using Mock Registry Fallback");
        resolvedAddress = ACCOUNT_ADDRESS as Address;
      }
    }
    // --------------------------------------------

    if (resolvedAddress) {
      return NextResponse.json({
        found: true,
        address: resolvedAddress,
        identifier: obfuscatedIdentifier,
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
