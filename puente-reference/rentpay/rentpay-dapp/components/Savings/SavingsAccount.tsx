import React, { useState, useEffect } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const SavingsAccount: React.FC = () => {
  const [lockedFunds, setLockedFunds] = useState<number | null>(null);

  useEffect(() => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    // Fetch locked funds from MiniPay
    miniPay.getLockedFunds()
      .then(funds => {
        setLockedFunds(funds);
      })
      .catch(error => {
        console.error('Error fetching locked funds:', error);
      });
  }, []);

  return (
    <div>
      <h2>Savings Account</h2>
      {lockedFunds !== null ? (
        <p>Your locked funds: {lockedFunds} MiniPay coins</p>
      ) : (
        <p>Loading locked funds...</p>
      )}
    </div>
  );
}

export default SavingsAccount;
