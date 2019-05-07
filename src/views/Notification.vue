<template>
  <div id="notification">
    <a class="btn waves-effect waves-light" @click="notify(0)">
      Notify
    </a>
    <a class="btn waves-effect waves-light" @click="notify(2000)">
      Notify with delay
    </a>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    sendNotification(title, body) {
      new Notification(title, { body });
      console.log('Notification:', title,body);
    },

    notify(delay) {
      let title = 'Title';
      let body = 'Body';
      setTimeout(() => this.sendNotification(title, body), delay);
    }
  },
};
</script>

<style scoped>
#notification {
  height: 100%;
  margin-top: 60px;
}
</style>
