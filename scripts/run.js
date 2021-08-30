async function main() {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();

    // waiting for a transaction to be mined, hardhat imitated it
    await waveContract.deployed();

    // run the wave function
    await waveContract.wave();
    await waveContract.wave();
    await waveContract.wave();
    await waveContract.wave();
    await waveContract.wave();

    console.log("Contract Deployed, YAY!!! ", waveContract.address);
}

// because it's returning a promise
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });