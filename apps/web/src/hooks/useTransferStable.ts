import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useBalance,
} from "wagmi";
import { parseEther } from "viem";
import { CUSD_CONTRACT_ADDRESS } from "../utils/constants";
import ERC20_ABI from "../utils/abis/erc20.json";

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

  const transferStable = async (to: string, amount: string) => {
    // 2. Gas Logic: If < 0.01 CELO, pay with cUSD
    let feeCurrency = undefined;
    if (celoBalance && parseFloat(celoBalance.formatted) < 0.01) {
      console.log("💰 Low CELO balance. Paying gas with cUSD.");
      feeCurrency = CUSD_CONTRACT_ADDRESS;
    }

    // 3. Execute Transfer
    return writeContractAsync({
      address: CUSD_CONTRACT_ADDRESS as `0x${string}`,
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
