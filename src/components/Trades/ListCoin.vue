<template>
    <div class="card mt-2" style="width: 24rem; height : 69vh">
        <div class="card-body">
            <h5 class="card-title text-muted text-end mb-4">The Assets</h5>
            <div style="height : 55vh; overflow-y:auto; overflow-x:hidden">
            <div class="row sizeFont ">
                <div class="col-1">
                    
                </div>
                <div class="col-4">
                   <strong> Ticker</strong>
                </div>
                <div class="col-3">
                   <strong> Amount </strong>
                </div>
                <div class="col-4">
                    <strong>Balance</strong>
                </div>                
            </div>
            <div class="wentWrong sizeFont" v-if="listAssets.length === 0">
                Oops.. something went wrong!
            </div>
            <div v-for="item in listAssets" v-bind:key="item.contract_address">
                <Coin :logo="item.logo_url"  :ticker="item.contract_ticker_symbol" :decimal="item.contract_decimals" :balance="item.balance" :total="item.quote" />
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Coin from '../Trades/Coin'
export default {
    name : "ListCoin",
    props : {
        listAssets : Array
    },
    components : {
        Coin
    }
}
</script>
<style scoped>
.sizeFont {
    font-size: 12px;
}
.wentWrong {
    margin : auto;
    text-align: center;
    margin-top : 100px;
}
</style>