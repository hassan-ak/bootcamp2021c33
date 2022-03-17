//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WithdrawalPattern {
    /*
     **************************
     *** Withdrawal Pattern ***
     **************************
     */

    address payable public richest;
    uint256 public mostSent;
    mapping(address => uint256) pendingWithdrawals;

    constructor() {
        richest = payable(msg.sender);
    }

    function setAddress(address _add) public {
        richest = payable(_add);
    }

    /*
    //    Not useable as directly allocating funds
    //    function becomeRichest() public payable returns (bool) {
    //       if (msg.value > mostSent) {
    //          // Insecure practice
    //          richest.transfer(msg.value);
    //          richest = payable(msg.sender);
    //          mostSent = msg.value;
    //          return true;
    //       } else {
    //          return false;
    //       }
    //    }
    */

    function becomeRichest() public payable returns (bool) {
        if (msg.value > mostSent) {
            pendingWithdrawals[richest] += msg.value;
            richest = payable(msg.sender);
            mostSent = msg.value;
            return true;
        } else {
            return false;
        }
    }

    function withdraw() public {
        uint256 amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}

contract DemoWithdrawalPattern {
    function testValue() public {}

    // receive() external payable {}
}
