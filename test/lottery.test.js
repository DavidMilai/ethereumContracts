//ts-check
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { abi, bytecode } = require("../compile");
const web3 = new Web3(ganache.provider());

let lottery;
let accounts;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //using accounts to deploy a contract
  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});


describe ('Lottery Contract',()=>{
    it("deploys a contracts", () => {
        assert.ok(lottery.options.address);
      });
})
