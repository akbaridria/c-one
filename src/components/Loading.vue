<template>
    <div class="loading">
      <div class="spinner-border text-primary" role="status">
    </div>
</div>    
</template>
<script>
export default {
    name : "Loading"
}
</script>
<style scoped>
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 78px;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));
  background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
}
</style>