"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="glass-deep-frost p-8 rounded-3xl flex flex-col items-center gap-6 shadow-2xl max-w-md text-center border border-red-500/10">
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Bridge Maintenance
          </h2>
          <p className="text-sm text-muted-foreground">
            We encountered a structural issue. Our engineers have been alerted.
          </p>
        </div>

        <div className="flex gap-4 w-full">
          <button
            onClick={() => reset()}
            className="flex-1 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-muted/80"
          >
            Retry
          </button>
          <Link
            href="/"
            className="flex-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 flex items-center justify-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
