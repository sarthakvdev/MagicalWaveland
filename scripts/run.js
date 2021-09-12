async function main() {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({value: hre.ethers.utils.parseEther("0.1")});
    await waveContract.deployed();
    console.log("Contract address: ", waveContract.address);

    // getting contract balance
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("Contract Balance: ", hre.ethers.utils.formatEther(contractBalance));

    // waving
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log("Contract Balance: ", hre.ethers.utils.formatEther(contractBalance));
    
    // fetching all waves array
    let allWaves = await waveContract.getAllWaves();
}

// because it's returning a promise
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });