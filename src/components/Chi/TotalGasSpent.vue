<template>
    <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name : "WalletAssets",
    data() {
        return {
                    series: [{
            name: "Gas",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],

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
          text: 'Total Gas Spent Minting Chi by Date',
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