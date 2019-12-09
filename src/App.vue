<template>
  <div id="app" :style="{ backgroundImage: `url(${nextBackgroundImage})` }">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/image01">Image01</router-link>|
      <router-link to="/image02">Image02</router-link>|
      <router-link to="/image03">Image03</router-link>|
      <router-link to="/image04">Image04</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Preload from 'preload-it'

const preload = Preload()

export default {
  name: 'App',
  computed: {
    ...mapGetters(['loading', 'nextBackgroundImage']),
  },
  beforeMount() {
    preload
      .fetch([
        require('@/assets/images/image00.jpg'),
        require('@/assets/images/image01.jpg'),
        require('@/assets/images/image02.jpg'),
        require('@/assets/images/image03.jpg'),
        require('@/assets/videos/video01.mp4'),
        require('@/assets/images/image04.jpg'),
      ])
      .then((items) => {
        console.log('Itens: ', items)
      })
    preload.onfetched = (item) => {
      this.addToBackgroundsAction({ [item.fileName.split('.')[0]]: item.url })
    }
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundsAction',
    ]),
  },
}
</script>

<style lang="scss">
$base-color: #2c3e50;
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
  display: block;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $base-color;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  #nav {
    position: absolute;
    z-index: 10;
    padding: 10px;

    a {
      font-weight: bold;
      color: $base-color;
      text-decoration: none;
    }
  }
}

#nprogress .bar {
  background: $base-color !important;
}
</style>
