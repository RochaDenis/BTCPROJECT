// importando as dependencias
const BIP32Factory = require('bip32').default;
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1');

// Inicializando bip32 com tiny-secp256k1
const bip32 = BIP32Factory(ecc);

// definir rede
// bitcoin - rede principal - mainnet
// testnet - rede de teste

const network = bitcoin.networks.testnet;

// dericação de carteira hd
const path = "m/44'/1'/0'/0/0";

// criando um mnemonico para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

//criando uma conta - par pvt - pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// criando um endereço bitcoin
let btcAdress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network,
}).address;

console.log("Carteira Gerada");
console.log("Endereço : ", btcAdress);
console.log("Chave Privada : ", node.toWIF());
console.log("Seed : ", mnemonic);

/* Carteira Gerada
Endereço :  mkiQ2WqxkhpqVX6QHwgWJJRdQ9XNVpmJCN
Chave Privada :  cT3CDxPqzdnd4q5FkELB9y2yMfA58Q1i5MMNu7UFSXab2hkg63DM
Seed :  crush satoshi hat penalty bright grow luggage sun credit galaxy swear wall */