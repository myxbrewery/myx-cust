<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
if (!('Notification' in window)) {
  alert('This browser does not support desktop notifications.');
}
else {
  Notification.requestPermission()
    .then(permission => console.log);
}

export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: "Arciform";
  src: url("/static/css/fonts/Arciform.otf") format("opentype");
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  max-width: 97vw;
  padding: 0;
  margin-top: 1vw;
}
</style>
