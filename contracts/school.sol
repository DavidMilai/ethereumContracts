// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract School {
    address public lecturer;
    mapping(address => uint) public Students;
    
    constructor(){
        lecturer = msg.sender;
        }
    
    modifier isLecturer(){
        require(msg.sender == lecturer, "Not authorized");
        _;
    }

    modifier isStudent(){
        require(Students[msg.sender] != 0, "Not authorized");
        _;
    }

    function recordScore( address student, uint score)public isLecturer{
        Students[student] = score;
    }

    function getScore( address student)public view isStudent returns(uint){
        require(msg.sender == student, "Not authorized");
        return Students[student];
    }
}