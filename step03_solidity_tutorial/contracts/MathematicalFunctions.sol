//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MathematicalFunctions {
    /*
     ******************************
     *** Mathematical Functions ***
     ******************************
     */
    function callAddMod1(
        uint256 a,
        uint256 b,
        uint256 c
    ) public pure returns (uint256) {
        return (a + b) % c;
    }

    function callAddMod2(
        uint256 a,
        uint256 b,
        uint256 c
    ) public pure returns (uint256) {
        return addmod(a, b, c);
    }

    // This function will overflow due to uint256 limittations
    // function callAddMod3(uint256 c) public pure returns (uint256) {
    //     uint256 max = 2**256 - 1;
    //     return (max + max) % c;
    // }

    function callAddMod4(uint256 c) public pure returns (uint256) {
        uint256 max = 2**256 - 1;
        return addmod(max, max, c);
    }

    function callMulMod1(uint256 c) public pure returns (uint256) {
        uint256 max = 2**256 - 1;
        return mulmod(max, max, c);
    }
}
