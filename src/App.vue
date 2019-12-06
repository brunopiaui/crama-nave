<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span @click="routerTo(1)">Image01</span> |
      <span @click="routerTo(2)">Image02</span> |
      <span @click="routerTo(3)">Image03</span>
    </div>
    <transition name="router-anim" leave-to-class="animated routerZoom">
      <router-view />
    </transition>
  </div>
</template>

<script>
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
  data() {
    return {
      image01: '',
      image02: '',
      image03: '',
    }
  },
  beforeMount() {
    loadImg(
      require('@/assets/images/img01.jpg'),
      require('@/assets/images/img02.jpg'),
      require('@/assets/images/img03.jpg')
    ).then((images) => {
      this.image01 = images[0].img.src
      this.image02 = images[1].img.src
      this.image03 = images[2].img.src
    })
  },
  methods: {
    routerTo(index) {
      let app = document.getElementById('app')
      let next = '/'
      let image = ''
      switch (index) {
        case 1:
          image = `url(${this.image01})`
          next = 'image01'
          break
        case 2:
          image = `url(${this.image02})`
          next = 'image02'
          break
        case 3:
          image = `url(${this.image03})`
          next = 'image03'
          break
      }
      app.style.backgroundImage = image
      this.$router.push({ name: next })
    },
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

    span {
      cursor: pointer;
    }

    a,
    span {
      font-weight: bold;
      color: $base-color;
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

#nprogress .bar {
  background: $base-color !important;
}
</style>
