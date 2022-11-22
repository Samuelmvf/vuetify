<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.bg-gradient {
background: rgb(36,36,51);
background: radial-gradient(circle, rgba(36,36,51,1) 0%, rgba(27,27,28,1) 35%, rgba(0,30,36,1) 100%);
}
.all-view-height {
  height: 100vh;
}
.all-view-width {
  width: 100vw;
}
.full-height {
  height: 100% !important;
}
.full-width {
  width: 100% !important;
}
.fit {
  width: 100% !important;
  height: 100% !important;
}
</style>
