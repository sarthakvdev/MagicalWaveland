// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    // automatically initialized with 0
    uint totalWaves;
    uint private seed;

    // Struct called wave, which is just a custom datatype
    struct Wave {
        address waver;
        string message;
        uint timestamp;
    }

    // waves is an array that stores variables of Wave datatype
    Wave[] waves;

    event NewWave(address indexed from, uint timestamp, string message);

    // This is an address => message mapping, ie. we can associate an address with a number!
    // In this case we will be storing the address w/ the last time user waves at us.
    mapping(address => uint) public lastWavedAt;

    constructor() payable {
        console.log("Naruto Uzumaki is a legend.");
    }

    function wave(string memory _message) public {
        // Making sure that the current timestamp is atleast 15 mins longer than the last
        require(lastWavedAt[msg.sender] + 30 seconds < block.timestamp, "Wait 30 secs");

        // updating the current timestamp
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved w/ message", msg.sender);
        console.log("Got message: %s", _message);
        // saving the wave data in waves array
        waves.push(Wave(msg.sender, _message, block.timestamp));

        // Generate a PSEUDO random number in the range of 100
        uint randomNumber = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %s", randomNumber);

        // getting random number as the seed for next wave
        // It's provate and contract's on blockchain => it won't change from prev
        seed = randomNumber;

        // Giving 50% chance that user wins the prize
        if(randomNumber < 50) {
            console.log("%s won!", msg.sender);
            //  This is require, and it basically checks to see that some condition is true. 
            //  If it's not true, it will quit the function and cancel the transaction. 
            uint prizeAmount = 0.0001 ether;
            require(prizeAmount <= address(this).balance, "LOL! Contract doesn't have money!!.");
            (bool success,) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to send money.");
        }

        emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() view public returns(Wave[] memory) {
        return waves;
    }

    function getTotalWaves() view public returns (uint) {
        return totalWaves;
    }
}