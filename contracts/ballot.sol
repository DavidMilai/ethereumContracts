// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value> .01 ether);
        // checking to see amount
        players.push(msg.sender);
    }
}
