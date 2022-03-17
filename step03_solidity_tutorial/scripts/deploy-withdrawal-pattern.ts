import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy

  const [owner, addr1, addr2] = await ethers.getSigners();

  const WithdrawalPattern = await ethers.getContractFactory(
    "WithdrawalPattern"
  );
  const withdrawalPattern = await WithdrawalPattern.deploy();
  await withdrawalPattern.deployed();
  console.log("WithdrawalPattern deployed to:", withdrawalPattern.address);

  // ------------
  // ------------
  // ------------
  const DemoWithdrawalPattern = await ethers.getContractFactory(
    "DemoWithdrawalPattern"
  );
  const demoWithdrawalPattern = await DemoWithdrawalPattern.deploy();
  await demoWithdrawalPattern.deployed();
  console.log(
    "DemoWithdrawalPattern deployed to:",
    demoWithdrawalPattern.address
  );

  // ------------
  // ------------
  // ------------
  await withdrawalPattern.setAddress(demoWithdrawalPattern.address);
  const txt1 = await withdrawalPattern
    .connect(addr2)
    .becomeRichest({ value: ethers.utils.parseEther("1") });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
