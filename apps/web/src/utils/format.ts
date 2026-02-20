/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

/**
 * Formats a number as a currency string.
 * @param amount - The amount to format.
 * @param currency - The currency code (default: 'USD').
 * @param locale - The locale to use (default: 'en-US').
 * @returns The formatted currency string.
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Truncates an Ethereum address for display.
 * @param address - The full address (0x...).
 * @returns The truncated address (0x1234...5678).
 */
export function truncateAddress(address: string | undefined): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * Masks a phone number for privacy.
 * Keep first 3 chars and last 4 chars visible.
 * @param phoneNumber - The phone number to mask.
 * @returns The masked phone number (e.g., +12****7890).
 */
export function maskPhoneNumber(phoneNumber: string): string {
  if (!phoneNumber) return "";
  if (phoneNumber.length <= 6) return "*****"; // Too short to mask safely
  return `${phoneNumber.slice(0, 3)}****${phoneNumber.slice(-4)}`;
}
