const sha256 = require('crypto-js/sha256');


const transaction = {
    from: 'a',
    to: 'b',
    amount: 1
}

const converrtStr = JSON.stringify(transaction).toString();
const hash = sha256(converrtStr).toString();

console.log(hash);