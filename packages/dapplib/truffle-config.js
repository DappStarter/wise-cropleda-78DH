require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food damp dash script million good another army ghost'; 
let testAccounts = [
"0x4bc0528dc54107aa383106226355835e93399fb0eaf0f5596aacf648279d3d27",
"0x8eed7909f0905a158f82ea950c5784f1609f7c77133f519f936bb85bce689812",
"0x4699e16abfb5d4ae40102d74535bf10507bae8eb2210f414af4b70a3e2d8ea7e",
"0x8dd36894cc1cfeeff622558a52fa508eb02a8db5e3ad85edea24556f49e08304",
"0x88dd57cd6a50c5963af53fa0e82a2e32adb2a36798e59c77adb610c5523a53c6",
"0xf8cdc08d0359de477e93e6f2ed8820fb063c4c738db8e63a385e1dacc303240f",
"0xadc10de083bdc28275b9d66cb2a68b1b9993a9010c32207ddc022be20452e99b",
"0x45788dbe20f3fb44b93441616fbb2333fa414e7e5c6e408d54fc59ad8a96240c",
"0x6afab5e81b0aa980ac49ca88b61d115012811fc3aac20bfb69821a6aa27b9edb",
"0xf91210622a11371a81e625d603aae10bb12d389d616510c442c5f177ccbff7e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

