<template>
  <div id="app">
    <router-view/>
  </div>
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

html, body {
  height: 100%;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Noah';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
}

.myx-container {
  max-width: 97%;
  padding: 0;
  margin: auto;
  margin-top: 1%;
}

.btn {
  margin: 0;
  margin-top: 5px;
  height: 8vh;

  font-size: 1.5rem;
  font-weight: 500;
}

.btn:hover {
  background-color: salmon;
}

</style>
