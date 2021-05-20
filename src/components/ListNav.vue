<template>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item" >
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="1inch V3 Aggregator Facts" :to="{ name: 'Facts' }">
          <ion-icon name="grid-outline"></ion-icon>
        </router-link>
      </li>
      <li class="nav-item" >
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Trades Volume" :to="{ name: 'Trades' }">
          <ion-icon name="swap-horizontal-outline"></ion-icon>
        </router-link>
      </li>
      <li >
        <router-link class="nav-link py-3 border-bottom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Chi Gastoken Analysis" :to="{ name: 'Chi' }">
          <ion-icon name="speedometer-outline"></ion-icon>
        </router-link>
      </li>
     
    </ul>
</template>

<script>

export default {
    name:'ListNav'
}
</script>

<style scoped>

</style>