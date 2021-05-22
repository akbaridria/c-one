<template>
    <div class="row mt-4">
        <div class="col-2">
            <div class="circle">
                <div class="content">Tx</div>
            </div>
        </div>
        <div class="col-4">
            <div class="d-flex flex-column sizeFont">
                <a href="#" target="_blank">0x8058a1ab ...</a>
                <span>2020-03-01</span>
            </div>
        </div>
        <div class="col">
            <div class="d-flex flex-column sizeFont">
                <span><strong>From</strong> 30 $ETH</span>
                <span><strong>To</strong> 192338188888 $USDC</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "swap"
}
</script>

<style scoped>
.sizeFont {
    font-size: 12px;
}

.circle {
    
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgb(216, 211, 211);
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    font-size: 12px;
}
</style>