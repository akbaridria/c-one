<template>
    <div class="card ms-2" style="width : 30rem; height : 25rem">
        <div class="card-body">
            <div class="mt-4">
            <apexchart width="450" type="donut" :options="options" :series="series"></apexchart>
            </div>
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
                            labels: ['>= 1 Mil', '0.5 Mil - 1 Mil', '0.1 Mil - 0.5 Mil', '<= 0.1 M'],
                            title : {
                                text :"Group By Wallet Assets"
                            }
                            
                            },
                series: [44, 55, 41, 17],
               
            }
        }
    }
</script>

<style scoped>

</style>