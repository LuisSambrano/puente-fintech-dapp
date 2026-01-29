'use client';

import { useEffect, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useBalance, useAccount } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { SendForm } from './SendForm';

export function UserDashboard() {
  const { user, getAccessToken, logout } = usePrivy();
  const { address } = useAccount();
  const { data: balance, refetch: refetchBalance } = useBalance({ address });
  
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      try {
        const token = await getAccessToken();
        const res = await fetch('/api/user/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.user) {
          setProfile(data.user);
        }
      } catch (err) {
        console.error('Failed to fetch profile', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [user, getAccessToken]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Account Balance
          </CardTitle>
          <div className="h-4 w-4 text-muted-foreground">💰</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {balance ? `${parseFloat(balance.formatted).toFixed(2)} ${balance.symbol}` : '0.00 CELO'}
          </div>
          <p className="text-xs text-muted-foreground">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Identity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-xl">
              {profile?.full_name?.[0] || user?.email?.address?.[0]?.toUpperCase() || '👤'}
            </div>
            <div>
              <p className="font-medium">{profile?.full_name || 'Anonymous User'}</p>
              <p className="text-sm text-muted-foreground">{user?.email?.address}</p>
            </div>
          </div>
          
          <div className="pt-4 border-t">
             <Button variant="outline" className="w-full" onClick={logout}>
               Log Out
             </Button>
          </div>
        </CardContent>
      </Card>
      

      
      <SendForm />
      
      <div className="grid grid-cols-1 gap-4">
        <Button className="w-full" variant="secondary" onClick={() => refetchBalance()}>Refresh Balance</Button>
      </div>

    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-48 w-full" />
    </div>
  );
}
