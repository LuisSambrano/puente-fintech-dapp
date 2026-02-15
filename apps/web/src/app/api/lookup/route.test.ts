import { POST } from "./route";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextResponse } from "next/server";

// Mock dependencies
vi.mock("@celo/identity", () => ({
  OdisUtils: {
    Query: {
      getServiceContext: vi.fn(),
      AuthenticationMethod: { WALLET_KEY: "WALLET_KEY" },
    },
    Identifier: {
      getObfuscatedIdentifier: vi.fn().mockReturnValue({ obfuscatedIdentifier: "obfuscated-id" }),
      IdentifierPrefix: { PHONE_NUMBER: "PHONE_NUMBER" },
    },
  },
}));

vi.mock("@celo/identity/lib/odis/query", () => ({
  OdisContextName: { ALFAJORES: "ALFAJORES" },
}));

vi.mock("viem", () => ({
  createPublicClient: vi.fn(),
  createWalletClient: vi.fn(() => ({
    signMessage: vi.fn(),
  })),
  http: vi.fn(),
  privateKeyToAccount: vi.fn(() => ({ address: "0x123" })),
}));

vi.mock("viem/accounts", () => ({
  privateKeyToAccount: vi.fn(() => ({ address: "0x123" })),
}));

vi.mock("viem/actions", () => ({
  readContract: vi.fn().mockResolvedValue([
    0, // countsPerIssuer
    ["0xResolvedAddress"], // accounts
    [], // signers
  ]),
}));

describe("POST /api/lookup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.SERVICE_WALLET_PRIVATE_KEY = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
    process.env.SERVICE_WALLET_ADDRESS = "0x123";
  });

  it("should return 400 if phone number is missing", async () => {
    const request = new Request("http://localhost/api/lookup", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const response = await POST(request);
    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("Phone Number required");
  });

  it("should return 400 if phone number is invalid", async () => {
    const request = new Request("http://localhost/api/lookup", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: "invalid-phone" }),
    });
    const response = await POST(request);
    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.error).toBe("Invalid Phone Number format");
  });

  it("should return 200 and resolved address for valid phone number", async () => {
     const request = new Request("http://localhost/api/lookup", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: "+1234567890" }),
    });
    const response = await POST(request);
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.found).toBe(true);
    expect(body.address).toBe("0xResolvedAddress");
  });
});
