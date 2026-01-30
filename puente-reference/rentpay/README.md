<!-- TITLE -->
<p align="center"> 
  <img width="100px" src="https://github.com/celo-org/celo-composer/blob/main/images/readme/celo_isotype.svg" align="center" alt="Celo" />
 <h2 align="center">RentPay</h2>
 <p align="center">Build, deploy, and iterate quickly on decentralized applications using Celo.</p>
</p>
</p>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

RentPay transforms African rental markets by easing upfront annual rent burdens with secure MiniPay transactions and budget-friendly saving tools. #DigitalRenting #FinancialInclusion


**Problem Statement:**
Rent payment challenges are a widespread issue globally, with tenants often struggling to manage large upfront payments and secure financial transactions. However, these challenges are particularly acute in Africa, where landlords frequently require up to a year's rent upfront—a significant financial burden that many cannot afford (BBC News, 2022). Moreover, with over 350 million adults in Africa without access to traditional banking services, a substantial portion of the population is effectively excluded from the rental market. This backdrop makes Africa an ideal starting point for RentPay, especially given the high usage of the Opera browser and its integrated MiniPay service, which are well-positioned to deliver digital solutions in this market.

**Objective:**
The objective of RentPay is to revolutionize the rental process by making it more accessible, secure, and user-friendly. Using cutting-edge technology, RentPay aims to facilitate easier, more flexible payment options, enhance the transparency and security of rental transactions, and ultimately improve housing accessibility and affordability across Africa. While the long-term vision is global, the initial focus on Africa leverages existing digital habits to effectively address these specific challenges.

**Methodology:**
- Digital Payments Integration: Utilize MiniPay within the Opera browser to enable secure, straightforward digital rent and utility payments, offering an alternative to traditional banking infrastructures.

- Smart Contracts: Implement blockchain-based smart contracts to automate rental payments and agreement enforcement, ensuring transactions are transparent, secure, and efficient.

- Digital Identities: Develop a system for digital identities that securely validates and stores tenant and landlord information, streamlining the screening and verification processes.
Savings and Budgeting Tools: Introduce locked savings accounts within MiniPay, enabling tenants to incrementally save towards their rent and utilities, fostering better financial management

**Scope of the Solution:**
RentPay is targeted initially at the African rental market, focusing on urban areas with high digital engagement to refine the platform. The solution is designed to be scalable, with potential future expansion into rural areas and other global markets.

**Key Features:**
- Rent and Utility Payment through MiniPay:
Rent and utility payments can be easily made by users using the MiniPay wallet in the Opera Mini browser.
It is no longer necessary to use traditional banking services thanks to this function, which provides a safe and convenient payment option.

- Locked Savings Account for Budgeting:
Tenants might choose to set aside a certain amount of money for utilities and rent only.
Tenants may successfully manage their budget and guarantee on-time rent payments with the support of this locked savings account that allows for incremental increases.

- Budget-Friendly Autosave Option:
MiniPay has an autosave function that lets renters set aside a certain portion of their income for their rental contract account.
This function, which progressively accumulates money for rent payments, encourages saving discipline.

- External Contributions:
A tenant's MiniPay rent and utility fund can be directly funded by friends, family, or other donors.
This feature gives tenants more flexibility and financial help, which improves their capacity to fulfill their responsibilities.

**Conclusion:**
We encourage financial responsibility and transparency by providing tenants with a contemporary and effective platform to manage their utilities and rent. We hope to streamline the rental payment process and enhance tenants' overall financial well-being by utilising cutting-edge technologies and intuitive interfaces.


## Built With

To give tenants a simple, safe, and comprehensive way to handle their rent and utilities, RentPay is designed as a decentralized application (dApp) that makes use of a number of 
different technologies. Among the major technologies employed in this project are:

- Next.js
- React
- Tailwind CSS
- Rainbowkit
- Headless UI
- Heroicons
- TanStack React Query
- Wagmi
- Viem
- Solidity
- TypeScript
- Hardhat
- Ethers.js
- Typechain
- TypeScript
- 
These technologies work together smoothly to produce a decentralised application that is reliable and effective and satisfies RentPay users' needs.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- Node: Make sure your computer has both Node.js and npm (Node Package Manager) installed. The official Node.js website has them available for download and installation.
- Git (v2.38 or higher)
- Install an Ethereum wallet that works with it (like MetaMask), and make sure the account has enough money in it to run smart contracts and use the app.

## How to Build RentPay dApp

Development Process Overview:

Our development process followed an iterative and collaborative approach, focusing on building, testing, and refining the application to meet the project objectives. Below is a detailed outline of the key steps involved:

1. Project Planning and Requirements Gathering:
The development process began with comprehensive planning and requirements gathering. We defined the project scope, identified key features, and outlined user stories to guide development.

2. Technology Stack Selection:
Based on the project requirements and objectives, we selected the appropriate technology stack for frontend, backend, smart contract development, and blockchain integration. This involved evaluating frameworks, libraries, and tools that best suited our needs.

3. Setting Up the Development Environment:
Each team member set up their development environment according to the chosen technology stack. This included installing necessary software, configuring development tools, and ensuring compatibility with project dependencies.
 
4. Frontend Development:
Frontend development commenced with designing the user interface (UI) and user experience (UX) components using tools like Figma or Adobe XD. Once the designs were finalized, frontend developers began implementing the UI/UX using Next.js, React, and other frontend technologies.

5. Backend Development:
Simultaneously, backend developers worked on designing and implementing the server-side logic using Node.js, Express.js, and other relevant frameworks. This involved creating APIs, handling authentication, and integrating with external services as needed.

6. Smart Contract Development:
Smart contract development involved writing Solidity code for the RentPay contract, which manages rent and utilities payments on the Celo blockchain. Developers used tools like Hardhat for local development, testing, and deploying smart contracts to the Celo testnet or mainnet.

7. Integration with MiniPay:
Integrating with MiniPay required integrating Web3.js, Ethers.js, or similar libraries to interact with the Celo blockchain. This involved configuring connections to the Celo network, handling wallet interactions, and implementing transaction functionalities.

8. Testing:
Throughout the development process, rigorous testing was conducted to ensure the reliability, security, and performance of the application. This included unit testing, integration testing, and end-to-end testing of frontend, backend, and smart contract components.

9. Deployment and Optimization:
Once development and testing were complete, the application was deployed to production environments. This involved optimizing code, configuring servers, and setting up continuous integration/continuous deployment (CI/CD) pipelines to automate deployment processes.

10. Monitoring and Maintenance:
Post-deployment, the application was monitored for performance, security, and user feedback. Any issues or bugs identified were addressed promptly through regular maintenance and updates.

11. Documentation and Knowledge Sharing:
Comprehensive documentation was prepared covering various aspects of the application, including setup instructions, usage guidelines, API documentation, and troubleshooting steps. Knowledge sharing sessions were conducted to onboard team members and stakeholders.

12. User Training and Support:
Finally, user training sessions were conducted to familiarize users with the application features and functionalities. Ongoing support was provided to address user queries, resolve issues, and gather feedback for future enhancements.
By following these steps and maintaining a collaborative and iterative development process, we successfully delivered a robust and user-friendly application that meets the project objectives and fulfills the needs of our users.


### Front-end framework

