<template>
    <apexchart type="line" height="250" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name : "Unique Address",
    props : {
      gas_spent : Array,
      x_gas : Array
      },
    computed : {
      dataSeriesXaxis: function() {
        const {gas_spent, x_gas} = this
        return {
          gas_spent, x_gas
        }
      }
    },
    data() {
        return {
        series: [{
            name: "Swap",
            data: this.gas_spent
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
          text: 'Total Gas Spent By Date',
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
          categories: this.x_gas,
          labels: {
            show : true,
            style : {
              fontSize : '8px'
            }
          }
        },
         yaxis: {
        labels : {
          formatter: function(val) {
            var d = (val).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              });
            return d
          }
        }
      }
        }
  
      }
    },
    methods : {
      updateChart(val) {
        this.series[0].data = val.gas_spent
        this.chartOptions = {
          xaxis : {
            categories : val.x_gas
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