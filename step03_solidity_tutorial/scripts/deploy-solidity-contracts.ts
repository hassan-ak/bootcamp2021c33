import { ethers } from "hardhat";
import { SolidityContracts2, SolidityContracts2__factory } from "../typechain";

async function main() {
  // We get the contract to deploy

  // const SolidityContracts2: SolidityContracts2__factory =
  //   await ethers.getContractFactory("SolidityContracts2");
  // const solidityContracts2: SolidityContracts2 =
  //   await SolidityContracts2.deploy();

  const SolidityContracts2 = await ethers.getContractFactory(
    "SolidityContracts2"
  );
  const solidityContracts2 = await SolidityContracts2.deploy();

  await solidityContracts2.deployed();

  console.log("SolidityContracts2 deployed to:", solidityContracts2.address);

  const txt1 = await solidityContracts2.createExample("First");
  const demoAddress1 = await solidityContracts2.demoAddress();
  console.log("Demo1 Address 1 = ", demoAddress1);

  const txt2 = await solidityContracts2.createExample("Second");
  const demoAddress2 = await solidityContracts2.demoAddress();
  console.log("Demo1 Address 1 = ", demoAddress2);

  const txt3 = await solidityContracts2.createExample("Third");
  const demoAddress3 = await solidityContracts2.demoAddress();
  console.log("Demo1 Address 1 = ", demoAddress3);

  const name1 = await solidityContracts2.getNameOfContract(demoAddress1);
  console.log("Name = ", name1);
  const name2 = await solidityContracts2.getNameOfContract(demoAddress2);
  console.log("Name2 = ", name2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
