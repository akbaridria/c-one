<template>
    <div class="p-4">
        <Search />
        <div class="chi">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row">
                <KPI title ="Chi Token Minted" total="$ 1,000,000.00" />
                <KPI title ="Chi Token Burned" total="$ 1,000,000.00" />
                <KPI title ="Total Unique Users Burn it" total="1,000,000.00" />
                <KPI title ="Total Gas Spent Minting Chi" total="1,000,000.00" />
            </div>
            <div class="d-flex flex-row">
                <WalletBalanceUser />
                <SpentMint />
            </div>
            <div class="d-flex flex-row">
                <AverageMedian />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from "../components/Search"
import KPI from  "../components/Facts/KPI"
import WalletBalanceUser from "../components/Chi/WalletBalanceUser"
import SpentMint from "../components/Chi/SpentMint"
import AverageMedian from "../components/Chi/AverageMedian"
export default {
    name : "Chi",
    components : {
        Search,
        KPI,
        WalletBalanceUser,
        SpentMint,
        AverageMedian
    }
}
</script>

<style scoped>
.chi {
    overflow-y : auto;
    height : 80vh;
}
</style>