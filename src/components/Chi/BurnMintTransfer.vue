<template>
  <div class="card ms-2 mt-2" style="width : 71.1rem; height : 30rem">
        <div class="card-body mt-3">
            <apexchart type="line" height="400" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
    
</template>
<script>
export default {
    name : "AverageMedianSwap",
    props : {
      mint : Array,
      burn : Array,
      transfer : Array,
      x_chi : Array
      },
    computed : {
      dataSeriesXaxis: function() {
        const {mint, burn, transfer, x_chi} = this
        return {
          mint,burn, transfer, x_chi
        }
      }
    },
    data() {
        return {
        series: [{
            name: "Mint",
            data: this.mint
        },
        {
            name: "Burn",
            data: this.burn
        },
        {
          name: "Transfer",
          data: this.transfer
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
          text: 'Mint, Burn and Transfer Chi Gas Token By Date',
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
          categories: this.x_chi,
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
        this.series[0].data = val.mint
        this.series[1].data = val.burn
        this.series[2].data = val.transfer
        this.chartOptions = {
          xaxis : {
            categories : val.x_chi
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