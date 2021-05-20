<template>
    <div>
    <div class="dropdown dropend border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="require('../assets/img/covalent logo.jpg')" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a class="dropdown-item" href="https://www.covalenthq.com/" target="_blank">What is Covalent ?</a></li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    name : 'BottomSponsor'
}
</script>

<style scoped>
.border-top {
   border-top : 1px solid #dee2e6!important;
}
</style>