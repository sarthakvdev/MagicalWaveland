// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    // automatically initialized with 0
    uint totalWaves;
    constructor() {
        console.log("Naruto Uzumaki is a legend.");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s is waved!", msg.sender);
    }
    // msg.sender is the wallet address of person who called the function

    function getTotalWaves() view public returns (uint) {
        console.log("You had total %d waves", totalWaves);
        return totalWaves;
    }
}