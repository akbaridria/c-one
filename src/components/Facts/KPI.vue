<template>
    <div class="p-2">
        <div class="card" style="width : 17rem">
            <div class="card-body text-center">
                <div class="d-flex flex-column p-2">
                    <span class="text-muted" style="font-size : 14px"><strong>{{ title }}</strong></span>
                    <span class="text-primary" style="font-size : 22px"><strong>{{ total }}</strong></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "KPI",
    props : {
        title : {
            type : String
        },
        total : {
            type : String
        }
    }
}
</script>

<style scoped>

</style>