<template>
    <div class="p-4">
    <div >
    <Search />
    </div>
    <div class="d-flex " >
        <span id="toastCopy" class="bg-primary">Copied!!</span>
        <div class="bd-highlight" style="height : 80vh; overflow-y:auto">
            <div class="d-flex me-4">
                <div class="d-flex flex-column ">
                    <AvailableBalance v-on:clicked="copyAndToast" />
                    <ListCoin />
                </div>
                <div class="d-flex flex-column">
                    <WalletCategory />
                    <ListSwap />
                </div>
            </div>
        </div>
        <div class="b-example-divider">
            </div>
        <div>
            <TradeVolume />
        </div>
    </div>
    </div>
</template>
<script>
import TradeVolume from '../components/TradeVolume';
import AvailableBalance from '../components/Trades/AvailableBalance';
import WalletCategory from '../components/Trades/WalletCategory';
import ListCoin from '../components/Trades/ListCoin';
import ListSwap from '../components/Trades/ListSwap';
import Search from "../components/Search"
export default {
    name : "Trades",
    components : {
        TradeVolume,
        AvailableBalance,
        WalletCategory,
        ListCoin,
        ListSwap,
        Search
    },
    methods : {
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

        }
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