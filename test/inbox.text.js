//ts-check
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
// const { abi, bytecode } = require("../compile");

const {abi} = require("../compile")
const {bytecode} = require("../compile")


const INITIAL_MESSAGE = "Hi there!";

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //using accounts to deploy a contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys contracts", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });
});

// class Car {
//   park() {
//     return "stopped";
//   }
//   drive() {
//     return "vroom";
//   }
// }
//  let car;

// beforeEach(()=>{
//      car = new Car();
// });

// describe("Probox", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });

// });
