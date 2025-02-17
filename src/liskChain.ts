import {defineChain} from "thirdweb";


export const liskChain = defineChain({
    id: 1135,
    rpc: "https://rpc.api.lisk.com",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
    },
})