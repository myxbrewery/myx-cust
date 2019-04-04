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
  max-width: 97vw;
  padding: 0;
  margin: auto;
  margin-top: 1vw;
}

.btn {
  background-color: salmon;
  width: 100%;
  height: 57px;

  margin-top: 0.5vh;
  padding: 0.75rem;

  font-size: 1.5rem;
  font-weight: 500;

  position: absolute;
  left: 0;
  bottom: 0;
}

.btn:hover {
  background-color: salmon;
}

</style>
