<template>
  <v-container fluid class="pa-0 ma-0 d-flex all-view-height">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row class="ma-0">
      <v-col cols="12" md="6" class="pa-0 purple darken-3 d-flex justify-center align-center">
        <v-btn>Cadastrar funcionário</v-btn>
      </v-col>
      <v-col cols="12" md="6" class="pa-0 purple lighten-3  d-flex justify-center align-center">
        <v-btn>Listar Funcionários</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
  }
</script>

<style>
.all-view-height {
  height: 100vh;
}
.full-height {
  height: 100%;
}
</style>