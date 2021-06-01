<template>
    <div class="p-4">
        <div class="loading" v-if="loading">
            <Loading />
        </div>
    <div >
        
    <Search v-on:searching="searching" />
    </div>
    <div class="d-flex " >
        <span id="toastCopy" class="bg-primary">Copied!!</span>
        <div class="bd-highlight" style="height : 80vh; overflow-y:auto">
            <div class="d-flex me-4">
                <div class="d-flex flex-column ">
                    <AvailableBalance :address="address" :balance="balance" v-on:clicked="copyAndToast" />
                    <ListCoin :listAssets="listAssets"/>
                </div>
                <div class="d-flex flex-column">
                    <ListSwap :dataSwaps="dataSwaps" />
                </div>
            </div>
        </div>
        <div class="b-example-divider">
            </div>
        <div>
            <div class="d-flex flex-column bg-white" style="width: 380px;">
                <span class="d-flex flex-row-reverse align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <span class="fs-10 text-muted "><strong>Top 20 Traders By Volume</strong></span>
                </span>
                <div class="list-group list-group-flush border-bottom" style="overflow-y: auto; height : 90vh" >
                    <div v-for="item in dataTraders" v-bind:key="item.address">
                        <Trader :address="item.address" :volume="item.volume" :chain="item.chain" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>

import AvailableBalance from '../components/Trades/AvailableBalance';
import ListCoin from '../components/Trades/ListCoin';
import ListSwap from '../components/Trades/ListSwap';
import Search from "../components/Search";
import axios from "axios"
import Trader from "../components/Trades/Trader"
import Loading from "../components/Loading"
export default {
    name : "Trades",
    components : {
        Trader,
        AvailableBalance,
        ListCoin,
        ListSwap,
        Search,
        Loading
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

            const url_traders = 'https://akbaridria.com/c1-api/api/aggregate/swap/20' + query_params
            axios.all([axios.get(url_traders)])
            .then(axios.spread((...responses) => {
                console.log('disini')
                console.log(responses)
                if(responses[0].data.error === false && responses[0].data.data.length > 0 && responses[0].data.data !== undefined) {
                    this.dataTraders = responses[0].data.data
                    this.getSwap(this.dataTraders[0].address)
                    this.getAssets(this.dataTraders[0].address,this.dataTraders[0].chain)
                } else {
                    this.$swal("Oops! i think we dont have the data for this filter!")
                }
                
            }))
            .finally(() => {
                this.loading = false
            })


        },
        copyAndToast() {
            console.log("oke gan")
            let copyText = document.getElementById("copyText");
            let toastClick = document.getElementById("toastCopy");
            let tempText = document.createElement("textarea");
            tempText.value = copyText.innerText;
            document.body.appendChild(tempText);
            tempText.select();
            document.execCommand("copy");
            tempText.remove();
            toastClick.classList.add("show")
            setTimeout(function() {toastClick.className = toastClick.className.replace("show", "");}, 3000)
        },
        getSwap(val) {
            const url = 'https://akbaridria.com/c1-api/api/swap/transaction/' + val
            axios.get(url)
            .then((response) => {
                this.dataSwaps = response.data.data
            })
        },
        getAssets(val, chain) {
            this.address = val
            let url = ""
            if(chain === 'ETH') {
                url = 'https://api.covalenthq.com/v1/1/address/' + val + '/balances_v2/?page-size=999999&key=ckey_4e7ba38c8e50410a92ed0989d8f'
            } else {
                url = 'https://api.covalenthq.com/v1/56/address/' + val + '/balances_v2/?page-size=999999&key=ckey_4e7ba38c8e50410a92ed0989d8f'
            }
            axios.get(url)
            .then((response) => {
                this.listAssets = response.data.data.items
                this.balance = this.getAllBalance(this.listAssets)
                console.log(this.listAssets)
            })
        },
        getAllBalance(val) {
            let x = 0
            val.map((item) => {
                x = x + item.quote
            })
            return this.changeCurrency(x)
        },
        changeCurrency(val) {
            let money = (val).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
            return money
        }
    },
    data() {
        return {
            dataTraders : [],
            dataSwaps : [],
            balance : 0,
            listAssets : [],
            address : '',
            loading : false
        }
    },
    mounted() {
        this.loading = true
        const url_traders = 'https://akbaridria.com/c1-api/api/aggregate/swap/20'
        axios.all([axios.get(url_traders)])
        .then(axios.spread((...responses) => {
            this.dataTraders = responses[0].data.data
            this.getSwap(this.dataTraders[0].address)
            this.getAssets(this.dataTraders[0].address,this.dataTraders[0].chain)
        }))
        .finally(() => {
            this.loading = false
        })
    }
}
</script>
<style scoped>
.title {
    min-width: 60vw;
    padding : 20px;
}

#toastCopy {
    visibility: hidden;
    position: fixed;
    display: flex;
    width : 100px;
    height : 30px;
    text-align: center;
    color: white;
    border-color: gray;
    border-radius: 25px;
    z-index: 999;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    left : 30%;
    bottom: 30px;

}

#toastCopy.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>