<template>
    <div class="row sizeFont p-2">
                <div class="col-1">
                    <img :src="require('@/assets/img/bsc.png')" width="15"/>
                </div>
                <div class="col-2">
                    BSC
                </div>
                <div class="col-3">
                    321
                </div>
                <div class="col-4">
                    $ 2,244.00
                </div>
                <div class="col">
                    30%
                </div>
            </div>
</template>

<script>
export default {
    name : 'Coin'
}
</script>

<style scoped>
.sizeFont {
    font-size: 12px;
}
</style>