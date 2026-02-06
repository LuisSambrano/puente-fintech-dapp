import { celo, celoSepolia } from "viem/chains";

export const CELO_TOKENS = {
  [celo.id]: {
    cUSD: "0x765de816845861e75a25fca122bb6898b8b1282a",
    USDC: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
    USDT: "0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e", // Tether
  },
  [celoSepolia.id]: {
    cUSD: "0xdE9e4C3ce781b4bA68120d6261cbad65ce0aB00b", // Example Testnet Address - VERIFY
    USDC: "0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B", // Mock USDC
    USDT: "0xd077A400968890Eacc75cdc901F0356c943e4fDb", // Mock USDT
  },
} as const;

export const TOKEN_DECIMALS = {
  cUSD: 18,
  USDC: 6,
  USDT: 6,
};
