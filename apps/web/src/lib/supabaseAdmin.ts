/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { createClient } from "@supabase/supabase-js";

import { getClientEnv, getServerEnv } from "./env";

// WARNING: This client uses the SERVICE ROLE KEY.
// It bypasses Row Level Security (RLS).
// NEVER import this on the client side.

// Lazy singleton — validated at first access via Zod
let _supabaseAdmin: ReturnType<typeof createClient> | null = null;

/**
 * Returns a Supabase client with service role privileges.
 * Validates environment variables on first call.
 *
 * @throws {Error} If SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL are missing
 */
export function getSupabaseAdmin() {
  if (!_supabaseAdmin) {
    const { NEXT_PUBLIC_SUPABASE_URL } = getClientEnv();
    const { SUPABASE_SERVICE_ROLE_KEY } = getServerEnv();

    _supabaseAdmin = createClient(
      NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
  }
  return _supabaseAdmin;
}

// Backward-compatible export for existing imports
// Uses lazy getter to avoid crashing at module load time
// Cast through 'any' to avoid strict TypeScript checks on the Proxy target
export const supabaseAdmin = new Proxy({} as any, {
  get(_target, prop) {
    return (getSupabaseAdmin() as any)[prop];
  },
});
