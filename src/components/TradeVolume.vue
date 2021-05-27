<template>
    <div class="d-flex flex-column bg-white" style="width: 380px;">
    <span class="d-flex flex-row-reverse align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <span class="fs-10 text-muted "><strong>Top 20 Traders By Volume</strong></span>
    </span>
    <div class="list-group list-group-flush border-bottom" style="overflow-y: auto; height : 90vh" >
        <a href="#" class="list-group-item list-group-item-action active lh-tight" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1" style="font-size : 14px">$ 50,000,000.00</strong>
          <small><img class="rounded-circle" :src="require('@/assets/img/ether.jpg')" width="32"  /></small>
        </div>
        <div class="d-flex align-items-center col-10 mb-1 small" style="font-size : 12px"><ion-icon size="small" name="arrow-forward-circle-outline"></ion-icon><span class="ms-2" style="font-size : 10px;">0x7dd7c5f1c02b45568fdcef79...</span></div>
      </a>
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
      <Trader />
    </div>
  </div>
</template>

<script>
import Trader from "../components/Trades/Trader"
export default {
    name : "TradeVolume",
    components : {
        Trader
    }
}
</script>

<style scoped>

</style>