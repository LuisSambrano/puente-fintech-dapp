import React, { useState } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const AutosaveSettings: React.FC = () => {
  const [autosavePercentage, setAutosavePercentage] = useState('');
  const [autosaveStatus, setAutosaveStatus] = useState<string | null>(null);

  const handleAutosaveConfig = async () => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    try {
      // Configure autosave percentage using MiniPay SDK
      await miniPay.configureAutosave(Number(autosavePercentage));
      setAutosaveStatus('Autosave settings updated!');
    } catch (error) {
      console.error('Error configuring autosave:', error);
      setAutosaveStatus('Failed to update autosave settings. Please try again.');
    }
  };

  return (
    <div>
      <h2>Autosave Settings</h2>
      <div>
        <label>Enter autosave percentage:</label>
        <input
          type="number"
          value={autosavePercentage}
          onChange={(e) => setAutosavePercentage(e.target.value)}
          required
        />
      </div>
      <button onClick={handleAutosaveConfig}>Update Autosave Settings</button>
      {autosaveStatus && <p>{autosaveStatus}</p>}
    </div>
  );
}

export default AutosaveSettings;
