<template>
  <div id="app" :style="{ backgroundImage: `url(${nextBackgroundImage})` }">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/image01">Image01</router-link>|
      <router-link to="/image02">Image02</router-link>|
      <router-link to="/image03">Image03</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const checkImage = (path) =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve({ img, status: 'ok' })
    img.onerror = () => resolve({ img, status: 'error' })
    img.src = path
  })

const loadImg = (...paths) => Promise.all(paths.map(checkImage))

export default {
  name: 'App',
  computed: {
    ...mapGetters(['loading', 'nextBackgroundImage']),
  },
  beforeMount() {
    loadImg(
      require('@/assets/images/img00.jpg'),
      require('@/assets/images/img01.jpg'),
      require('@/assets/images/img02.jpg'),
      require('@/assets/images/img03.jpg')
    ).then((images) => {
      this.addToBackgroundImagesAction({ image00: images[0].img.src })
      this.addToBackgroundImagesAction({ image01: images[1].img.src })
      this.addToBackgroundImagesAction({ image02: images[2].img.src })
      this.addToBackgroundImagesAction({ image03: images[3].img.src })
    })
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundImagesAction',
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
