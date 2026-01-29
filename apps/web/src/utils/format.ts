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
