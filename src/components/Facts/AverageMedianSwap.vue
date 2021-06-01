<template>
    <apexchart type="line" height="250" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name : "AverageMedianSwap",
    props : {
      average : Array,
      median : Array,
      x_average : Array
      },
    computed : {
      dataSeriesXaxis: function() {
        const {average, median, x_average} = this
        return {
          average,median, x_average
        }
      }
    },
    data() {
        return {
        series: [{
            name: "Average",
            data: this.average
        },
        {
            name: "Median",
            data: this.median
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
          text: 'Average Median Swap Volume By Date',
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
          categories: this.x_average,
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
        this.series[0].data = val.average
        this.series[1].data = val.median
        this.chartOptions = {
          xaxis : {
            categories : val.x_average
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