import React, { useState, useEffect } from 'react';
import MiniPaySDK from 'minipay-sdk'; // Import MiniPay SDK

const ContributorsList: React.FC = () => {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    // Initialize MiniPay SDK with appropriate configuration
    const miniPay = new MiniPaySDK({
      apiKey: 'YOUR_MINIPAY_API_KEY',
      // Add any additional configuration options here
    });

    // Fetch list of contributors from MiniPay
    miniPay.getContributors()
      .then(contributorsList => {
        setContributors(contributorsList);
      })
      .catch(error => {
        console.error('Error fetching contributors:', error);
      });
  }, []);

  return (
    <div>
      <h2>Contributors List</h2>
      <ul>
        {contributors.map((contributor, index) => (
          <li key={index}>
            <p>Address: {contributor.address}</p>
            <p>Contributed Amount: {contributor.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContributorsList;
