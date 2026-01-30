# RentPay Smart Contract and Deployment on Celo

## Introduction

This guide describes how to use Hardhat, a blockchain development environment similar to Ethereum, to implement the RentPay smart contract. Rent payments, money locking, autosave configuration, and external contributions are made easier with the help of the RentPay smart contract.

## Prerequisites

- Node.js installed on your machine.
- Basic understanding of Ethereum smart contracts.
- Familiarity with Hardhat and Solidity.

## Folder Structure:

- contracts: Contains the RentPay.sol smart contract file.
- scripts: Includes the deploy.js script for deploying the smart contract.
- test: Contains rentpay.test.js for testing the smart contract functionality.
- hardhat.config.js: Configuration file for Hardhat.
- package.json: Lists dependencies and scripts.

## Setup:

1. Clone the repository containing the RentPay smart contract.
2. Navigate to the `smart_contract` directory in your terminal.
3. Run `npm install` to install dependencies listed in the package.json file.

## Configuration:

1. Hardhat Configuration (hardhat.config.js):
- Configure the networks where you want to deploy the smart contract (e.g., Celo mainnet).
- Set up accounts for deployment using private keys or mnemonics.
2. Environment Variables (.env):
- Create a .env file to store sensitive information like private keys and API keys.
- Define variables for PRIVATE_KEY (for contract deployment) and other necessary keys.

## Deployment:

1. Ensure your environment variables are correctly set up in the .env file.
2. Run the deployment script using Hardhat:

`npx hardhat run scripts/deploy.js --network celo`

3. Verify the successful deployment by checking the console output for the deployed contract address.

## Testing:

1. Write test cases for the RentPay smart contract functions in the `rentpay.test.js file` 
2. Run tests using the following command:
`npx hardhat test`
3. Ensure all tests pass without errors, confirming the correctness of contract functionality.

## Integration:

1. Once deployed, integrate the contract address into your frontend application (e.g., Next.js) by accessing it from environment variables.
2. Use the contract address to interact with the RentPay smart contract from your frontend application.

## Security Considerations:

1. Keep sensitive information like private keys secure by avoiding hardcoding them in the code.
2. Ensure proper access controls are implemented within the smart contract to prevent unauthorized actions.
3. Regularly audit and update dependencies to mitigate security risks.

## Conclusion:
By following this documentation, you can deploy the RentPay smart contract using Hardhat, test its functionality, and integrate it into your frontend application securely.