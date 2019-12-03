<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span @click="routerTo(1)">Image01</span> |
      <span @click="routerTo(2)">Image02</span> |
      <span @click="routerTo(3)">Image03</span>
    </div>
    <transition name="router-anim" leave-active-class="animated routerZoom">
      <router-view />
    </transition>
  </div>
</template>

<script>
import img01 from '@/assets/images/img01.jpg'
import img02 from '@/assets/images/img02.jpg'
import img03 from '@/assets/images/img03.jpg'

export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      pageIndex: 0,
    }
  },
  watch: {
    $route(to, from) {
      this.pageIndex = to.meta.index
      // if (from.meta.index !== undefined) {
      //   this.transitionName =
      //     to.meta.index < from.meta.index ? 'slide-right' : 'slide-left'
      // }
    },
  },
  methods: {
    routerTo(index) {
      let app = document.getElementById('app')
      switch (index) {
        case 1:
          app.style.backgroundImage = `url(${img01})`
          this.$router.push({ name: 'image01' })
          break
        case 2:
          app.style.backgroundImage = `url(${img02})`
          this.$router.push({ name: 'image02' })
          break
        case 3:
          app.style.backgroundImage = `url(${img03})`
          this.$router.push({ name: 'image03' })
          break
      }
    },
  },
}
</script>

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
  display: block;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  #nav {
    position: absolute;
    padding: 10px;
    span {
      cursor: pointer;
    }
    a,
    span {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
    }
  }
}

@-webkit-keyframes routerZoom {
  to {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

  10% {
    opacity: 1;
  }
}

@keyframes routerZoom {
  to {
    opacity: 0;
    -webkit-transform: scale3d(2, 2, 2);
    transform: scale3d(2, 2, 2);
  }

  10% {
    opacity: 1;
  }
}

.routerZoom {
  -webkit-animation-name: routerZoom;
  animation-name: routerZoom;
}
</style>
