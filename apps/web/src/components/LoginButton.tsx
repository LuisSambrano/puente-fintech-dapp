"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

export function LoginButton() {
  const { login, ready, authenticated, user, logout } = usePrivy();

  if (!ready) {
    return <Button disabled>Loading...</Button>;
  }

  if (authenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          {user?.email?.address || user?.wallet?.address?.slice(0, 6) + "..."}
        </span>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={login}
      size="lg"
      className="px-8 py-3 text-base font-medium"
    >
      Login to Puente
    </Button>
  );
}
