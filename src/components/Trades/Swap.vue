<template>
    <div class="row mt-4">
        <div class="col-2">
            <div class="circle">
                <div class="content">Tx</div>
            </div>
        </div>
        <div style="width:250px">
            <div class="d-flex flex-column sizeFont">
                <span>{{ tx_hash_elipsis }}</span>
                <span><strong>{{ pair }}</strong></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "swap",
    props : ['tx_hash', 'pair'],
    computed : {
        tx_hash_elipsis: function() {
            return this.tx_hash
        }
    }
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