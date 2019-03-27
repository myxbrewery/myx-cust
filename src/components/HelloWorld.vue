<template>
  <div class="hello">
    <a class="btn" @click="notify(0)">
      Notify
    </a>
    <a class="btn" @click="notify(3000)">
      Notify with delay
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    notify(delay) {
      let title = 'Title';
      let body = 'Body';
      setTimeout(() => new Notification(title, { body }), delay);
    }
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
