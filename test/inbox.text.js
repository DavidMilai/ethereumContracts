const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async()=>{
    //Get a list of all accounts
    accounts =await web3.eth.getAccounts(); 
});

describe('Inbox',()=>{
    it('deploys contracts',()=>{
        console.log(accounts);
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
