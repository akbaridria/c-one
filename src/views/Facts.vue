<template>
    <div class="p-4">
        <div class="d-flex flex-column">
            <Search />
            <div class="Facts">
            <div class="d-flex flex-row">
                <KPI title ="The Largest Swap" total="$ 1,000,000.00" />
                <KPI title ="Total Trade Volume" total="$ 1,000,000.00" />
                <KPI title ="Total Unique Users" total="1,000,000.00" />
                <KPI title ="Total Swap" total="1,000,000.00" />
            </div>
            <div class="d-flex flex-row">
                <Category />
                <div class="d-flex">
                    <div class="swap ms-2">
                        <div class="card">
                            <div class="card-body" style="width : 48.5rem; height : 18rem">
                                <WalletAssets />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="d-flex">
                <div class="swap p-2">
                    <div class="card">
                        <div class="card-body" style="width : 71.1rem; height : 20rem">
                        <WalletAssets />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>  
</template>

<script>
import WalletAssets from "../components/Facts/WalletAssets"
import KPI from "../components/Facts/KPI"
import Category from "../components/Facts/Category"
import Search from "../components/Search"
export default {
    name : "Facts",
    components : {
        WalletAssets,
        KPI,
        Category,
        Search
    }  
}
</script>

<style scoped>
.test {
    height : 1rem;
}
.borderKanan {
    padding : 0.5rem;
    border-right-style: solid;
    border-right-width: 0.1rem;
    border-right-color: gray;
}
.Facts {
    height : 80vh;
    overflow-y : auto;
}
</style>