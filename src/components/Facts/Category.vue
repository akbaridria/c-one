<template>
    <div class="card ms-2" style="width: 22rem; height : 50vh">
        <div class="card-body">
            <h5 class="card-title text-muted text-center mb-4">Wallet Size</h5>
            <apexchart width="320" type="donut" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>
<script>


export default {
    name : "Category",
    data() {
            return {
                options : {
                            series: [44, 55, 13, 33],
                            labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
                            
                            },
                series: [44, 55, 41, 17, 15],
                chartOptions: {
                labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
                }
            }
        }
    }
</script>

<style scoped>

</style>