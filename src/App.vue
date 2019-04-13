<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
/*
if (!('Notification' in window)) {
  alert('This browser does not support desktop notifications.');
}
else {
  Notification.requestPermission()
    .then(permission => console.log);
}
*/

function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

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

html {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

body {
  height: 100%;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Noah';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  overflow: hidden;
}

#app a {
  color: #2c3e50;
}

.myx-container {
  max-width: 97%;
  padding: 0;
  margin: auto;
  margin-top: 1%;
}

.v-btn.btn {
  margin: 0;
  margin-top: 5px;
  height: 8%;

  font-size: 1.5rem;
  font-weight: 500;
}
</style>
