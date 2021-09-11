async function main() {
    // deployer from getSigners()
    const deployer = await hre.ethers.getSigner();
    console.log("Address of our deployer is: ", deployer.address);

    // getBalance => toString
   console.log("Account balance: ", (await deployer.getBalance()).toString());

    // import Token
    const Token = await hre.ethers.getContractFactory("WavePortal");
    // deploy it and return to token
    const token = await Token.deploy();

    console.log(`WavePortal address: `, token.address);
}

// because it's returning a promise
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });