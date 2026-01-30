require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { MNEMONIC, PRIVATE_KEY } = require('./.env');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        hardhat: {
            chainId: 31337
        },
        celo: {
            url: "https://forno.celo.org",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    solidity: {
        version: "0.8.17", // Solidity compiler version
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
};
