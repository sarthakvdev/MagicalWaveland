async function main() {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();

    // waiting for a transaction to be mined, hardhat imitated it
    await waveContract.deployed();

    // adresses of deployer and owner
    console.log(`Contract deployed to: ${waveContract.address}`);
    console.log(`Contract deployed by: ${owner.address}`);

    // waves
    let waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
}

// because it's returning a promise
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });