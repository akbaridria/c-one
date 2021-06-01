<template>
    <div class="d-flex flex-row align-items-center align-self-center">
        <span class="bulet"></span>
        <span style="font-size : 70%">start-date : 14 Mei 2021</span>
        <span class="bulet"></span>
        <span style="font-size : 70%">last update BSC : <strong>{{ update_bsc }}</strong> last update ETH : <strong>{{ update_eth }}</strong></span>
    </div>    
</template>
<script>
export default {
    name : "Last Update",
    props : ['update_bsc', 'update_eth']
}
</script>
<style scoped>
.bulet {
   width : 15px;
   height : 15px;
   border-radius: 50%;
   background-color: #0d6efd;
   display: inline-block;
   margin-right: 5px;
   margin-left:5px;
}
</style>