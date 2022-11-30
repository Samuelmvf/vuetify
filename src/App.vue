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
      //TODO: made a review on this import of images, paleative solution for use of imagens in v-img
      const person1 = require('@/assets/icons/persons/icon-person-1.png')
      const person2 = require('@/assets/icons/persons/icon-person-2.png')
      const person3 = require('@/assets/icons/persons/icon-person-3.png')
      const person4 = require('@/assets/icons/persons/icon-person-4.png')
      const person5 = require('@/assets/icons/persons/icon-person-5.png')
      const person6 = require('@/assets/icons/persons/icon-person-6.png')
      const person7 = require('@/assets/icons/persons/icon-person-7.png')
      const person8 = require('@/assets/icons/persons/icon-person-8.png')

      this.$root.icons.persons = [ 
        { id: 1, img: person1 },
        { id: 2, img: person2 },
        { id: 3, img: person3 },
        { id: 4, img: person4 },
        { id: 5, img: person5 },
        { id: 6, img: person6 },
        { id: 7, img: person7 },
        { id: 8, img: person8 }
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
