<template>
<div>
    <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
</div>
</template>
<script>
export default {
    name : "Unique Address",
    props : {
      unique_address : Array,
      x_unique : Array
      },
    computed : {
      dataSeriesXaxis: function() {
        const {unique_address, x_unique} = this
        return {
          unique_address, x_unique
        }
      }
    },
    data() {
        return {
        series: [{
            name: "Swap",
            data: this.unique_address
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
          text: 'Total Unique User By Date',
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
          categories: this.x_unique,
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
        this.series[0].data = val.unique_address
        this.chartOptions = {
          xaxis : {
            categories : val.x_unique
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