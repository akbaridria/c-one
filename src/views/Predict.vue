<template>
    <div class="p-4">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Swap Data</strong> <small>start-date : 14 Mar 2021</small></li>
            <li class="list-group-item">BSC last Update : {{ swap_bsc }}</li>
            <li class="list-group-item">ETH Last Update : {{ swap_eth }}</li>
        </ul>
        <ul class="list-group list-group-flush pt-4 pb-4">
            <li class="list-group-item"><strong>Chi Gas Token Data</strong> <small>start-date : 17 Mar 2021</small></li>
            <li class="list-group-item">BSC last Update : {{ chi_bsc }}</li>
            <li class="list-group-item">ETH Last Update : {{ chi_eth }}</li>
        </ul>
        <div v-if="loading">
            <Loading />
        </div>
        <button v-on:click="refresh" type="button" class="btn btn-primary">Refresh</button>
    </div>
</template>
<script>
import axios from "axios"
import Loading from "../components/Loading"
export default {
    name : "Predict",
    components : {
        Loading
    },
    data() {
        return {
            swap_bsc : "",
            swap_eth : "",
            chi_bsc : "",
            chi_eth : "",
            loading : false
        }
    },
    methods : {
        refresh() {
            this.loading = true
            const url_swap = 'https://akbaridria.com/c1-api/api/last_updated/swap'
            const url_chi = 'https://akbaridria.com/c1-api/api/last_updated/chi'
            axios.all([axios.get(url_swap), axios.get(url_chi)])
            .then(axios.spread((...responses) => {
                this.swap_bsc = responses[0].data.data.BSC
                this.swap_eth = responses[0].data.data.ETH
                this.chi_bsc = responses[1].data.data.BSC
                this.chi_eth = responses[1].data.data.ETH
            }))
            .finally(() => {
                this.loading = false
            })
        }
    },
    mounted() {
        const url_swap = 'https://akbaridria.com/c1-api/api/last_updated/swap'
        const url_chi = 'https://akbaridria.com/c1-api/api/last_updated/chi'
        axios.all([axios.get(url_swap), axios.get(url_chi)])
        .then(axios.spread((...responses) => {
            this.swap_bsc = responses[0].data.data.BSC
            this.swap_eth = responses[0].data.data.ETH
            this.chi_bsc = responses[1].data.data.BSC
            this.chi_eth = responses[1].data.data.ETH
        }))
        .finally(() => {
                this.loading = false
            })
    }
}
</script>
<style scoped>

</style>