<template>
   <a href="#" class="list-group-item list-group-item-action lh-tight" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1" style="font-size : 14px">{{ volumeUSD }}</strong>
          <div v-if="chain === 'BSC'">
          <small><img class = "rounded-circle" :src="require('@/assets/img/bsc.png')" width="32"  /></small>
          </div>
          <div v-else>
            <small><img class = "rounded-circle" :src="require('@/assets/img/ether.jpg')" width="32"  /></small>
          </div>
        </div>
      <div class="d-flex align-items-center col-10 mb-1 small" style="font-size : 10px"><ion-icon size="small" name="arrow-forward-circle-outline"></ion-icon><span class="ms-2" style="font-size : 10px;">{{ address }}</span></div>
    </a>
</template>

<script>
export default {
    name : "Trader",
    props : {
      address : String,
      chain : String,
      volume : Number
    },
    computed : {
      volumeUSD: function() {
        let d = this.changeCurrency(this.volume)
        return d
      }
    },
    methods : {
      changeCurrency(val) {
            let money = (val).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
            return money
        }
    }
}
</script>

<style scoped>

</style>