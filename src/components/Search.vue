<template>
    <div class="d-flex flex-row align-items-center p-2" >
        <div class="form-check form-switch m-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" value="1" v-model="chain" checked> 
            <label class="form-check-label" for="flexSwitchCheckChecked2">Ethereum</label>
        </div>
        <div class="form-check form-switch m-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" value="56" v-model="chain" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">BSC</label>
        </div>
        <div class="d-flex flex-column m-2">
            <input type="date" class="form-control-sm test" v-model="start_date" />
        </div>
        <span style="font-size : 12px">Until</span>
        <div class="d-flex flex-column m-2">
            <input type="date" class="form-control-sm test" v-model="end_date" />
        </div>
        <div style="width : 20rem; margin-right : 1rem">
        <input class="form-control form-control-sm" type="text" v-model="address"  placeholder="Wallet Address" >
        </div>
        <div style="width : 6rem; margin-right : 1rem">
            
            <select v-model="pair" class="form-select form-select-sm" :disabled="disabled" >
               <option value="1">WBTC - ETH</option>
               <option value="2">ETH - DAI</option>
               <option value="3">ETH - 1INCH</option>
               <option value="5">SUSHI - ETH</option>
               <option value="6">AAVE - WETH</option>
               <option value="7">ETH - USDT</option>
               <option value="8">ETH - USDC</option>
            </select>
        </div>
        <div style="width : 10rem;">
        <button v-on:click="search" type="button" class="btn btn-primary btn-sm"  >Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name : "Search",
    props : {
        pairs : Array,
        disabled : Boolean
    },

    methods : {
        search() {
            const  {start_date, chain, end_date, address, pair} = this
            let _start_date = new Date(start_date)
            let _end_date = new Date(end_date)
            if(!((start_date !== '' && end_date !== '') || (start_date === '' && end_date === ''))) {
                this.$swal('You have to select both of the date!!')
            } else {
                if(chain.length == 0) {
                    this.$swal("You can't uncheck both of the chain!!")
                } else {
                    if(_end_date < _start_date) {
                        this.$swal('End-date should be greater then start-date!!')
                    } else {
                        this.$emit('searching', {chain, start_date, end_date, address, pair})
                    }
                    
                }
            }
            
        }
    },
    data() {
        return {
            chain : [1,56],
            start_date : '',
            end_date : '',
            address : '',
            pair : ''
        }
    }
}
</script>

<style scoped>
#fontSize {
    font-size: 10em;
}
</style>