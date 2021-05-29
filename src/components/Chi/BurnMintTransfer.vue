<template>
    <apexchart type="line" height="400" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name : "WalletAssets",
    data() {
        return {
                    series: [{
            name: "Mint Chi",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Burn Chi",
            data: [2, 22, 1, 55, 1, 66, 1, 8, 122]
        },
        {
            name: "Transfer Chi",
            data: [33, 2, 133, 31, 12, 6, 1, 8, 12]
        }
        ],

        chartOptions : {
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Burn, Mint, Transfer By Date',
          align: 'left'
        },
        fill: {
          type: 'gradient'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        }
  
                }
    }
}
</script>
<style scoped>

</style>