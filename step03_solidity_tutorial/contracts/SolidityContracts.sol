//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SolidityContracts1 {
    uint256 public balance;
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}

contract SolidityContracts2 {
    address public demoAddress;

    function createExample(string memory _name) public returns (address) {
        SolidityContracts1 d1 = new SolidityContracts1(_name);
        demoAddress = address(d1);
        return address(d1);
    }

    function getNameOfContract(address _addr1)
        public
        view
        returns (string memory)
    {
        SolidityContracts1 d1 = SolidityContracts1(_addr1);
        return d1.getName();
    }
}
