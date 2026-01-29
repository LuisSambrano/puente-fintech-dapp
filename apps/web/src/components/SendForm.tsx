'use client';

import { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, isAddress } from 'viem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react";

export function SendForm() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);

  const { data: hash, isPending: isSending, sendTransactionAsync, error: sendError } = useSendTransaction();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const handleSend = async () => {
    if (!recipient || !amount) return;
    if (!isAddress(recipient)) {
        alert("Invalid address");
        return;
    }

    try {
      const tx = await sendTransactionAsync({
        to: recipient,
        value: parseEther(amount),
      });
      setTxHash(tx);
      console.log('Transaction sent:', tx);
    } catch (err) {
      console.error('Send failed:', err);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Send CELO</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Recipient Address</label>
          <Input 
            placeholder="0x..." 
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
           <label className="text-sm font-medium">Amount (CELO)</label>
           <Input 
            type="number"
            placeholder="0.0" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
           />
        </div>

        <Button 
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={handleSend}
            disabled={ !recipient || !amount || isSending || isConfirming }
        >
            {isSending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Confirm in Wallet...</> : 
             isConfirming ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : 
             'Send Money'}
        </Button>

        {sendError && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{(sendError as any).shortMessage || sendError.message}</AlertDescription>
            </Alert>
        )}

        {isConfirmed && (
            <Alert className="bg-green-50 border-green-200 text-green-800">
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                    Transaction confirmed. 
                    <a 
                        href={`https://celoscan.io/tx/${txHash}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="underline ml-1"
                    >
                        View on Explorer
                    </a>
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
