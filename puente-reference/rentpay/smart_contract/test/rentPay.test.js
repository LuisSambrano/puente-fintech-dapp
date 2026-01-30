const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("RentPay", function () {
  let RentPay;
  let rentPay;
  let owner;
  let tenant;

  // Deploy the RentPay contract before each test case
  beforeEach(async function () {
    RentPay = await ethers.getContractFactory("RentPay");
    rentPay = await RentPay.deploy();
    [owner, tenant] = await ethers.getSigners();
  });

  // Test case for checking contract deployment
  it("Should deploy RentPay contract", async function () {
    expect(rentPay.address).to.not.equal(0);
  });

  // Test case for paying rent
  it("Should allow tenant to pay rent", async function () {
    const rentAmount = ethers.utils.parseEther("1.0"); // 1 ETH
    await rentPay.connect(tenant).payRent({ value: rentAmount });
    const tenantBalance = await rentPay.balances(tenant.address);
    expect(tenantBalance).to.equal(rentAmount);
  });

  // Test case for locking funds
  it("Should allow tenant to lock funds for budgeting", async function () {
    const lockAmount = ethers.utils.parseEther("0.5"); // 0.5 ETH
    await rentPay.connect(tenant).lockFunds(lockAmount);
    const lockedFunds = await rentPay.lockedFunds(tenant.address);
    expect(lockedFunds).to.equal(lockAmount);
  });

  // Test case for configuring autosave
  it("Should allow tenant to configure autosave percentage", async function () {
    const autosavePercentage = 10;
    await rentPay.connect(tenant).configureAutosave(autosavePercentage);
    const savedPercentage = await rentPay.autosavePercentage(tenant.address);
    expect(savedPercentage).to.equal(autosavePercentage);
  });

  // Test case for withdrawing funds
  it("Should allow tenant to withdraw funds", async function () {
    const initialBalance = ethers.utils.parseEther("1.0"); // 1 ETH
    await rentPay.connect(tenant).payRent({ value: initialBalance });
    const beforeWithdraw = await ethers.provider.getBalance(tenant.address);
    await rentPay.connect(tenant).withdraw();
    const afterWithdraw = await ethers.provider.getBalance(tenant.address);
    expect(afterWithdraw.gt(beforeWithdraw)).to.be.true;
  });

  // Test case for withdrawing contributions
  it("Should allow tenant to withdraw contributions", async function () {
    const contributionAmount = ethers.utils.parseEther("0.5"); // 0.5 ETH
    await rentPay.connect(tenant).contribute(tenant.address, { value: contributionAmount });
    const beforeWithdraw = await ethers.provider.getBalance(tenant.address);
    await rentPay.connect(tenant).withdrawContributions();
    const afterWithdraw = await ethers.provider.getBalance(tenant.address);
    expect(afterWithdraw.gt(beforeWithdraw)).to.be.true;
  });
});
