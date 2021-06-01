<template>
    <div class="p-4">
        <div class="loading" v-if="loading">
        <Loading />
        </div>
        <div class="d-flex flex-column">
            <Search v-on:searching="searching" :pairs="pairs"/>
            <div class="Facts">
            <div class="d-flex flex-row">
                
            </div>
            <div class="d-flex flex-row">
                <KPI title ="The Largest Swap" :total="largestSwap" />
                <KPI title ="Total Trade Volume" :total="totalTrade" />
                <KPI title ="Total Unique Users" :total="totalUniqueUser" />
                <KPI title ="Total Swap" :total="totalSwap" />
            </div>
            <div class="d-flex flex-row">
                <div class="d-flex">
                    <div class="swap ms-2">
                        <div class="card">
                            <div class="card-body" id="walletFats" style="width : 71rem; height : 18rem">
                                <WalletAssets :dataSeries="dataSeries" :x_axis="x_axis" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="d-flex">
                <div class="swap p-2">
                    <div class="card">
                        <div class="card-body" style="width : 71.1rem; height : 20rem">
                        <TotalUniqueUser :unique_address="unique_address" :x_unique="x_unique" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="swap p-2">
                    <div class="card">
                        <div class="card-body" style="width : 71.1rem; height : 20rem">
                        <TotalGasSpent :gas_spent="gas_spent" :x_gas="x_gas" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="swap p-2">
                    <div class="card">
                        <div class="card-body" style="width : 71.1rem; height : 20rem">
                        <AverageMedianSwap :average="average" :median="median" :x_average="x_average" />
                        </div>
                    </div>
                </div>
            </div>
            <Update :update_bsc = "update_bsc" :update_eth="update_eth"/>
        </div>
        </div>
    </div>  
</template>

<script>
import WalletAssets from "../components/Facts/WalletAssets"
import KPI from "../components/Facts/KPI"
import Search from "../components/Search"
import Loading from "../components/Loading"
import TotalGasSpent from "../components/Facts/TotalGasSpent"
import TotalUniqueUser from "../components/Facts/TotalUniqueUser"
import AverageMedianSwap from "../components/Facts/AverageMedianSwap"
import Update from "../components/Update"
import axios from 'axios'


