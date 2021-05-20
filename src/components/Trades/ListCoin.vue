<template>
    <div class="card mt-2" style="width: 24rem; height : 69vh">
        <div class="card-body">
            <h5 class="card-title text-muted text-end mb-4">The Assets</h5>
            <div style="height : 55vh; overflow-y:auto; overflow-x:hidden">
            <div class="row sizeFont ">
                <div class="col-1">
                    
                </div>
                <div class="col-2">
                   <strong> Ticker</strong>
                </div>
                <div class="col-3">
                   <strong> Amount </strong>
                </div>
                <div class="col-4">
                    <strong>Balance</strong>
                </div>
                <div class="col">
                    <strong>30d</strong>
                </div>
                
            </div>
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            <Coin />
            </div>
        </div>
    </div>
</template>
<script>
import Coin from '../Trades/Coin'
export default {
    name : "ListCoin",
    components : {
        Coin
    }
}
</script>
<style scoped>
.sizeFont {
    font-size: 12px;
}
</style>