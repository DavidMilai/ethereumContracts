// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract Test {
    uint256 age;

    function setAge(uint256 x) public {
        age = x;
    }

    function getAge() public view returns (uint){
        return age;
    }
}
