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

@font-face {
  font-family: "Astronaut";
  src: url("/static/css/fonts/Astronaut.otf") format("opentype");
}

@font-face {
  font-family: "Noah";
  src: url("/static/css/fonts/Noah.otf") format("opentype");
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Noah';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.myx-container {
  max-width: 97vw;
  padding: 0;
  margin: auto;
  margin-top: 1vw;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
