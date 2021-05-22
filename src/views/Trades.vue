<template>
    <div class="p-4">
    <div >
    <Search />
    </div>
    <div class="d-flex justify-content-between" style="width : 91vw !important;">
        <div class="flex-grow-1 bd-highlight" style="height : 80vh; overflow-y:auto">
            <div class="d-flex">
                <div class="d-flex flex-column ">
                    <AvailableBalance />
                    <ListCoin />
                </div>
                <div class="d-flex flex-column">
                    <WalletCategory />
                    <ListSwap />
                </div>
            </div>
        </div>
        <div class="b-example-divider">
            </div>
        <div>
            <TradeVolume />
        </div>
    </div>
    </div>
</template>
<script>
import TradeVolume from '../components/TradeVolume';
import AvailableBalance from '../components/Trades/AvailableBalance';
import WalletCategory from '../components/Trades/WalletCategory';
import ListCoin from '../components/Trades/ListCoin';
import ListSwap from '../components/Trades/ListSwap';
import Search from "../components/Search"
export default {
    name : "Trades",
    components : {
        TradeVolume,
        AvailableBalance,
        WalletCategory,
        ListCoin,
        ListSwap,
        Search
    }
}
</script>
<style scoped>
.title {
    min-width: 60vw;
    padding : 20px;
}
</style>