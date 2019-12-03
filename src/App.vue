<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/image01">Image01</router-link>|
      <router-link to="/image02">Image02</router-link>|
      <router-link to="/image03">Image03</router-link>
    </div>
    <transition
      name="router-anim"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
body,
html {
  top: 0;
  left: 0;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#app {
  top: 0;
  left: 0;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  #nav {
    position: absolute;
    padding: 10px;
  }
}
</style>
