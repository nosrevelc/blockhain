const Blockchain = require('./Blockchain');

const blockhain = new Blockchain();

blockhain.addBlock({from: 'a',to: 'b', amount:1});
blockhain.addBlock({from: 'a',to: 'c', amount:2});

console.log(JSON.stringify(blockhain));
console.log(blockhain.isValid());

// blockhain.blocks[1].data = {from: 'a',to: 'b', amount:2};
// console.log(JSON.stringify(blockhain));
// console.log(blockhain.isValid());