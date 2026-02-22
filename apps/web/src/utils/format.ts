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
 * Masks a phone number for privacy (PII).
 * Keeps the last 4 digits visible.
 * @param phone - The phone number to mask (e.g., +15551234567).
 * @returns The masked number (e.g., *******4567).
 */
export function maskPhoneNumber(phone: string | undefined): string {
  if (!phone) return "";
  if (phone.length <= 4) return "*".repeat(phone.length);
  const visible = phone.slice(-4);
  const maskedLength = phone.length - 4;
  return "*".repeat(maskedLength) + visible;
}
