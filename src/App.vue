<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
    <notification-management ref="notificationManagement"></notification-management>
  </v-app>
</template>

<script>
import '../server.js'
import NotificationManagement from '@/components/NotificationManagement.vue'

export default {
  name: 'App',
  components: {
    NotificationManagement
  },
  methods: {
    setNotificationManagementInRoot () {
      this.$root.notificationManagement = this.$refs.notificationManagement
    },
    setPersonsIconInRoot () {
      this.$root.icons = {}
      //TODO: made a review on this import of images, paleative solution for use of imagens in v-img
      this.$root.icons.persons = [ 
        { id: 1, img: require('@/assets/icons/persons/icon-person-1.png') },
        { id: 2, img: require('@/assets/icons/persons/icon-person-2.png') },
        { id: 3, img: require('@/assets/icons/persons/icon-person-3.png') },
        { id: 4, img: require('@/assets/icons/persons/icon-person-4.png') },
        { id: 5, img: require('@/assets/icons/persons/icon-person-5.png') },
        { id: 6, img: require('@/assets/icons/persons/icon-person-6.png') },
        { id: 7, img: require('@/assets/icons/persons/icon-person-7.png') },
        { id: 8, img: require('@/assets/icons/persons/icon-person-8.png') }
      ]
    }
  },

  mounted () {
    this.setPersonsIconInRoot()
    this.setNotificationManagementInRoot()
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
