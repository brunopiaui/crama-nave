<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div v-if="progressing" class="loading">
      <img src="./assets/images/logoloading.svg" />
      {{ progress }}%
    </div>

    <header class="top">
      <div class="logo">
        <div style="position:relative;">
          <router-link to="/">
            <img class="imgLogo" src="./assets/images/logo_home.svg" />
            <!-- <img
              style="position:absolute; display:block; top:0;"
              src="./assets/images/logo_int.svg"
            /> -->
          </router-link>
        </div>
        <div class="pccLogo">
          <span class="pccLogoPense">Pense</span>
          <span class="pccLogoConecte">Conecte</span>
          <span class="pccLogoCultive">Cultive</span>
        </div> </div
      ><!-- logo -->
      <nav class="blockMenu">
        <a
          class="menu"
          @mouseover="mouseoverMenuDrop"
          @mouseleave="mouseleaveMenuDrop"
          >O que fazemos
          <img class="setaDrop" src="./assets/images/seta_dropdown.svg" />
          <div class="menuDropDown">
            <router-link to="/consultoria">Consultoria</router-link>
            <router-link to="/modelodenegocios">Modelo de negócios</router-link>
            <router-link to="/biopaisagismo">Biopaisagismo</router-link>
          </div>
        </a>
        <router-link class="menu" to="/bioviva">Bioviva</router-link>
        <router-link class="menu" to="/midia">Mídia</router-link>
        <router-link class="menu" to="/contato">Contato</router-link>
      </nav>

      <div class="som">
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
              transform="translate(8.401 9.412)"
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
              opacity="1"
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
    </footer>
    <audio
      id="pageSound"
      controls
      autoplay
      loop
      style="position:absolute; z-index:99999999999; bottom:0; display:none;"
    >
      <source src="./assets/sounds/experience.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio> </div
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
      cliqueSomAtivo: true,
    }
  },
  computed: {
    ...mapGetters(['loading', 'nextBackground', 'progressing', 'progress']),
    // inRouterHome() {
    //   return this.$route.path !== '/'
    // },
  },
  watch: {
    '$route.path': 'checkPath',
  },
  created() {
    this.checkPath()
    this.tl = this.$gsap.timeline()
    this.tlDropMenu = this.$gsap.timeline({ paused: true })
    this.startProgressingAction()
  },
  mounted() {
    if (this.progressing) {
      this.tl.to(
        '.loading',
        {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            this.stopProgressingAction()
          },
        },
        '+=0.5'
      )
    }
    this.tlsomOn = this.$gsap.timeline({ repeat: -1 })
    this.tlsomOn.to('.cu2 path', {
      opacity: 0.3,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })
    this.tlsomOn.to('.cu2 path', {
      opacity: 1,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })

    this.tlDropMenu
      .to('.setaDrop', {
        rotation: 180,
        duration: 0.5,
        scale: 1.2,
        ease: 'power1.out',
      })
      .to(
        '.menuDropDown',
        {
          visibility: 'visible',
          ease: 'power1.out',
        },
        '<'
      )
      .to(
        '.menuDropDown a',
        {
          opacity: 1,
          y: 10,
          ease: 'power1.out',
          stagger: 0.1,
          duration: 0.3,
        },
        '<'
      )
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
        url: require('@/assets/images/testepeso.jpg'),
        meta: { type: 'image', name: 'image10' },
      },
      {
        url: require('@/assets/images/testepeso2.jpg'),
        meta: { type: 'image', name: 'image11' },
      },
      {
        url: require('@/assets/images/testepeso3.jpg'),
        meta: { type: 'image', name: 'image12' },
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
        url: require('@/assets/videos/pesovideo.mp4'),
        meta: { type: 'video', name: 'video02' },
      },
      {
        url: require('@/assets/videos/pesovideo2.mp4'),
        meta: { type: 'video', name: 'video02' },
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

    mouseoverMenuDrop() {
      this.tlDropMenu.play()
    },
    mouseleaveMenuDrop() {
      this.tlDropMenu.reverse()
    },

    cliqueSom: function() {
      let som = document.getElementById('pageSound')
      if (this.cliqueSomAtivo === true) {
        this.$gsap.to('.cu', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
        som.pause()
        this.cliqueSomAtivo = false
      } else {
        this.$gsap.to('.cu', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
        som.play()
        this.cliqueSomAtivo = true
      }
    },

    checkPath: function() {
      let route = this.$route.path
      // this.testeData = route
      // var resultado = this.testeData.replace('/', 'back-')
      // this.testeData = resultado
      if (route !== '/') {
        this.tlMenuIn = this.$gsap.timeline()
        this.tlMenuIn
          .to(['header.top'], {
            y: -20,
            duration: 0.5,
            ease: 'power1.0ut',
          })
          .to(
            ['img.imgLogo'],
            {
              width: 123.56,
              duration: 0.5,
              ease: 'power1.out',
            },
            0
          )
          .to(['.pccLogo'], {
            width: 54,
            opacity: 1,
            duration: 0.3,
            ease: 'power1.out',
          })
        // this.isInternal = true,
        // this.menuHorizontal = false,
        // this.menuVertical = true
      } else {
        this.tlMenuHome = this.$gsap.timeline()
        this.tlMenuHome
          .to(['.pccLogo'], {
            width: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.out',
          })
          .to(['header.top'], {
            y: 0,
            duration: 0.5,
            ease: 'power1.out',
          })
          .to(
            ['img.imgLogo'],
            {
              width: 147.11,
              duration: 0.5,
              ease: 'power1.out',
            },
            '<'
          )

        // this.isInternal = false,
        // this.menuHorizontal = true,
        // this.menuVertical = false
      }
    },
  },
}
</script>

<style lang="scss">
$base-color: #fff;
$base-colorV1: #f3f3f3;
$base-colorV2: #e9e9e9;
$base-colorV3: #cbcbcb;

div.logo img.imgLogo {
  width: 147.11px;
  // transition: all 0.5s ease 0.4s;
}
div.pccLogo {
  display: flex;
  flex-direction: column;
  width: 0;
  padding: 7px 0 0 16px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  // transition: opacity 0.8s ease 0s, max-width 0.8s ease 0s;
  span {
    display: block;
    font-size: 10px;
  }
}
// .displayBlock {
//   max-width: 54px !important;
//   opacity: 1 !important;
//   transition: opacity 0.8s ease 0.3s, max-width 0.8s ease 0.3s !important;
// }

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
    z-index: 998;
    width: 100%;
    height: 430px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0))
    );
  }

  // div.areaHamburguer {
  //   position: absolute;
  //   right: 10px;
  //   bottom: 10px;
  //   width: 250px;
  //   height: 250px;
  //   background: transparent;
  //   border: 1px solid #fff;
  //   outline: 1px solid transparent;
  // }

  // div.menuHamburguer {
  //   position: absolute;
  //   right: 10px;
  //   bottom: 10px;
  //   width: 55.88px;
  //   height: 55px;
  //   cursor: pointer;
  //   background: rgba(255, 255, 255, 1);
  //   border-radius: 80% 75% 80% 79% / 70% 76% 76% 81%;
  //   outline: 1px solid transparent;
  //   transition: all 0.5s;
  //   animation: morph 3s linear infinite;
  //   animation-play-state: paused;
  //   transform-style: preserve-3d;
  //   will-change: border-radius;
  // }

  // div.menuHamburguer:hover {
  //   width: 60.88px;
  //   height: 60px;
  //   background-color: aqua !important;
  // }

  // .mover {
  //   animation-play-state: running !important;
  // }

  // @keyframes morph {
  //   0%,
  //   100% {
  //     border-radius: 80% 75% 80% 79% / 70% 76% 76% 81%;
  //     transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  //   }
  //   34% {
  //     border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
  //     transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  //   }
  //   50% {
  //     transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  //   }
  //   67% {
  //     border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  //     transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  //   }
  // }

  header.top {
    position: fixed;
    z-index: 10;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    padding: 60px 3% 0 3%;
    // transition: all 0.5s ease 0.4s;

    nav.blockMenu {
      display: flex;
      flex-direction: row;
    }

    a.menu {
      padding: 0 52.5px;
      font-size: 16px;
      font-weight: 300;
      color: $base-color;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.5s;
    }
    a.menu:hover {
      color: $base-colorV2;
    }
    img.setaDrop {
      margin: 0 0 0 10px;
    }
    .menuDropDown {
      position: absolute;
      visibility: hidden;
      padding: 0 0 0 8px;
    }
    .menuDropDown a {
      transform: translate(0px, -10px);
      margin: 0 0 6px 0;
      display: block;
      opacity: 0;
      font-size: 14px;
      transition: color 0.5s;
    }
    .menuDropDown a:hover {
      color: $base-colorV3;
    }
    div.logo {
      display: flex;
      flex-direction: row;
      width: 194px;
    }
  }

  // header.paddingTop {
  //   padding-top: 40px !important;
  //   transition: all 0.5s ease !important;
  // }

  footer.bottom {
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    padding: 0 3% 35px 3%;

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
      flex-grow: 1;
      background-color: aqua;
    }
    div.sound {
      display: flex;
      flex-direction: column;
      align-items: center;
      div.ative {
        padding-bottom: 60px;
        div.rotate {
          filter: progid:dximagetransform.microsoft.basicimage(rotation=3); // For IE support
          -webkit-transform: rotate(-90deg);
          -moz-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>
