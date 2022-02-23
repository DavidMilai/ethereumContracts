const HDWalletProvider = require("@truffle/hdwallet-provider");
const  Web3 =  require('web3');
const { abi, bytecode } = require("./compile");

const provider = new HDWalletProvider(
"palace arm hamster spatial rural member diagram digital reform nation breeze stuff",
"https://rinkeby.infura.io/v3/4da288c10457420b8e3c4c87f3af8cec",
);
 const web3 = Web3(provider);
