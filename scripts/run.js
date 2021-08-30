async function main() {
    // bug: not able to fund "WavePortal" ???
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
    const waveContract = await waveContractFactory.deploy()

    // waiting for a transaction to be mined
    await waveContract.deployed()

    console.log("Contract Deployed -- YAY!!! ", waveContract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })