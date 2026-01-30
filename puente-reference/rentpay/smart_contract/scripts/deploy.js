const { ethers } = require("hardhat");

async function main() {
    // Get the deployer's account
    const [deployer] = await ethers.getSigners(); // Move await after the assignment operator

    // Log the deployer's address
    console.log("Deploying contracts with the account", deployer.address);

    // Get the contracts factory for RentPay
    const RentPay = await ethers.getContractFactory("RentPay");

    // Deploy the RentPay contract
    const rentPay = await RentPay.deploy();

    // Log the deployed contract's address
    console.log("RentPay deployed to:", rentPay.address);

    // Execute the main function
}
    
main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
});
