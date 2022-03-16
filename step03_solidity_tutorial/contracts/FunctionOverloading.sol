//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FunctionOverloading {
    /*
     ****************************
     *** Function Overloading ***
     ****************************
     */

    function getSum(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    // function getSum(int256 a, int256 b) public pure returns (int256) {
    //     return a + b;
    // }

    function getSum(
        uint256 a,
        uint256 b,
        uint256 c
    ) public pure returns (uint256) {
        return a + b + c;
    }

    function getSum(uint256 a, bool b) public pure returns (uint256) {
        if (b == true) {
            return a;
        } else {
            return 1;
        }
    }

    function getSum(bool a, uint256 b) public pure returns (uint256) {
        if (a == false) {
            return b;
        } else {
            return 0;
        }
    }

    function callSumWithTwoArguments() public pure returns (uint256) {
        return getSum(1, 2);
    }

    function callSumWithThreeArguments() public pure returns (uint256) {
        return getSum(1, 2, 3);
    }
}
