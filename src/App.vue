<template>
  <main >
    <NavBar />
    <div class="b-example-divider">
    </div>
    <div>
      <router-view />
    </div>
  </main>
</template>

<script>


import NavBar from './components/NavBar'



export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    const bootstrap = require('bootstrap')
    this.$nextTick(function () {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
    })
}
}
</script>

<style>
body {
  background-color: #f8f9fa!important;
}
::-webkit-scrollbar {
  width: 5px;
  height : 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
.b-example-divider {
  flex-shrink: 0;
  width: 0.5rem;
  height: 100vh;
  
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  
}

input[type="text"]:focus, input[type="checkbox"]:focus, select:focus.form-select {
  border-color: rgb(165, 165, 165);
  box-shadow: 0 0 0 ;
  outline: 0 none;
}

ion-icon {
  font-size: 24px;
}


</style>
