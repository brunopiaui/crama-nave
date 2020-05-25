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
        <!-- <img src="./assets/images/som.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37.734"
          height="37.004"
          viewBox="0 0 37.734 37.004"
          style="cursor:pointer;"
          @click="cliqueSom"
        >
          <g
            id="Component_13_31"
            data-name="Component 13 – 31"
            transform="translate(0.592 0.5)"
          >
            <path
              id="Path_310"
              data-name="Path 310"
              d="M18.763,0S11.984,0,7.012,4.067-1.574,14.914.685,23.048s9.942,11.3,12.654,12.2,8.135,2.26,16.721-3.615S38.2,14.462,32.321,6.779C28.506,1.79,24.638,0,18.763,0Z"
              transform="translate(0.003)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            />
            <g
              id="Group_157"
              data-name="Group 157"
              transform="translate(12.315 9.412)"
              class="cu"
            >
              <g
                id="Group_154"
                data-name="Group 154"
                transform="translate(0 0)"
              >
                <g id="_x37_tz7TN.tif_3_">
                  <path
                    id="Path_135"
                    data-name="Path 135"
                    d="M11.687,4.9h-.015c.006-1.352.015-2.693-.015-4.031A.883.883,0,0,0,10.234.183C9.4.8,8.623,1.5,7.854,2.136L5.075,4.443a1.343,1.343,0,0,1-.764.267c-1.082.03-2.165,0-3.247.018-.692.01-1.053.349-1.058,1Q0,7.131,0,8.538t.009,2.813c0,.646.366.984,1.058,1,1.082.017,2.165-.011,3.247.018a1.337,1.337,0,0,1,.764.267l2.779,2.307c.768.636,1.546,1.331,2.38,1.953a.883.883,0,0,0,1.423-.686c.03-1.338.019-2.679.015-4.031h.015V4.9Z"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1"
                  />
                </g>
              </g>
            </g>
            <g
              id="Group_159"
              data-name="Group 159"
              transform="translate(21.718 11.336)"
              opacity="0"
              class="cu2"
            >
              <path
                id="Path_311"
                data-name="Path 311"
                class="cls-2"
                d="M0,.837A4.669,4.669,0,0,1,.7,1.312,4.785,4.785,0,0,1,2.4,6.4C2.014,7.783,0,9.238,0,9.238"
                transform="translate(0.003 1.439)"
              />
              <path
                id="Path_312"
                data-name="Path 312"
                class="cls-2"
                d="M0,.837a7.2,7.2,0,0,1,1.09.733A7.378,7.378,0,0,1,3.7,9.41C3.107,11.547,0,13.791,0,13.791"
                transform="translate(2.302 -0.837)"
              />
            </g>
          </g>
        </svg>
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
      cliqueSomAtivo: false,
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
    cliqueSom: function() {
      if (this.cliqueSomAtivo === false) {
        console.log('cu')
        this.$gsap.to('.cu', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
        this.cliqueSomAtivo = true
      } else {
        console.log('cu2')
        this.$gsap.to('.cu', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
        this.cliqueSomAtivo = false
      }
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
    top: 0;
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
