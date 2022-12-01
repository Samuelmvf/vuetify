<template>
  <div>
    <v-snackbar
      v-for="(notification, index) in showingNotifications"
      :key="notification.message + Math.random()"
      :timeout="notification.timeout"
      :color="notification.color"
      v-model="notification.showing"
      :style="`bottom: ${index * 60 + 8}px`"
      @input="removeShowedNotification"
    >
      {{ notification.message }}
      <v-btn
        v-if="notification.timeout === 0"
        text
        @click="notification.showing = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'NotificationManagement',
  data () {
    return {
      notifications: [],
      cleanUnusedNotifications: undefined
    }
  },
  computed: {
    showingNotifications () {
      return this.notifications.filter(notification => notification.showing)
    }
  },
  methods: {
    notifyUser (notification) {
      this.notifications = [ ...this.notifications, notification]
    },
    removeShowedNotification () {
      this.notifications = this.notifications.filter(notification => notification.showing)
    }
  }
}
</script>

<style>

</style>