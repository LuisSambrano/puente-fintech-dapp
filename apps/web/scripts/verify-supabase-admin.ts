import { supabaseAdmin } from '../src/lib/supabaseAdmin';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function main() {
  console.log('🧪 Testing Supabase Admin Client...');

  const testUser = {
    privy_user_id: 'did:privy:test_admin_insert',
    email: 'admin_test@antigravity.dev',
    wallet_address: '0x0000000000000000000000000000000000000000',
    full_name: 'Antigravity Test Bot'
  };

  const { data, error } = await supabaseAdmin
    .from('users')
    .upsert(testUser, { onConflict: 'privy_user_id' })
    .select()
    .single();

  if (error) {
    console.error('❌ Upsert Failed:', error);
    process.exit(1);
  }

  console.log('✅ Upsert Success:', data);
  
  // Cleanup
  await supabaseAdmin.from('users').delete().eq('privy_user_id', testUser.privy_user_id);
  console.log('🧹 Cleanup Done');
}

main();
