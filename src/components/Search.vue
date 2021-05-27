<template>
    <div class="d-flex flex-row align-items-center p-2" >
        <div class="form-check form-switch m-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" checked> 
            <label class="form-check-label" for="flexSwitchCheckChecked2">Ethereum</label>
        </div>
        <div class="form-check form-switch m-2">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">BSC</label>
        </div>
        <div class="d-flex flex-column m-2">
            <input type="date" class="form-control-sm test" />
        </div>
        <span style="font-size : 12px">Until</span>
        <div class="d-flex flex-column m-2">
            <input type="date" class="form-control-sm test" />
        </div>
        <div style="width : 20rem; margin-right : 1rem">
        <input class="form-control form-control-sm" type="text" id=""  placeholder="Wallet Address" >
        </div>
        <div style="width : 6rem; margin-right : 1rem">
            <select class="form-select form-select-sm">
                <option>Pair</option>
                <option>Eth-1inch</option>
            </select>
        </div>
        <div style="width : 10rem;">
        <button type="button" class="btn btn-primary btn-sm"  >Search</button>
        </div>
    </div>
</template>

<script>
export default {
    name : "Search"
}
</script>

<style scoped>
#fontSize {
    font-size: 10em;
}
</style>