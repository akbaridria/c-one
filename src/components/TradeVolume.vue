<template>
    <div class="d-flex flex-column bg-white" style="width: 380px;">
    <span class="d-flex flex-row-reverse align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <span class="fs-10 text-muted "><strong>Top 20 Traders By Volume</strong></span>
    </span>
    <div class="list-group list-group-flush border-bottom" style="overflow-y: auto; height : 90vh" >
      <Trader v-for="item in dataTraders" v-bind:key="item.address" :address="item.address" :total="item.volume" :chain="item.chain" />
    </div>
  </div>
</template>

<script>
import Trader from "../components/Trades/Trader"
export default {
    name : "TradeVolume",
    components : {
        Trader
    },
    props : {
      dataTraders : []
    }
}
</script>

<style scoped>

</style>