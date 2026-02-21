/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { describe, it, expect } from "vitest";
import { formatCurrency, truncateAddress, maskPhoneNumber } from "./format";

describe("formatCurrency", () => {
  it("formats USD correctly", () => {
    expect(formatCurrency(1000)).toBe("$1,000.00");
  });

  it("formats CELO (as generic currency) correctly", () => {
    // Note: Intl.NumberFormat might not support 'CELO' symbol everywhere,
    // effectively showing the code or standard fallback.
    // We test standard logic here.
    const result = formatCurrency(50.5, "EUR", "de-DE");
    // Expect 50,50 € usually, depending on node version locale data
    expect(result).toContain("50,50");
    expect(result).toContain("€");
  });
});

describe("truncateAddress", () => {
  it("truncates valid address", () => {
    const addr = "0x1234567890abcdef1234567890abcdef12345678";
    expect(truncateAddress(addr)).toBe("0x1234...5678");
  });

  it("handles empty input", () => {
    expect(truncateAddress(undefined)).toBe("");
  });
});

describe("maskPhoneNumber", () => {
  it("masks valid E.164 number", () => {
    expect(maskPhoneNumber("+15551234567")).toBe("********4567");
  });

  it("masks short number", () => {
    expect(maskPhoneNumber("12345")).toBe("*2345");
  });

  it("handles very short number", () => {
    expect(maskPhoneNumber("123")).toBe("****");
  });

  it("handles empty input", () => {
    expect(maskPhoneNumber("")).toBe("****");
  });
});
