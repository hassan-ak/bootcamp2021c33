import { ethers } from "hardhat";
import {
  MathematicalFunctions,
  MathematicalFunctions__factory,
} from "../typechain";

async function main() {
  // We get the contract to deploy

  // const MathematicalFunctions: MathematicalFunctions__factory =
  //   await ethers.getContractFactory("MathematicalFunctions");
  // const mathematicalFunctions: MathematicalFunctions =
  //   await MathematicalFunctions.deploy();

  const MathematicalFunctions = await ethers.getContractFactory(
    "MathematicalFunctions"
  );
  const mathematicalFunctions = await MathematicalFunctions.deploy();

  await mathematicalFunctions.deployed();
  console.log("*****");
  console.log("*****");
  console.log("*****");
  console.log("     ");
  console.log(
    "MathematicalFunctions deployed to:",
    mathematicalFunctions.address
  );
  console.log("     ");
  console.log("*****");
  console.log(
    "Add 1 = ",
    (await mathematicalFunctions.callAddMod1(4, 5, 2)).toString()
  );
  console.log("     ");
  console.log("*****");
  console.log(
    "Add 2 = ",
    (await mathematicalFunctions.callAddMod2(4, 5, 2)).toString()
  );
  // console.log("     ");
  // console.log("*****");
  // console.log(
  //   "Add 3 = ",
  //   (await mathematicalFunctions.callAddMod3(2)).toString()
  // );
  console.log("     ");
  console.log("*****");
  console.log(
    "Add 4 = ",
    (await mathematicalFunctions.callAddMod4(1428)).toString()
  );
  console.log("     ");
  console.log("*****");
  console.log(
    "Mul 1 = ",
    (await mathematicalFunctions.callMulMod1(1137)).toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
