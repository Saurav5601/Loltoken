import { expect } from "chai";
import { ethers } from "hardhat";

describe("LoLToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("LoLToken");

    const instance = await ContractFactory.deploy();
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("LoLToken");
  });
});
