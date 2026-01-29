import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { PrivyClient } from '@privy-io/server-auth';

const privy = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID || '',
  process.env.PRIVY_APP_SECRET || ''
);

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing token' }, { status: 401 });
    }
    const authToken = authHeader.split(' ')[1];

    const verifiedClaims = await privy.verifyAuthToken(authToken);
    const userId = verifiedClaims.userId;

    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('privy_user_id', userId)
      .single();

    if (error) {
      // If user not found (e.g. sync hasn't run yet), return null or 404
      if (error.code === 'PGRST116') {
        return NextResponse.json({ user: null });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ user: data });
  } catch (error) {
    console.error('Profile Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
