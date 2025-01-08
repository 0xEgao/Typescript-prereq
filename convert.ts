import bs58 from "bs58";
function base58ToByteArray(base58Key: string): Uint8Array {
    return bs58.decode(base58Key);
}
const base58PrivateKey = "phantom-wallet-pvt key";
const byteArray = base58ToByteArray(base58PrivateKey);

console.log("Byte Array:", byteArray);
//pasted to  Turbin3-wallet.json
