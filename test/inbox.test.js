// //ts-check
// const assert = require("assert");
// const ganache = require("ganache-cli");
// const Web3 = require("web3");
// const { abi, bytecode } = require("../compile");
// const web3 = new Web3(ganache.provider());
// const INITIAL_MESSAGE = "Hi there!";

// let accounts;
// let inbox;

// beforeEach(async () => {
//   //Get a list of all accounts
//   accounts = await web3.eth.getAccounts();

//   //using accounts to deploy a contract
//   inbox = await new web3.eth.Contract(abi)
//     .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
//     .send({ from: accounts[0], gas: "1000000" });
// });

// describe("Inbox", () => {
//   it("deploys contracts", () => {
//     assert.ok(inbox.options.address);
//   });

//   it("has a default message", async () => {
//     const message = await inbox.methods.message().call();
//     assert.equal(message, INITIAL_MESSAGE);
//   });

//   it("updates the message", async () => {
//     await inbox.methods.setMessage("bye").send({ from: accounts[0] });
//     const message = await inbox.methods.message().call();
//     assert.equal(message, "bye");
//   });
// });

// // https://rinkeby.infura.io/v3/4da288c10457420b8e3c4c87f3af8cec
