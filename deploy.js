const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "palace arm hamster spatial rural member diagram digital reform nation breeze stuff",
  "https://rinkeby.infura.io/v3/4da288c10457420b8e3c4c87f3af8cec"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from ", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ["hello"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("contract is deployed to ", result.options.address);

  provider.engine.stop();
};

deploy();
