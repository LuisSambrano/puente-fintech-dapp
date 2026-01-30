import React, { useState, useEffect } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const Overview: React.FC = () => {
  const [userBalance, setUserBalance] = useState<number | null>(null);

  useEffect(() => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    // Fetch user balance from MiniPay
    miniPay.getUserBalance()
      .then(balance => {
        setUserBalance(balance);
      })
      .catch(error => {
        console.error('Error fetching user balance:', error);
      });
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      {userBalance !== null ? (
        <p>Your current balance: {userBalance} MiniPay coins</p>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
}

export default Overview;
