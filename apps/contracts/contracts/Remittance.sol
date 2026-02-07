// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PuenteRemittance is ReentrancyGuard {
    IERC20 public cUSD;

    event RemittanceSent(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    constructor(address _cUSD) {
        cUSD = IERC20(_cUSD);
    }

    function sendRemittance(
        address recipient,
        uint256 amount
    ) external nonReentrant {
        require(amount > 0, "Amount must be > 0");
        require(
            cUSD.transferFrom(msg.sender, recipient, amount),
            "Transfer failed"
        );

        emit RemittanceSent(
            msg.sender,
            recipient,
            amount,
            block.timestamp
        );
    }
}
