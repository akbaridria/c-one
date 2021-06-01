<template>
    <div class="card" style="width: 24rem; height : 24vh">
        <div class="card-body">
            <center>
            <h5 class="card-title text-muted text-end">Top 1 Trader Available Balance</h5>
            <div class="wentWrong sizeFont" v-if="balance === 0">
                Oops.. something went wrong!
            </div>
            <h4 class="pt-2 pb-2 text-end" v-if="balance !== 0"><strong>{{ balance }}</strong></h4>
            <h6 v-if="balance !== 0" id="copyText" class="align-self-start card-subtitle mb-2 text-end text-muted" style="font-size : 12px;" >{{ address }}<ion-icon name="copy-outline" v-on:click="copyText"></ion-icon> </h6>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    name : 'AvailableBalance',
    props : ['balance', 'address'],
    emits : ['clicked'],
    methods : {
        copyText() {
            console.log("oke gan 1")
            this.$emit('clicked')
        }
    }
}
</script>

<style scoped>
ion-icon {
  font-size: 12px;
  padding-left : 3px;
  cursor: pointer;
}

.sizeFont {
    font-size : 12px;
}

.wentWrong {
    margin: auto;
    margin-top: 30px;
}

</style>