- [Next.js](https://nextjs.org/): utilised as the front-end foundation for creating the application's user interface. Server-side rendering, routing, and other functionality are provided by Next.js, which improves the application's performance and user experience.
- [React.js](https://reactjs.org/): Front end library which our Next.js app is going to be built on
- [Tailwind CSS](https://v2.tailwindcss.com/docs): Used in the styling of the UI components. Tailwind CSS is a utility-first approach to CSS that makes it possible to quickly design and modify user interface elements.
- [Viem](https://viem.sh/): Utilised to control Ethereum interactions within the application and wallet connections. Viem provides tools for managing Ethereum addresses, approving trades, and getting blockchain information.
- [Rainbowkit-celo](https://github.com/celo-org/rainbowkit-celo): Employed in the creation of UI components. In order to expedite development and guarantee consistency in design, Rainbowkit offers a set of pre-designed components that are readily integrated into the application.

### Web3 library (for react-app)

- [Ethers.js](https://docs.ethers.org/v6/): Utilised to communicate with the Ethereum network. A JavaScript package called ethers.js offers APIs for communicating with smart contracts, sending transactions, and retrieving blockchain data.
  
- [Hardhat](https://hardhat.org/hardhat-runner/docs/config): Selected as the platform for development where smart contracts are assembled, tested, and implemented. For Ethereum development, Hardhat provides an extensive toolkit with integrated testing and debugging help.
  
- [Celo Blockchain - Mainnet](https://docs.celo.org/network/mainnet): Celo Blockchain Mainnet is the main network of the Celo blockchain, a decentralized platform focused on making financial tools accessible to anyone with a mobile phone or web.
- [MiniPay SDK - SDK ](https://docs.celo.org/developer/build-on-minipay/overview)for interacting with MiniPay for rent and utilities payments]

  
### Smart contract framework

- [Solidity](https://docs.soliditylang.org/en/v0.8.19/): Used for writing our smart contract

- [TypeChain](https://www.npmjs.com/package/typechain): Generated TypeScript bindings for Ethereum smart contracts using this. In TypeScript projects, TypeChain helps to maintain type safety and offers auto-generated typings for interfacing with smart contracts.
  

### Rentpay dApp

![Rentpay](https://github.com/Amity808/rentpay/blob/main/rentpay-dapp/public/celo-removebg-preview.png)

![Rentpay](https://github.com/Amity808/rentpay/blob/main/rentpay-dapp/public/tag-removebg-preview.png)

![Rentpay](https://github.com/Amity808/rentpay/blob/main/rentpay-dapp/public/roberton.jpg)


### Getting started

To run the deployed version of our Rentpay-Dapp follow the instruction and Documentation below
 
1. Clone the Repository:

- Make sure your computer has both Node.js and npm (Node Package Manager) installed. The official Node.js website has them available for download and installation.
- Install an Ethereum wallet that works with it (like MetaMask), and make sure the account has enough money in it to run smart contracts and use the app.

`git clone <repository_url>`
Clone the RentPay repository from the source control system (e.g., GitHub) to your local machine.


2. Install Dependencies:
Hyper terminal

`cd rentpay-dapp`
`npm install`

Navigate to the project directory and install the necessary dependencies for both the frontend and backend components of the application.


3. Configure Environment Variables:Create a .env file in the root directory of the project and set the required environment variables:

.env file 

`MNEMONIC="<your_wallet_mnemonic>"`
`PRIVATE_KEY="<your_private_key>"`
`CELOSCAN_API_KEY="<your_celoscan_api_key>"`

Replace `<your_wallet_mnemonic>`, 
`<your_private_key>`, and `<your_celoscan_api_key>` 
with your actual values. You can refer to the provided `.env.example` file for guidance.


4. Compile Smart Contracts:

`cd smart_contracts`
`npm install`

`npx hardhat compile`
Compile the smart contracts located in the contracts directory. Ensure the contracts are error-free and successfully compiled before proceeding.


5. Deploy Smart Contracts:

`npx hardhat run scripts/deploy.js --network celo`

Execute the deployment script to deploy the compiled smart contracts to the Celo mainnet blockchain. 

Verify that the deployment process completes without errors and note the contract addresses for future reference.


6. Start Next.js Server:

`npm run dev`

Start the `Next.js server` to launch the development server and host the RentPay frontend application locally. Access the application by navigating to http://localhost:3000 in your web browser.


7. Interact with the Application:
Use the RentPay dApp to manage rent and utilities payments, configure autosave options, lock funds for budgeting, and receive contributions from external sources. Ensure that you have a compatible Ethereum wallet connected to the application for transactions and interactions with the blockchain.


8. Test Functionality:Test various features and functionalities of the RentPay application, including making payments, locking funds, configuring autosave settings, and withdrawing contributions. Verify that transactions are executed correctly and that balances are updated accordingly.


9. Feedback and Improvement:Provide feedback on the application's usability, performance, and user experience. Continuously monitor and improve the application based on user feedback and emerging requirements.


10. Documentation and Support:Document the deployment process, application features, and troubleshooting steps for future reference. Provide adequate support and resources to users for onboarding and using the RentPay dApp effectively.

By following these instructions, you can successfully deploy, test, and interact with the RentPay decentralized application, providing users with a seamless and secure platform for managing their rent and utilities payments.


## Support

Join the Celo Discord server at <https://chat.celo.org>. Reach out on the dedicated repo channel [here](https://discord.com/channels/600834479145353243/941003424298856448).

<!-- ROADMAP -->

## Challenges:

Throughout the development process, several challenges were encountered, including:
- Integration Complexity:
Compatibility and synchronization issues arose when handling different technology integrations and guaranteeing smooth communication between frontend, backend, and blockchain components.

- Smart Contract Deployment:
Gas prices, transaction speeds, Solidity version, configuration, and network dependability had to be carefully taken into account when deploying smart contracts on the Ethereum network and setting up the network.

- Security Considerations:
Safeguarding user cash and confidential information has always been a difficulty, especially when it comes to Decentralised Finance (DeFi) apps. This includes secure coding techniques and smart contract auditing.


## Roadmap

Moving forward, the roadmap for RentPay includes:

- Enhanced User Features:
introducing new features and updating the UI to improve usability and functionality (transaction history, notifications, account management, etc.).

- Scalability and Performance:
Exploring solutions for optimizing performance and scalability, including layer 2 scaling solutions, gas fee optimizations, and network upgrades.

- Security Enhancements:
To reduce security risks and safeguard user assets, new security measures should be put in place, audits should be carried out often, and best practices should be followed.

- Community Engagement:
Establishing a vibrant community around RentPay through initiatives for adoption, instruction, and rewards in order to get input for future enhancements.
Through tackling these obstacles and adhering to the plan, RentPay hopes to establish itself as a preeminent decentralized platform for managing rent and utilities, offering users all around the world financial inclusion and empowerment.


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

- [@CeloDevs](https://twitter.com/CeloDevs)
- [Discord](https://discord.com/invite/celo)

<p align="right">(<a href="#top">back to top</a>)</p>