export default {
    name : "Facts",
    components : {
        WalletAssets,
        KPI,
        Search,
        Loading,
        TotalGasSpent,
        TotalUniqueUser,
        AverageMedianSwap,
        Update
    },
    data() {
        return {
            largestSwap : 0,
            totalTrade : 0,
            totalUniqueUser : 0,
            totalSwap : 0,
            dataSeries : [],
            x_axis : [],
            unique_address : [],
            x_unique : [],
            gas_spent : [],
            x_gas : [],
            loading : false,
            update_bsc : "",
            update_eth : "",
            average : [],
            median : [],
            x_average : [],
            pairs : []
        }
    },
    methods: {
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
        const url_meta = 'https://akbaridria.com/c1-api/api/meta_info/swap' + query_params
        const url_aggregate = 'https://akbaridria.com/c1-api/api/aggregate/swap' + query_params
        const url_chart_swap = 'https://akbaridria.com/c1-api/api/swap/chart/transactions' + query_params
        const url_chart_unique = 'https://akbaridria.com/c1-api/api/swap/chart/unique_user' + query_params
        const url_gas_spent = 'https://akbaridria.com/c1-api/api/swap/chart/spent_gas' + query_params
        const url_last_update = 'https://akbaridria.com/c1-api/api/last_updated/swap/' + query_params
        const url_average = 'https://akbaridria.com/c1-api/api/swap/chart/statistic' + query_params
        axios.all([axios.get(url_meta), axios.get(url_aggregate), axios.get(url_chart_swap), axios.get(url_chart_unique), axios.get(url_gas_spent), axios.get(url_last_update), axios.get(url_average)])
        .then(axios.spread((...responses) => {
            if(responses[1].data.error === true || responses[3].data.data.data_series.length === 0 || responses[0].data.data === undefined) {
                this.$swal("Oops! i think we dont have the data for this filter!")
            } else {
                this.totalUniqueUser = responses[0].data.data.total_unique_users;
                this.totalSwap = responses[0].data.data.total_transactions;
                this.largestSwap = responses[1].data.data.largest_swap;
                this.totalTrade = responses[1].data.data.total_trade_volume;
                this.dataSeries = responses[2].data.data.data_series
                this.x_axis = responses[2].data.data.x_axis
                this.unique_address = responses[3].data.data.data_series
                this.x_unique = responses[3].data.data.x_axis
                this.gas_spent = responses[4].data.data.data_series
                this.x_gas = responses[4].data.data.x_axis
                this.update_bsc = responses[5].data.data.BSC
                this.update_eth = responses[5].data.data.ETH
                this.average = responses[6].data.data.average
                this.median = responses[6].data.data.median
                this.x_average = responses[6].data.data.x_axis
            
            }
            
        }))
        .then(() => {
            this.changeCurrency()
            this.changeNumberFormat()
        })
        .finally(() => {
            this.loading = false
        })
            


        },
        changeCurrency() {
            this.totalTrade = (this.totalTrade).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
            this.largestSwap = (this.largestSwap).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
              this.totalUniqueUser = this.totalUniqueUser.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
              this.totalSwap = this.totalSwap.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        }
    },
    mounted() {
        this.loading = true
        const url_meta = 'https://akbaridria.com/c1-api/api/meta_info/swap'
        const url_aggregate = 'https://akbaridria.com/c1-api/api/aggregate/swap'
        const url_chart_swap = 'https://akbaridria.com/c1-api/api/swap/chart/transactions'
        const url_chart_unique = 'https://akbaridria.com/c1-api/api/swap/chart/unique_user'
        const url_gas_spent = 'https://akbaridria.com/c1-api/api/swap/chart/spent_gas'
        const url_last_update = 'https://akbaridria.com/c1-api/api/last_updated/swap/'
        const url_average = 'https://akbaridria.com/c1-api/api/swap/chart/statistic'
        const url_paris = 'https://akbaridria.com/c1-api/api/pairs/swap'
        axios.all([axios.get(url_meta), axios.get(url_aggregate), axios.get(url_chart_swap), axios.get(url_chart_unique), axios.get(url_gas_spent), axios.get(url_last_update), axios.get(url_average), axios.get(url_paris)])
        .then(axios.spread((...responses) => {
            this.totalUniqueUser = responses[0].data.data.total_unique_users;
            this.totalSwap = responses[0].data.data.total_transactions;
            this.largestSwap = responses[1].data.data.largest_swap;
            this.totalTrade = responses[1].data.data.total_trade_volume;
            if(responses[2].data.data.data_series.length > 12) {
                this.dataSeries = responses[2].data.data.data_series.slice(-12)
                this.x_axis = responses[2].data.data.x_axis.slice(-12);
            }
            if(responses[3].data.data.data_series.length > 12) {
                this.unique_address = responses[3].data.data.data_series.slice(-12);
                this.x_unique = responses[3].data.data.x_axis.slice(-12);
            }
            if(responses[4].data.data.data_series.length > 12) {
                this.gas_spent = responses[4].data.data.data_series.slice(-12);
                this.x_gas = responses[4].data.data.x_axis.slice(-12);
            }
            this.update_bsc = responses[5].data.data.BSC
            this.update_eth = responses[5].data.data.ETH
            if(responses[6].data.data.average.length > 12) {
                this.average = responses[6].data.data.average.slice(-12)
                this.median = responses[6].data.data.median.slice(-12)
                this.x_average = responses[6].data.data.x_axis.slice(-12)
            }
            this.pairs = responses[7].data.data
        }))
        .then(() => {
            this.changeCurrency()
            this.changeNumberFormat()
        })
        .finally(() => {
         this.loading = false
        })
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