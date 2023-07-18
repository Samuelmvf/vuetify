<template>
  <v-container fluid class="bg-gradient-finish-white all-view-height">
    <v-row justify="center" class="my-5">
      <v-icon class="pr-3 white--text" large>mdi-format-list-bulleted-square</v-icon>
      <h1 class="white--text font-poppins" style="font-weight: 500; font-size: 2.125rem;">{{ title }}</h1>
    </v-row>
    <v-list
      three-line
      class="mx-10"
      rounded
    >
      <div v-for="(user, index) in users" :key="user.id">
        <v-list-item :class="`${ index > 0 ? 'pt-2' : ''}`">
          <v-list-item-avatar>
            <v-img
              :src="getIcon(user.iconId)"
              >
            </v-img>
          </v-list-item-avatar>

          <v-list-item-content class="pa-0 ma-0">
            <v-row class="pa-0 ma-0 full-height">
              <v-col class="pa-5 d-flex flex-column" cols="12" sm="8" md="10">
                <span class="text-subtitle-1">{{ user.fullName }}</span>
                <span class="text-body-2 mt-3">{{ user.adress }}</span>
              </v-col>
              <v-col class="pa-0 d-flex" cols="12" sm="4" md="2">
                <v-divider
                  vertical
                ></v-divider>
                <div class="d-flex justify-center align-center full-width">
                  <v-tooltip
                    bottom
                    open-delay="500"
                    color="primary"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-account-edit</v-icon>
                      </v-btn>
                    </template>
                    <span>Edit</span>
                  </v-tooltip>
                  <v-tooltip
                    bottom
                    open-delay="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        color="secondary"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </template>
                    <span>Show more</span>
                  </v-tooltip>
                  <v-tooltip
                    bottom
                    open-delay="500"
                    color="red"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        color="error"
                        v-bind="attrs"
                        v-on="on"
                        @click="deleteUser(user.id)"
                      >
                        <v-icon>mdi-account-remove</v-icon>
                      </v-btn>
                    </template>
                    <span>Delete</span>
                  </v-tooltip>
                </div>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index !== users.length - 1"></v-divider>
      </div>
    </v-list>
  </v-container>
</template>

<script>
/* eslint-disable */
import userService from '@/services/userService'

const defaultPersonIcon = require('@/assets/icons/persons/icon-person-default.png')

export default {
  name: 'UserList',
  data() {
    return {
      loading: false,
      users: [],
      title: 'List of users'
    }
  },
  computed: {
    personsIcon () {
      return this.$root.icons?.persons || []
    }
  },
  methods: {
    deleteUser (userId) {
      this.loading = true
      userService.deleteById(userId)
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })

    },

    findAllUsers () {
      this.loading = true
      userService.getAll()
        .then(response => {
          this.loading = false
          this.users = response.data.users
          console.log(response)
        })
        .catch(() => {
          this.loading = false
          this.notificationManagement.notifyUser({
            message: "Erro on list users, please reload your page",
            timeout: 2000,
            showing: true,
            color: 'error'
          })
        })
    },

    getIcon (iconId) {
      const personIcon = this.personsIcon.find(icon => icon.id === iconId)
      return !!personIcon ? personIcon.img : defaultPersonIcon
    }
  },
  mounted () {
    this.findAllUsers()
  },
}
</script>

<style>

</style>