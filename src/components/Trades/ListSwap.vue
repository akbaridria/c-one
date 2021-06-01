<template>
     <div class="card ms-2" style="width: 22rem; height : 94vh">
        <div class="card-body" >
            <h5 class="card-title text-muted text-end sizeFont">Top 1 Trader Last Swap Transaction</h5>
            <div class="scrollHorizontal">
                <div v-for="item in dataSwaps" v-bind:key="item.tx_hash">
                    <Swap :tx_hash="item.tx_hash" :pair="item.pair" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swap from "./Swap"
export default {
    name : "ListSwap",
    components : {
        Swap
    },
    props : {
        dataSwaps : []
    }
}
</script>

<style scoped>
.scrollHorizontal {
    height : 83vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.sizeFont {
    font-size : 18px;
}
</style>