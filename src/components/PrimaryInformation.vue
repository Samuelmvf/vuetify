<template>
  <v-container fluid class="bg-gradient full-height">
    <v-row style="height: 10vh;" justify="center">
      <v-col cols="4" class="pa-0 mt-2">
        <v-img
          src="../assets/vuetify.png"
          height="80px"
          contain
          >
        </v-img>
      </v-col>
    </v-row>
    <v-row align="end" justify="center" class="wrap" style="height: 35vh;">
      <span :class="`white--text ${getHeaderSize} text-center mx-2`" style="font-family: Poppins !important;">
        Example of code in Vuejs<br> using Vuetify as principal UI library
      </span>
      <div style="background-color: white; width: 85%; height: 3px"></div>
    </v-row>
    <v-row align="center" justify="center" class="ma-0 mt-9" style="height: calc(35vh - 40px);">
      <div class="pa-5 text-center">
        <span class="white--text text-xs-subtitle-1 text-sm-h6 text-md-h5" style="font-family: Poppins !important; font-weight: 300">
          with this code i'll try explain part of my habilits using Vue and i'm learning how to use components from Vuetify UI, previously i'd work with Quasar Framework for UI.
        </span>
      </div>
      <div style="background-color: white; width: 85%; height: 3px"></div>
    </v-row>
    <v-row  align="center" justify="center" class="ma-0 mt-9 white--text" style="height: calc(20vh - 40px);">
      <v-col cols="12" class="pa-0 ma-0 d-flex justify-center">
        <span>@copyright Samuel Maia</span>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0 d-flex justify-center">
        <a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PrimaryInformation',
  data() {
    return {
    }
  },
  computed: {
    getHeaderSize() {
      const optionsSize = {
        xs: 'text-h5',
        sm: 'display-1',
        md: 'display-2',
        lg: 'display-2',
        xl: 'display-2'
      }
      return optionsSize[this.$vuetify.breakpoint.name] || 'text-h5'
    }
  }
}
</script>

<style lang="sass">
</style>