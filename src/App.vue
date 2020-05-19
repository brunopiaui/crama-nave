<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div
      class="areaHamburguer"
      @mouseover="isMover = true"
      @mouseleave="isMover = false"
    >
    </div>

    <div
      :class="[menuHamburguer, { mover: isMover }]"
      @mouseover="teste(), (isMover = true)"
      @mouseleave="isMover = false"
    >
    </div>

    <header :class="{ paddingTop: $route.path != '/' }" class="top">
      <div class="logo">
        <div style="position:relative;">
          <router-link to="/">
            <img
              class="imgLogo"
              :class="{ resizeLogo: $route.path != '/' }"
              src="./assets/images/logo_home.svg"
            />
            <!-- <img
              style="position:absolute; display:block; top:0;"
              src="./assets/images/logo_int.svg"
            /> -->
          </router-link>
        </div>
        <div :class="{ displayBlock: $route.path != '/' }" class="pccLogo">
          <span>Pense</span>
          <span>Conecte</span>
          <span>Cultive</span>
        </div> </div
      ><!-- logo -->
      <nav>
        <a class="menu"
          >O que fazemos
          <router-link to="/consultoria">1</router-link>
          <router-link to="/modelodenegocios">2</router-link>
          <router-link to="/biopaisagismo">3</router-link>
        </a>
        <router-link class="menu" to="/bioviva">Bioviva</router-link>
        <router-link class="menu" to="/midia">Mídia</router-link>
        <router-link class="menu" to="/contato">Contato</router-link>
      </nav>

      <div>
        <img src="./assets/images/som.svg" />
      </div>
    </header>

    <!-- <header :class="{ displayNone: $route.path == '/' }" class="topInt">
      <div class="logo">
        <router-link to="/">
          <img src="./assets/images/logo_int.svg"
        /></router-link>
      </div>
      <nav>
        <a class="menu"
          >O que fazemos
          <router-link to="/consultoria">1</router-link>
          <router-link to="/modelodenegocios">2</router-link>
          <router-link to="/biopaisagismo">3</router-link>
        </a>
        <router-link class="menu" to="/bioviva">Bioviva</router-link>
        <router-link class="menu" to="/midia">Mídia</router-link>
        <router-link class="menu" to="/contato">Contato</router-link>
      </nav>

      <div>
        <img src="./assets/images/som.svg" />
      </div>
    </header> -->

    <div class="backTop"></div>
    <router-view class="router" />

    <footer class="bottom">
      <div class="share">
        <div><span>Contato.</span></div>
        <div class="fb">
          <img src="./assets/images/fb_2.svg" />
        </div>
        <div class="inst">
          <img src="./assets/images/insta_2.svg" />
        </div>
        <div class="mail">
          <img src="./assets/images/mail_2.svg" />
        </div>
      </div>
      <!-- <div class="ind">indicador</div> -->
      <!-- <div class="sound">
        <div>
          ♫
        </div>
      </div> -->
    </footer> </div
  ><!-- app -->
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
      isMover: false,
      menuHamburguer: 'menuHamburguer',
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
    teste: function() {
      console.log('teste')
      this.$gsap.from('.areaHamburguer', { duration: 1, scale: 8 })
    },
  },
}
</script>

<style lang="scss">
$base-color: #ffffff;

div.logo img.imgLogo {
  transition: all 0.5s ease 0.4s;
  width: 147.11px;
}
.resizeLogo {
  width: 123.56px !important;
  transition: all 0.5s ease 0s !important;
  // transform: scale(0.7);
}

div.pccLogo {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 7px 0 0 16px;
  pointer-events: none;
  transition: opacity 0.8s ease 0s, max-width 0.8s ease 0s;
  span {
    font-size: 10px;
    display: block;
  }
}
.displayBlock {
  max-width: 54px !important;
  opacity: 1 !important;
  transition: opacity 0.8s ease 0.3s, max-width 0.8s ease 0.3s !important;
}

#app {
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: $base-color;
  // text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  div.backTop {
    position: fixed;
    width: 100%;
    height: 430px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0))
    );
    z-index: 998;
  }

  div.areaHamburguer {
    width: 250px;
    height: 250px;
    outline: 1px solid transparent;
    position: absolute;
    background: transparent;
    border: 1px solid #ffffff;
    right: 10px;
    bottom: 10px;
  }

  div.menuHamburguer {
    background: rgba(255, 255, 255, 1);
    border-radius: 80% 75% 80% 79% / 70% 76% 76% 81%;
    width: 55.88px;
    height: 55px;
    outline: 1px solid transparent;
    cursor: pointer;
    animation: morph 3s linear infinite;
    transform-style: preserve-3d;
    will-change: border-radius;
    animation-play-state: paused;
    transition: all 0.5s;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  div.menuHamburguer:hover {
    background-color: aqua !important;
    width: 60.88px;
    height: 60px;
  }

  .mover {
    animation-play-state: running !important;
  }

  // div.menuTeste:hover {
  //   animation-play-state: running;
  // }
  @keyframes morph {
    0%,
    100% {
      border-radius: 80% 75% 80% 79% / 70% 76% 76% 81%;
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    34% {
      border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
    }
    50% {
      transform: translate3d(0, 0, 0) rotateZ(0.01deg);
    }
    67% {
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
      transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
    }
  }

  header.top {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 94%;
    padding: 60px 3% 0 3%;
    z-index: 999;
    transition: all 0.5s ease 0.4s;

    a.menu {
      font-weight: 300;
      color: $base-color;
      text-decoration: none;
      font-size: 16px;
      padding: 0 52.5px;
    }
    div.logo {
      display: flex;
      flex-direction: row;
    }
  }

  header.paddingTop {
    padding-top: 40px !important;
    transition: all 0.5s ease !important;
  }

  footer.bottom {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94%;
    padding: 0 3% 35px 3%;
    z-index: 999;
    align-items: center;

    div.share {
      display: flex;
      flex-direction: row;
      align-items: center;
      div span {
        font-size: 16px;
      }
      div.fb,
      div.inst,
      div.mail {
        padding: 0 13px 0 13px;
      }
    }
    div.ind {
      background-color: aqua;
      flex-grow: 1;
    }
    div.sound {
      display: flex;
      flex-direction: column;
      align-items: center;
      div.ative {
        padding-bottom: 60px;
        div.rotate {
          -webkit-transform: rotate(-90deg);
          -moz-transform: rotate(-90deg);
          transform: rotate(-90deg);
          filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); //For IE support
        }
      }
    }
  }
}
</style>
