<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/image01">Image01</router-link>|
      <router-link to="/image02">Image02</router-link>|
      <router-link to="/image03">Image03</router-link>|
      <router-link to="/image04">Image04</router-link>
    </div>
    <router-view class="router" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Preload from 'preload-it-extended-5'

const preload = Preload()

export default {
  name: 'App',
  data() {
    return {
      tl: null,
    }
  },
  computed: {
    ...mapGetters(['loading', 'nextBackground', 'progressing', 'progress']),
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.startProgressingAction()
  },
  beforeMount() {
    preload.fetch([
      {
        url: require('@/assets/images/image00.jpg'),
        meta: { type: 'image', name: 'image00' },
      },
      {
        url: require('@/assets/images/image01.jpg'),
        meta: { type: 'image', name: 'image01' },
      },
      {
        url: require('@/assets/images/image02.jpg'),
        meta: { type: 'image', name: 'image02' },
      },
      {
        url: require('@/assets/images/image03.jpg'),
        meta: { type: 'image', name: 'image03' },
      },
      {
        url: require('@/assets/videos/video01.mp4'),
        meta: { type: 'video', name: 'video01' },
      },
      {
        url: require('@/assets/images/image04.jpg'),
        meta: { type: 'video', name: 'image04' },
      },
    ])
    preload.onfetched = (item) => {
      this.addToBackgroundsAction({
        name: item.meta.name,
        type: item.meta.type,
        url: item.blobUrl,
      })
    }
    preload.onprogress = (event) => {
      this.setProgressAction(event.progress)
    }
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundsAction',
      'startProgressingAction',
      'stopProgressingAction',
      'setProgressAction',
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
  color: $base-color;
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

  .router {
    z-index: 5;
  }
}

.image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.video {
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

.loading {
  position: fixed;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: aliceblue;
  background-color: $base-color;
}
</style>
