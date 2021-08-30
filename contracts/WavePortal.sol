// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    // automatically initialized with 0
    uint totalWaves;

    constructor() {
        console.log("Naruto Uzumaki, what's up mate?");
    }

    function wave() public {
        totalWaves += 1;
        console.log("Someone just waved, woah! Total Waves = %s", totalWaves);
    }
}