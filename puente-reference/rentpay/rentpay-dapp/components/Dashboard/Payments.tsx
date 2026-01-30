import React, { useState } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const Payments: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePayment = async () => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    try {
      // Perform payment transaction using MiniPay SDK
      await miniPay.makePayment(Number(paymentAmount));
      setPaymentStatus('Payment successful!');
    } catch (error) {
      console.error('Error making payment:', error);
      setPaymentStatus('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <div>
        <label>Enter payment amount:</label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          required
        />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}

export default Payments;
