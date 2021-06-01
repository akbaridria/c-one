<template>
    <div class="row sizeFont p-2">
                <div class="col-1">
                    <img :src="logo" onerror="this.src='../ether.jpg'" width="15"/>
                </div>
                <div class="col-4">
                    {{ ticker }}
                </div>
                <div class="col-3">
                    {{ balanceReal.toFixed(2) }}
                </div>
                <div class="col-4">
                    {{ toCurrency }}
                </div>

            </div>
</template>

<script>
export default {
    name : 'Coin',
    props : ['logo', 'ticker', 'decimal', 'balance', 'total'],
    computed : {
        balanceReal: function() {
            return this.balance / Math.pow(10, this.decimal)
        },
        toCurrency: function(){
            let money = (this.total).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              return money
        }
    }
}
</script>

<style scoped>
.sizeFont {
    font-size: 12px;
}
</style>