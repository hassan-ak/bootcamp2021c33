//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CryptographicFunctions {
    /*
     ******************************
     *** CryptographicFunctions ***
     ******************************
     */
    function callKeccak256() public pure returns (bytes32 result) {
        return keccak256("ABC");
    }
}
