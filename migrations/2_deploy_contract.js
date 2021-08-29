const FlamingoToken = artifacts.require("FlamingoToken");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(FlamingoToken, "FLAMINGO", "FMGO", "18", "1000000");
  const flamingoToken = await FlamingoToken.deployed()
};