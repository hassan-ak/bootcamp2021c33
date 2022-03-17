import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  // const Greeter: Greeter__factory = await ethers.getContractFactory("Greeter");
  // const greeter: Greeter = await Greeter.deploy("Hello, Hardhat!");

  const CryptographicFunctions = await ethers.getContractFactory(
    "CryptographicFunctions"
  );
  const cryptographicFunctions = await CryptographicFunctions.deploy();

  await cryptographicFunctions.deployed();

  console.log(
    "CryptographicFunctions deployed to:",
    cryptographicFunctions.address
  );

  console.log("Result = ", await cryptographicFunctions.callKeccak256());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
