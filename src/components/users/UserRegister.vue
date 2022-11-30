<template>
  <v-container fluid class="bg-gradient-finish-white all-view-height" style="min-width:600px;">
    <v-form
      ref="formUserRegister"
    >
      <v-row justify="center" class="my-5">
        <v-icon class="pr-3 white--text" large>mdi-account-plus</v-icon>
        <h1 class="white--text font-poppins" style="font-weight: 500; font-size: 2.125rem;">User register</h1>
      </v-row>
      <v-card flat class="pa-5 mx-10" style="height: calc(100vh - 40px)">
        <v-row class="px-5 pt-5 font-poppins">
          <v-col cols="12" sm="6" class="pa-0">
            <v-text-field dense label="Full name*" class="pr-md-1" outlined
              v-model="user.fullName"
              :rules="[value => !!value || 'Mandatory field']"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-text-field dense label="Adress*" class="pl-md-1" outlined
              v-model="user.adress"
              :rules="[value => !!value || 'Mandatory field']"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="px-5 font-poppins">
          <v-col cols="12" sm="6" class="pa-0">
            <v-text-field dense label="Phone*" class="pr-md-1" outlined
              v-model="user.phone"
              :rules="[value => !!value || 'Mandatory field']"
            ></v-text-field>
          </v-col>
          <v-col cols="8" sm="4" class="pa-0">
            <v-text-field dense label="Login*" class="pl-md-1" outlined
              v-model="user.login"
              :rules="[value => !!value || 'Mandatory field']"
            ></v-text-field>
          </v-col>
          <v-col cols="4" sm="2" class="pa-0">
            <v-select
              v-model="user.iconId"
              :items="personsIcon"
              label="Avatar"
              outlined
              item-value="id"
              dense
            >
              <template v-slot:item="{ item }">
                <v-img
                  :src="item.img"
                  height="32px"
                  contain
                  >
                </v-img>
              </template>
              <template v-slot:selection="{ item }">
                <v-img
                  :src="item.img"
                  height="32px"
                  contain
                  >
                </v-img>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row class="px-5 font-poppins">
          <v-col cols="12" sm="6" class="pa-0">
            <v-text-field dense label="Email*" class="pr-md-1" outlined
              v-model="user.email"
              :rules="[value => !!value || 'Mandatory field',
                rulesEmail()]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <v-text-field dense label="Password*" class="pl-md-1" outlined
              v-model="user.password"
              :rules="[value => !!value || 'Mandatory field']"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn
            color="primary"
            class="ma-2 white--text"
            @click.prevent="actionPersistUser"
          >
            Register
          </v-btn>
          <v-btn
            color="secondary"
            class="ma-2 white--text"
            @click.prevent="clearFields"
          >
            Clear
          </v-btn>
          <v-btn
            color="grey"
            class="ma-2 white--text"
            @click.prevent="goToHome"
          >
            Cancel
          </v-btn>
        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import userService from '@/services/userService'

export default {
  name: 'UserRegister',
  data() {
    return {
      user: {
        id: undefined,
        fullName: undefined,
        adress: undefined,
        phone: undefined,
        login: undefined,
        email: undefined,
        iconId: undefined,
        password: undefined
      }
    }
  },

  computed: {
    personsIcon () {
      return this.$root.icons?.persons || []
    }
  },

  methods: {
    actionPersistUser () {
      const isFormValid = this.$refs.formUserRegister.validate()
      if (isFormValid) {
        userService.saveOrUpdate(this.user)
          .then(() => {
            this.$root.notificationManagement.notifyUser({
              message: "New user has been created",
              timeout: 2000,
              showing: true,
              color: 'success'
            })
            this.$router.push('/user/list')
          })
      }
    },

    clearFields () {
      this.user = {
        id: undefined,
        fullName: undefined,
        adress: undefined,
        phone: undefined,
        login: undefined,
        email: undefined,
        password: undefined
      }
      this.$nextTick(() => {
        this.$refs.formUserRegister?.resetValidation()
      })
    },

    goToHome () {
      this.$router.push({ name: 'home' })
    },

    rulesEmail () {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(this.user.email) || 'Invalid email address'
    },
    
  },
  mounted () {
    this.clearFields()
  }
}
</script>

<style>

</style>