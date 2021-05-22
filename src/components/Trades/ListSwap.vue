<template>
     <div class="card mt-2 ms-2" style="width: 22rem; height : 43vh">
        <div class="card-body" >
            <h5 class="card-title text-muted text-end">Last Swap Transaction</h5>
            <div class="scrollHorizontal">
                <Swap />
                <Swap />
                <Swap />
                <Swap />
                <Swap />
                <Swap />
                <Swap />
                <Swap />
            </div>
        </div>
    </div>
</template>

<script>
import Swap from "./Swap"
export default {
    name : "ListSwap",
    components : {
        Swap
    }
}
</script>

<style scoped>
.scrollHorizontal {
    height : 33vh;
    overflow-y: auto ;
    overflow-x:hidden;
}
</style>