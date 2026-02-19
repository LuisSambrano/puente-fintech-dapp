/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

/**
 * Validates if a string is a valid E.164 phone number.
 * Format: +[1-9]\d{1,14}
 * @param phoneNumber - The phone number to validate.
 * @returns true if valid, false otherwise.
 */
export function isValidE164PhoneNumber(phoneNumber: string): boolean {
  const e164Regex = /^\+[1-9]\d{1,14}$/;
  return e164Regex.test(phoneNumber);
}
