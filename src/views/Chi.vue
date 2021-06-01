<template>
    <div class="p-4">
        <div class="loading" v-if="loading">
            <Loading />
        </div>
        <Search v-on:searching="searching" :disabled="disabled" />
        <div class="chi">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row" style="margin-left:100px">
                <KPI title ="Chi Token Minted" :total="chiMinted" />
                <KPI title ="Chi Token Burned" :total="chiBurned" />
                <KPI title ="Chi Token Transfered" :total="chiTransfer" />
            </div>
            <div class="d-flex flex-row" style="margin-left:100px">
                <KPI title ="Spent Gas Minting Chi" :total="gasMinted" />
                <KPI title ="Spent Gas Burning Chi" :total="gasBurned" />
                <KPI title ="Spent Gas Transfering Chi" :total="gasTransfer" />
            </div>
            <div class="d-flex flex-row" style="margin-left:100px">
                <KPI title ="Unique User Minting Chi" :total="uniqueMinted" />
                <KPI title ="Unique User Burning Chi" :total="uniqueBurned" />
                <KPI title ="Unique User Transfer Chi" :total="uniqueTransfer" />
            </div>
            <div class="d-flex flex-row">
                <BurnMint :mint = "mint" :burn = "burn" :x_chi="x_chi" />
            </div>
            <div class="d-flex flex-row">
                <BurnMintTransfer :mint = "mint" :burn = "burn" :transfer="transfer" :x_chi="x_chi" />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from "../components/Search"
import KPI from  "../components/Facts/KPI"
import BurnMintTransfer from "../components/Chi/BurnMintTransfer"
import BurnMint from "../components/Chi/BurnMint"
import axios from "axios"
import Loading from "../components/Loading"
export default {
    name : "Chi",
    components : {
        Search,
        KPI,
        BurnMintTransfer,
        BurnMint,
        Loading
    },
    data() {
        return {
            chiMinted : 0,
            chiBurned : 0,
            chiTransfer :0,
            gasMinted :0,
            gasBurned: 0,
            gasTransfer:0,
            uniqueMinted:0,
            uniqueBurned:0,
            uniqueTransfer:0,
            mint : [],
            burn : [],
            transfer : [],
            x_chi : [],
            loading : false,
            disabled : true
        }
    },
    methods : {
        searching(val) {
            this.loading = true
            let query_params =''
            if(val.pair !== '') {
                query_params = query_params + '?pair-id='+val.pair
            } if(val.start_date !== '' && val.end_date !== '') {
                if(query_params === ''){
                    query_params = query_params + '?starting-date='+val.start_date + '&ending-date='+val.end_date
                } else {
                    query_params = query_params + '&starting-date='+val.start_date + '&ending-date='+val.end_date
                }
            } if(val.address !== ''){
                if(query_params === '') {
                    query_params = query_params + '?address='+val.address
                } else {
                    query_params = query_params + '&address='+val.address
                }
                
            } if(val.chain.length === 1) {
                if(parseInt(val.chain[0]) === 56) {
                    if(query_params === '') {
                        query_params = query_params + '?use-bsc=true'
                    } else {
                        query_params = query_params + '&use-bsc=true'
                    }
                    
                } else {
                    if(query_params === '') {
                        query_params = query_params + '?use-eth=true'
                    } else {
                        query_params = query_params + '&use-eth=true'
                    }
                }
            }
            const url_total = 'https://akbaridria.com/c1-api/api/aggregate/chi'+ query_params
            const url_chi_graph = 'https://akbaridria.com/c1-api/api/chi/chart/total_chi' + query_params
            axios.all([axios.get(url_total), axios.get(url_chi_graph)])
            .then(axios.spread((...responses) => {
                 if(responses[0].data.data.minted.total_chi === 0 || responses[0].data.data === undefined ) {
                    this.$swal("Oops! i think we dont have the data for this filter!")
                } else {
                    this.chiMinted = this.changeFormat(responses[0].data.data.minted.total_chi)
                    this.chiBurned = this.changeFormat(responses[0].data.data.burned.total_chi)
                    this.chiTransfer = this.changeFormat(responses[0].data.data.transfered.total_chi)
                    this.gasMinted = this.changeCurrency(responses[0].data.data.minted.total_gas_spent)
                    this.gasBurned = this.changeCurrency(responses[0].data.data.burned.total_gas_spent)
                    this.gasTransfer = this.changeCurrency(responses[0].data.data.transfered.total_gas_spent)
                    this.uniqueMinted = this.changeFormat(responses[0].data.data.minted.total_unique_users)
                    this.uniqueBurned = this.changeFormat(responses[0].data.data.burned.total_unique_users)
                    this.uniqueTransfer = this.changeFormat(responses[0].data.data.transfered.total_unique_users)
                    this.mint = responses[1].data.data.minted.data_series
                    this.burn = responses[1].data.data.burned.data_series
                    this.transfer = responses[1].data.data.transfered.data_series
                    this.x_chi = responses[1].data.data.minted.x_axis

                }
                
            }))
            .finally(() => {
                this.loading = false
            })


        },

        changeCurrency(val) {
            let money = (val).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
            return money
        },
        changeFormat(val) {
            let money = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            return money
        }
    },
    mounted() {
        this.loading = true
        const url_total = 'https://akbaridria.com/c1-api/api/aggregate/chi'
        const url_chi_graph = 'https://akbaridria.com/c1-api/api/chi/chart/total_chi'
        axios.all([axios.get(url_total), axios.get(url_chi_graph)])
        .then(axios.spread((...responses) => {
            this.chiMinted = this.changeFormat(responses[0].data.data.minted.total_chi)
            this.chiBurned = this.changeFormat(responses[0].data.data.burned.total_chi)
            this.chiTransfer = this.changeFormat(responses[0].data.data.transfered.total_chi)
            this.gasMinted = this.changeCurrency(responses[0].data.data.minted.total_gas_spent)
            this.gasBurned = this.changeCurrency(responses[0].data.data.burned.total_gas_spent)
            this.gasTransfer = this.changeCurrency(responses[0].data.data.transfered.total_gas_spent)
            this.uniqueMinted = this.changeFormat(responses[0].data.data.minted.total_unique_users)
            this.uniqueBurned = this.changeFormat(responses[0].data.data.burned.total_unique_users)
            this.uniqueTransfer = this.changeFormat(responses[0].data.data.transfered.total_unique_users)
            this.mint = responses[1].data.data.minted.data_series
            this.burn = responses[1].data.data.burned.data_series
            this.transfer = responses[1].data.data.transfered.data_series
            this.x_chi = responses[1].data.data.minted.x_axis
        }))
        .finally(() => {
            this.loading = false
        })
    }
}
</script>

<style scoped>
.chi {
    overflow-y : auto;
    height : 80vh;
}
</style>