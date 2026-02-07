/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

async function main() {
  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);

  console.log("\n✨ Generated New Service Wallet ✨");
  console.log("---------------------------------------------------");
  console.log("🔑 Private Key (Add to .env.local):");
  console.log(privateKey);
  console.log("---------------------------------------------------");
  console.log("Cp Public Address (Fund this):");
  console.log(account.address);
  console.log("---------------------------------------------------");
  console.log("🚰 Fund here: https://faucet.celo.org/alfajores");
  console.log("---------------------------------------------------\n");
}

main();
