import { ethers } from "hardhat";
import {
  FunctionOverloading,
  FunctionOverloading__factory,
} from "../typechain";

async function main() {
  // We get the contract to deploy
  // const FunctionOverloading: FunctionOverloading__factory =
  //   await ethers.getContractFactory("FunctionOverloading");
  // const functionOverloading: FunctionOverloading =
  //   await FunctionOverloading.deploy();

  const FunctionOverloading = await ethers.getContractFactory(
    "FunctionOverloading"
  );
  const functionOverloading = await FunctionOverloading.deploy();

  await functionOverloading.deployed();
  console.log("*****");
  console.log("*****");
  console.log("*****");
  console.log("     ");
  console.log("FunctionOverloading deployed to:", functionOverloading.address);
  console.log("     ");
  console.log("*****");
  const result1 = await functionOverloading["getSum(uint256,uint256)"](1, 2);
  console.log(result1.toString());
  // console.log("     ");
  // console.log("*****");
  // const result2 = await functionOverloading["getSum(int256,int256)"](-1, 8);
  // console.log(result2.toString());
  console.log("     ");
  console.log("*****");
  const result3 = await functionOverloading["getSum(uint256,uint256,uint256)"](
    1,
    2,
    3
  );
  console.log(result3.toString());
  console.log("     ");
  console.log("*****");
  const result4 = await functionOverloading["getSum(bool,uint256)"](true, 8);
  console.log(result4.toString());
  console.log("     ");
  console.log("*****");
  const result5 = await functionOverloading["getSum(uint256,bool)"](8, true);
  console.log(result5.toString());
  console.log("     ");
  console.log("*****");
  const result6 = await functionOverloading.callSumWithTwoArguments();
  console.log(result6.toString());
  console.log("     ");
  console.log("*****");
  const result7 = await functionOverloading.callSumWithThreeArguments();
  console.log(result7.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
