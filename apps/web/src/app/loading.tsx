/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="glass-deep-frost p-8 rounded-3xl flex flex-col items-center gap-6 shadow-2xl animate-pulse">
        {/* Logo Pulse */}
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary animate-ping" />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-xl font-bold text-foreground">
            Secure Handshake
          </h3>
          <p className="text-sm text-muted-foreground">
            Connecting to Celo Vault...
          </p>
        </div>
      </div>
    </div>
  );
}
