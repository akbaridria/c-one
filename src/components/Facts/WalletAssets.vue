<template>
  <div>
    <apexchart type="line" height="250" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
export default {
    name : "WalletAssets",
    props : {
      dataSeries : Array,
      x_axis : Array
      },
    computed : {
      dataSeriesXaxis: function() {
        const {dataSeries, x_axis} = this
        return {
          dataSeries, x_axis
        }
      }
    },
    data() {
        return {
        series: [{
            name: "Swap",
            data: this.dataSeries
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
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Total Swap By Date',
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
          categories: this.x_axis,
          labels: {
            show : true,
            style : {
              fontSize : '8px'
            }
          }
        }
        }
  
      }
    },
    methods : {
      updateChart(val) {
        this.series[0].data = val.dataSeries
        this.chartOptions = {
          xaxis : {
            categories : val.x_axis
          }
        }
      }
    },
    watch :{
      dataSeriesXaxis: function(newVal) {
        this.updateChart(newVal)
      }
    }
}
</script>
<style scoped>

</style>