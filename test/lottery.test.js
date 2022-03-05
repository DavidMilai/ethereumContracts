//ts-check
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { abi, bytecode } = require("../compile");
const web3 = new Web3(ganache.provider());

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery Contract", () => {
  it("deploys a contracts", () => {
    assert.ok(lottery.options.address);
  });
  it("allows players to join", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether"),
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0],
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it("allows multiple players to join", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether"),
    });

    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei("0.02", "ether"),
    });

    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei("0.02", "ether"),
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0],
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);

    assert.equal(3, players.length);
  });

  it("checks for minimum ammount", async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: "300",
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });


  it("checks for minimum ammount", async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: "300",
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });
});
