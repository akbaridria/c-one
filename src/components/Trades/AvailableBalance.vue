<template>
    <div class="card" style="width: 24rem; height : 24vh">
        <div class="card-body">
            <center>
            <h5 class="card-title text-muted text-end">Available Balance</h5>
            <h4 class="pt-2 pb-2 text-end"><strong>$ 123,000.00</strong></h4>
            <h6 class="d-flex align-self-start card-subtitle mb-2 text-muted" style="font-size : 9px;">0x7dd7c5f1c02b45568fdcef79bb4e531cc4bad6d5fede678addb3cf12356d278b<ion-icon name="copy-outline"></ion-icon> </h6>
            </center>
        </div>
    </div>
</template>

<script>
export default {
    name : 'AvailableBalance'
}
</script>

<style scoped>
ion-icon {
  font-size: 12px;
  padding-left : 3px;
}
</style>