import React, { useState, useEffect } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const PaymentHistory: React.FC = () => {
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    // Fetch payment history from MiniPay
    miniPay.getPaymentHistory()
      .then(paymentHistory => {
        setPayments(paymentHistory);
      })
      .catch(error => {
        console.error('Error fetching payment history:', error);
      });
  }, []);

  return (
    <div>
      <h2>Payment History</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>
            <p>Amount: {payment.amount}</p>
            <p>Date: {new Date(payment.timestamp).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentHistory;
