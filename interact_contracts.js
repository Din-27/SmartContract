const Web3 = require('web3');
const web3 = new Web3('https://your-ethereum-node-url');

const MyToken = artifacts.require('MyToken');
const contractAddress = '0x001'; // Ganti dengan alamat kontrak Anda
const myAccountAddress = '0x002'; // Ganti dengan alamat dompet Anda

const tokenContract = new web3.eth.Contract(MyToken.abi, contractAddress);

// Contoh pengiriman token
tokenContract.methods.transfer('0xRecipientAddress', web3.utils.toWei('10', 'ether')).send({ from: myAccountAddress })
    .on('transactionHash', function (hash) {
        console.log('Transaction Hash:', hash);
    })
    .on('receipt', function (receipt) {
        console.log('Receipt:', receipt);
    })
    .on('error', function (error) {
        console.error('Error:', error);
    });
