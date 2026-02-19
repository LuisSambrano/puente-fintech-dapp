/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { describe, it, expect } from "vitest";
import { isValidE164PhoneNumber } from "./validation";

describe("isValidE164PhoneNumber", () => {
  it("validates correct E.164 numbers", () => {
    expect(isValidE164PhoneNumber("+14155552671")).toBe(true);
    expect(isValidE164PhoneNumber("+5491155555555")).toBe(true);
    // Min length check: Regex is ^\+[1-9]\d{1,14}$.
    // Means + followed by [1-9] followed by 1-14 digits.
    // So minimum is +[1-9][0-9] e.g. +10.
    expect(isValidE164PhoneNumber("+10")).toBe(true);
    // Max length check: 1 + 1 + 14 = 16 characters.
    expect(isValidE164PhoneNumber("+123456789012345")).toBe(true);
  });

  it("invalidates incorrect formats", () => {
    expect(isValidE164PhoneNumber("14155552671")).toBe(false); // Missing +
    expect(isValidE164PhoneNumber("+0123")).toBe(false); // Starts with 0 after +
    expect(isValidE164PhoneNumber("+")).toBe(false); // Too short
    expect(isValidE164PhoneNumber("+1")).toBe(false); // Too short (needs at least 2 digits)
    expect(isValidE164PhoneNumber("+1234567890123456")).toBe(false); // Too long
    expect(isValidE164PhoneNumber("")).toBe(false); // Empty
    expect(isValidE164PhoneNumber("invalid")).toBe(false);
  });
});
