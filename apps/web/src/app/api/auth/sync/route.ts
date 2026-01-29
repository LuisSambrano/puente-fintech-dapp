import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { PrivyClient } from '@privy-io/server-auth';

// Initialize Privy Server Client for verification
const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID || '',
  process.env.PRIVY_APP_SECRET || ''
);

export async function POST(req: NextRequest) {
  try {
    // 1. Get the Authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid token' }, { status: 401 });
    }
    const authToken = authHeader.split(' ')[1];

    // 2. Verify the token with Privy
    const verifiedClaims = await privy.verifyAuthToken(authToken);
    const userId = verifiedClaims.userId;

    // 3. Get User Metadata from Privy (to get email/wallet)
    const user = await privy.getUser(userId);

    // Extract useful fields
    const email = user.email?.address;
    const wallet = user.wallet?.address;
    const phone = user.phone?.number;

    // 4. Upsert into Supabase (using Admin client to bypass RLS/Permission)
    // We use privy_user_id as the unique key for upsert
    const { data, error } = await supabaseAdmin
      .from('users')
      .upsert(
        {
          privy_user_id: userId,
          email: email || null,
          wallet_address: wallet || null,
          // If we have a phone, we could store it if the schema allowed, 
          // but for now we stick to the blueprint: email, wallet.
          last_synced_at: new Date().toISOString(), 
          // We can add validation logic here later (KYC tiers etc)
        },
        { onConflict: 'privy_user_id' }
      )
      .select()
      .single();

    if (error) {
      console.error('Supabase Upsert Error:', error);
      return NextResponse.json({ error: 'Database sync failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, user: data });

  } catch (error) {
    console.error('Sync Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
