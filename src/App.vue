<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import '../server.js'

export default {
  name: 'App',
  methods: {
    setPersonsIconInRoot () {
      this.$root.icons.persons = [
        '/assets/icons/persons/icon-person-1.png',
        '/assets/icons/persons/icon-person-2.png',
        '/assets/icons/persons/icon-person-3.png',
        '/assets/icons/persons/icon-person-4.png',
        '/assets/icons/persons/icon-person-5.png',
        '/assets/icons/persons/icon-person-6.png',
        '/assets/icons/persons/icon-person-7.png',
        '/assets/icons/persons/icon-person-8.png'
      ]
    }
  },

  mounted () {
    this.$root.icons = {}
    this.setPersonsIconInRoot()
  }
}
</script>

<style>
html, body {
  height: 100vh;
  overflow-x: auto !important; 
}

.font-poppins {
  font-family: Poppins, serif !important;
}
.bg-gradient {
background: rgb(36,36,51);
background: radial-gradient(circle, rgba(36,36,51,1) 0%, rgba(27,27,28,1) 35%, rgba(0,30,36,1) 100%);
}
.bg-gradient-blue {
  background-color: #e0f5f9;
  background-image: linear-gradient(160deg, #e0f5f9 0%, #ccd2d2 50%);
}
.bg-gradient-finish-white {
  background-color: #270b27;
  background-image: linear-gradient(180deg, #270b27 0%, #2c1639 25%, #3d1d61 45%, #ffffff 70%);
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
</style>
