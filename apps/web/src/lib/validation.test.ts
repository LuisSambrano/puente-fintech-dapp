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
  it("should return true for valid E.164 phone numbers", () => {
    expect(isValidE164PhoneNumber("+12345678901")).toBe(true);
    expect(isValidE164PhoneNumber("+5491155555555")).toBe(true);
    expect(isValidE164PhoneNumber("+447700900000")).toBe(true);
    expect(isValidE164PhoneNumber("+14155552671")).toBe(true);
  });

  it("should return false for invalid phone numbers", () => {
    expect(isValidE164PhoneNumber("12345678901")).toBe(false); // Missing +
    expect(isValidE164PhoneNumber("+0123456789")).toBe(false); // Starts with 0 after +
    expect(isValidE164PhoneNumber("+")).toBe(false); // Only +
    expect(isValidE164PhoneNumber("+123-456-7890")).toBe(false); // Contains dashes
    expect(isValidE164PhoneNumber("+123 456 7890")).toBe(false); // Contains spaces
    expect(isValidE164PhoneNumber("")).toBe(false); // Empty string
  });

  it("should return false for numbers that are too long", () => {
    // E.164 max length is 15 digits (excluding +)
    const tooLong = "+1" + "0".repeat(15);
    expect(isValidE164PhoneNumber(tooLong)).toBe(false);
  });
});
