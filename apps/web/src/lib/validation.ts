/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

/**
 * Validates a phone number against the E.164 format.
 * Format: +[1-9]\d{1,14}
 * @param phoneNumber - The phone number to validate.
 * @returns True if the phone number is valid E.164, false otherwise.
 */
export function isValidE164PhoneNumber(phoneNumber: string): boolean {
  if (!phoneNumber) return false;
  // Regex for E.164 format: + followed by 1-15 digits, first digit non-zero
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return e164Regex.test(phoneNumber);
}
