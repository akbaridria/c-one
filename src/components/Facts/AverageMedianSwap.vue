<template>
    <apexchart type="line" height="250" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name : "WalletAssets",
    data() {
        return {
                    series: [{
            name: "Average Swap",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
            name: "Median Swap",
            data: [2, 22, 1, 55, 1, 66, 1, 8, 122]
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
          text: 'Average And Median Swap volume',
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