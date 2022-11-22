<template>
  <v-container fluid class="pa-0 ma-0 d-flex all-view-height">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      style="min-width: 60px"
      absolute
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://cdn.dribbble.com/users/3958478/screenshots/11016183/media/9f2baddbecd4ae21ec86b88c5ba1c0fd.png?compress=1&resize=400x300&vertical=top"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>SM Blazy</v-list-item-title>

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
          @click="goToPath(item.action)"
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
    <v-row class="ma-0 ml-15">
      <v-col cols="12" class="pa-0">
        <router-view></router-view>
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
          { title: 'Inicio', icon: 'mdi-home-city', action: "/" },
          { title: 'Cadastro de usuários', icon: 'mdi-account', action: "/cadastro-usuarios" },
          { title: 'Listar usuários', icon: 'mdi-format-list-bulleted-square', action: "/lista-usuarios" },
        ],
        mini: true,
      }
    },
    methods: {
      goToPath (path) {
        if (this.$route.path !== path) this.$router.push(path)
      }
    }
  }
</script>

<style>
</style>