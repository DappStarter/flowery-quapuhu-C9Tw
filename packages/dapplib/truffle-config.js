require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note shift promote idea prize bubble genre'; 
let testAccounts = [
"0x80ad0b6594e07779e80166e5216e46071206598a00faa43be197e5ea344794c0",
"0x14b025cbd8d0b7fc86ffe6ed2edc83dc9f54cbf79f6b7dae65b9b500504e422d",
"0x2b864a2c9e2ad533dcfca4f8427d69a4a567f91cbdfaae86fefa154c944cd00d",
"0x2d371c983e5044a95b59e47bc79b1aaea2a765b088850d0e2b007e30c9dd5745",
"0x53f3a7a0b143dca7dbcfef10c90cc9475d008164492bfd4e974d4d01e97bd2d4",
"0x05fe7c540dff012eddaeb1136380e31d6e5082d0ff6e8c3eb85190aa1b2d5ac1",
"0x581e56b581e140179b5a766102085873f4a35f50b694e6bc69dc77052886440e",
"0xff58e215765012a60029ebd05faf534c34eb8029f4291a55047d31326319cdfb",
"0x9ec846589685706808df768e7e38da0265cdabaf75abe3e808997d8b59035ba6",
"0x48fa479782d9f44c705694f5b721bb23bee9cae1a20daba1b40977590fccbf22"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

