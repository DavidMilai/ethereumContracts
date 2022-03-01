const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'Contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');


var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

var outputContracts = output.contracts['Lottery.sol']['Lottery']


module.exports.abi = outputContracts.abi;
module.exports.bytecode = outputContracts.evm.bytecode.object;
