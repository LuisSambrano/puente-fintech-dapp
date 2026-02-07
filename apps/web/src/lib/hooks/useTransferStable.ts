/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useBalance,
} from "wagmi";
import { parseEther } from "viem";
import { celoSepolia } from "viem/chains";
import { CELO_TOKENS } from "@/config/tokens";
import ERC20_ABI from "@/utils/abis/erc20.json";

export function useTransferStable() {
  const { address } = useAccount();

  // 1. Check Native CELO Balance (to decide if we need to pay gas in cUSD)
  const { data: celoBalance } = useBalance({
    address,
  });

  const {
    data: hash,
    error: writeError,
    isPending: isWriting,
    writeContractAsync,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  /*
   * Updated by Antigravity (Celo Integration Phase)
   * Now uses dynamic chain ID to select correct cUSD address
   */
  const chainId = useAccount().chainId || celoSepolia.id;
  const tokens =
    CELO_TOKENS[chainId as keyof typeof CELO_TOKENS] ||
    CELO_TOKENS[celoSepolia.id];

  const transferStable = async (to: string, amount: string) => {
    // 2. Gas Logic: If < 0.01 CELO, pay with cUSD (Fee Abstraction)
    let feeCurrency = undefined;
    if (celoBalance && parseFloat(celoBalance.formatted) < 0.01) {
      console.log("💰 Low CELO balance. Paying gas with cUSD.");
      feeCurrency = tokens.cUSD;
    }

    // 3. Execute Transfer
    return writeContractAsync({
      address: tokens.cUSD as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "transfer",
      args: [to, parseEther(amount)],
      feeCurrency: feeCurrency as `0x${string}` | undefined,
    } as any);
  };

  return {
    transferStable,
    hash,
    isWriting,
    isConfirming,
    isConfirmed,
    error: writeError,
  };
}
