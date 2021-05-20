<template>
    <div class="d-flex justify-content-between" style="width : 93vw !important;">
        <div class="p-4 flex-grow-1 bd-highlight">
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
</template>
<script>
import TradeVolume from '../components/TradeVolume';
import AvailableBalance from '../components/Trades/AvailableBalance';
import WalletCategory from '../components/Trades/WalletCategory';
import ListCoin from '../components/Trades/ListCoin';
import ListSwap from '../components/Trades/ListSwap'
export default {
    name : "Trades",
    components : {
        TradeVolume,
        AvailableBalance,
        WalletCategory,
        ListCoin,
        ListSwap
    }
}
</script>
<style scoped>
.title {
    min-width: 60vw;
    padding : 20px;
}
</style>