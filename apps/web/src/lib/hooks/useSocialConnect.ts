/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState } from "react";

export function useSocialConnect() {
  const [isLoading, setIsLoading] = useState(false);
  const [resolvedAddress, setResolvedAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const lookupPhone = async (phoneNumber: string) => {
    setIsLoading(true);
    setError(null);
    setResolvedAddress(null);

    try {
      const response = await fetch("/api/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Lookup failed");
      }

      setResolvedAddress(data.address);
      return data.address;
    } catch (err: any) {
      setError(err.message);
      console.error("SocialConnect Error:", err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    lookupPhone,
    resolvedAddress,
    isLoading,
    error,
  };
}
