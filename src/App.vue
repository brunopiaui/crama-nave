<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div v-if="progressing" class="loading">
      <img style="width:15%;" src="./assets/images/logoloading.svg" />
      <!-- <img style="width:15%;" src="./assets/images/Navia_01.gif" /> -->
      <!-- {{ progress }}% -->
      <div class="loader1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- loading -->

    <div class="menuMobile" :class="{ menuMobOpen: menuMobisActive }">
      <div class="folhaMenuMob">
        <img src="./assets/images/elementointerna4_2.png" />
      </div>
      <div class="boxMenuMobile">
        <div class="topMenuMobile">
          <img
            class="svgButton"
            src="./assets/images/buttonclosemenumob.svg"
            @click="cliqueCloseMenuMob"
          />
          <div class="listMenuMob">
            <nav>
              <ul>
                <li class="liDrop">
                  <span @click=";[(toggle = !toggle)], moveSetaMob()"
                    >O que fazemos</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    :class="{ setaUp: setaMouseUp }"
                    @click=";[(toggle = !toggle)], moveSetaMob()"
                  >
                    <path
                      d="M4,0,8,7H0Z"
                      transform="translate(8 7) rotate(180)"
                      fill="#586769"
                    />
                  </svg>
                </li>
                <li>
                  <transition name="slide-fade">
                    <div v-show="toggle" class="menuDropMob">
                      <ul>
                        <li>
                          <router-link to="/consultoria"
                            ><span @click="cliqueCloseMenuMob"
                              >Consultoria</span
                            ></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/modelodenegocios"
                            ><span @click="cliqueCloseMenuMob"
                              >Modelo de negócios</span
                            ></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/biopaisagismo"
                            ><span @click="cliqueCloseMenuMob"
                              >Biopaisagismo</span
                            ></router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <li>
                  <router-link to="/bioviva"
                    ><span @click="cliqueCloseMenuMob"
                      >Bioviva</span
                    ></router-link
                  >
                </li>
                <li @click="cliqueCloseMenuMob">
                  <router-link to="/midia">Midia</router-link>
                </li>
                <li @click="cliqueCloseMenuMob">
                  <router-link to="/contato">Contato</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="bottomMenuMobile">
          <img src="./assets/images/fb_3.svg" />
          <img src="./assets/images/insta_3.svg" />
        </div>
      </div>
      <!-- boxMenuMobile -->
    </div>
    <!-- menuMobile -->

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
          <span class="pccLogoPense" :class="{ pensecheck: penseisActive }"
            >Pense</span
          >
          <span
            class="pccLogoConecte"
            :class="{ conectecheck: conecteisActive }"
            >Conecte</span
          >
          <span
            class="pccLogoCultive"
            :class="{ cultivecheck: cultiveisActive }"
            >Cultive</span
          >
        </div> </div
      ><!-- logo -->
      <nav class="blockMenu">
        <a
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          @mouseover="mouseoverMenuDrop"
          @mouseleave="mouseleaveMenuDrop"
          >O que fazemos
          <!-- <img class="setaDrop" src="./assets/images/seta_dropdown.svg" /> -->
          <svg
            class="setaDrop"
            :class="{ setaBio: menuBioisActive }"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="7"
            viewBox="0 0 8 7"
          >
            <path
              id="Polygon_8"
              data-name="Polygon 8"
              d="M4,0,8,7H0Z"
              transform="translate(8 7) rotate(180)"
              fill="#fff"
            />
          </svg>
          <div class="menuDropDown" :class="{ menuDropBio: menuBioisActive }">
            <router-link to="/consultoria">Consultoria</router-link>
            <router-link to="/modelodenegocios">Modelo de negócios</router-link>
            <router-link to="/biopaisagismo">Biopaisagismo</router-link>
          </div>
        </a>
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/bioviva"
          >Bioviva</router-link
        >
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/midia"
          >Mídia</router-link
        >
        <router-link
          class="menu"
          :class="{ menuBio: menuBioisActive }"
          to="/contato"
          >Contato</router-link
        >
      </nav>

      <div class="som">
        <!-- <img src="./assets/images/som.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42.734"
          height="42.004"
          viewBox="-2.5 -2.5 42.734 42.004"
          style="cursor:pointer;"
          :class="{ svgSom: menuBioisActive }"
          @click="cliqueSom"
          @mouseover="hoverSom = true"
          @mouseleave="hoverSom = false"
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
              class="pathSom"
              :class="{ hoverPathSomActive: hoverSom }"
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
      <!-- som -->
      <div class="buttonMenuMobile">
        <img
          src="./assets/images/buttonmenumob.svg"
          @click="cliqueOpenMenuMob"
        />
      </div>
    </header>

    <router-view class="router" />

    <footer class="bottom" :class="{ bottomMob: bottomMobIsActive }">
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
    </footer>
    <audio id="pageSound" controls autoplay loop>
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
      menuBioisActive: false,
      hoverSom: false,
      penseisActive: false,
      conecteisActive: false,
      cultiveisActive: false,
      menuMobisActive: false,
      toggle: false,
      setaMouseUp: false,
      bottomMobIsActive: false,
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'backgrounds',
      'nextBackground',
      'progressing',
      'progress',
    ]),
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
      this.$gsap.to('.loading', {
        duration: 1,
        opacity: 0,
        // delay: 10,
        onComplete: () => {
          this.stopProgressingAction()
        },
      })
    }

    setTimeout(() => this.checkSound(), 1000)

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
        url: require('@/assets/images/image02.jpg'),
        meta: { type: 'image', name: 'image02' },
      },
      {
        url: require('@/assets/images/imagebio.jpg'),
        meta: { type: 'image', name: 'imagebio' },
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
      {
        url: require('@/assets/images/galeria/jardim01/01_01.jpg'),
        meta: { type: 'image', name: 'j101' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_02.jpg'),
        meta: { type: 'image', name: 'j102' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_03.jpg'),
        meta: { type: 'image', name: 'j103' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_04_NAO.jpg'),
        meta: { type: 'image', name: 'j104' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_05.jpg'),
        meta: { type: 'image', name: 'j105' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_07.jpg'),
        meta: { type: 'image', name: 'j106' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_10_NAO.jpg'),
        meta: { type: 'image', name: 'j107' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_12_NAO.jpg'),
        meta: { type: 'image', name: 'j108' },
      },
      {
        url: require('@/assets/images/galeria/jardim01/01_13.jpg'),
        meta: { type: 'image', name: 'j109' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_01.jpg'),
        meta: { type: 'image', name: 'j201' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_02.jpg'),
        meta: { type: 'image', name: 'j202' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_04.jpg'),
        meta: { type: 'image', name: 'j203' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_05.jpg'),
        meta: { type: 'image', name: 'j204' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_06.jpg'),
        meta: { type: 'image', name: 'j205' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_07.jpg'),
        meta: { type: 'image', name: 'j206' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_09.jpg'),
        meta: { type: 'image', name: 'j207' },
      },
      {
        url: require('@/assets/images/galeria/jardim02/02_14.jpg'),
        meta: { type: 'image', name: 'j208' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_01.jpg'),
        meta: { type: 'image', name: 'j301' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_02.jpg'),
        meta: { type: 'image', name: 'j302' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_03.jpg'),
        meta: { type: 'image', name: 'j303' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_09.jpg'),
        meta: { type: 'image', name: 'j304' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_10.jpg'),
        meta: { type: 'image', name: 'j305' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/03_17.jpg'),
        meta: { type: 'image', name: 'j306' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0203.jpg'),
        meta: { type: 'image', name: 'j307' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0206.jpg'),
        meta: { type: 'image', name: 'j308' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0226.jpg'),
        meta: { type: 'image', name: 'j309' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0232.jpg'),
        meta: { type: 'image', name: 'j310' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0233.jpg'),
        meta: { type: 'image', name: 'j311' },
      },
      {
        url: require('@/assets/images/galeria/jardim03/DJJ_0239.jpg'),
        meta: { type: 'image', name: 'j312' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_01.jpg'),
        meta: { type: 'image', name: 'j401' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_06.jpg'),
        meta: { type: 'image', name: 'j402' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_10.jpg'),
        meta: { type: 'image', name: 'j403' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/04_13.jpg'),
        meta: { type: 'image', name: 'j404' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0293.jpg'),
        meta: { type: 'image', name: 'j405' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0309.jpg'),
        meta: { type: 'image', name: 'j406' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0331.jpg'),
        meta: { type: 'image', name: 'j407' },
      },
      {
        url: require('@/assets/images/galeria/jardim04/DJJ_0366.jpg'),
        meta: { type: 'image', name: 'j408' },
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
    preload.oncomplete = (items) => {
      let nextBackground = this.backgrounds(this.$route.meta.image)
      this.setNextBackgroundAction(nextBackground)
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
      'setNextBackgroundAction',
    ]),

    checkSound() {
      let somcheck = document.getElementById('pageSound')
      if (!somcheck.paused) {
        // console.log('rolando')
        this.$gsap.to('.cu', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
      } else {
        // console.log('pausado')
        this.cliqueSomAtivo = false
        this.$gsap.to('.cu', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
      }
    },

    moveSetaMob() {
      this.setaMouseUp = !this.setaMouseUp
    },

    mouseoverMenuDrop() {
      this.tlDropMenu.play()
    },
    mouseleaveMenuDrop() {
      this.tlDropMenu.reverse()
    },

    cliqueSom: function() {
      let som = document.getElementById('pageSound')
      if (this.cliqueSomAtivo === true && som.play) {
        this.$gsap.to('.cu', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
        som.pause()
        this.cliqueSomAtivo = false
      } else if (this.cliqueSomAtivo === false && som.paused) {
        this.$gsap.to('.cu', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.cu2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
        som.play()
        this.cliqueSomAtivo = true
      }
    },

    cliqueOpenMenuMob: function() {
      this.menuMobisActive = true
      this.$gsap.from('.folhaMenuMob', {
        x: 300,
        y: 800,
        ease: 'expo.out',
        duration: 1.5,
      })
    },
    cliqueCloseMenuMob: function() {
      this.menuMobisActive = false
      if (this.toggle === true) {
        this.toggle = false
        this.setaMouseUp = false
      } else {
        this.toggle = false
        this.setaMouseUp = false
      }
    },

    checkPath: function() {
      let route = this.$route.path
      // this.testeData = route
      // var resultado = this.testeData.replace('/', 'back-')
      // this.testeData = resultado
      if (route === '/consultoria') {
        this.penseisActive = true
      } else {
        this.penseisActive = false
      }
      if (route === '/modelodenegocios') {
        this.conecteisActive = true
      } else {
        this.conecteisActive = false
      }
      if (route === '/biopaisagismo') {
        this.cultiveisActive = true
      } else {
        this.cultiveisActive = false
      }

      if (route === '/bioviva') {
        this.menuBioisActive = true
      } else {
        this.menuBioisActive = false
      }

      if (route !== '/') {
        this.bottomMobIsActive = true
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
        this.bottomMobIsActive = false
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
    a.menuBio {
      color: #586769;
    }
    a.menu:hover {
      color: $base-colorV2;
    }
    a.menuBio:hover {
      color: #a3a3a3;
    }
    .setaDrop {
      margin: 0 0 0 10px;
    }
    .menuDropDown {
      position: absolute;
      padding: 0 0 0 17px;
      visibility: hidden;
    }
    .menuDropDown a {
      display: block;
      margin: 0 0 6px 0;
      font-size: 14px;
      opacity: 0;
      transition: color 0.5s;
      transform: translate(0, -10px);
    }
    .menuDropDown a:hover {
      color: $base-colorV3;
    }
    .menuDropBio a {
      color: #586769 !important;
    }
    .menuDropBio a:hover {
      color: #a3a3a3 !important;
    }
    div.logo {
      display: flex;
      flex-direction: row;
      width: 194px;
    }
  }

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
.svgSom path {
  stroke: #586769 !important;
}
.setaBio path {
  fill: #586769 !important;
}
.som svg {
  transition: all 0.2s ease-out;
}

path.pathSom {
  transition: all 0.5s ease-out;
  transform-origin: center;
}
.hoverPathSomActive {
  transform: scale(1.1) rotate(5deg) !important;
}

#pageSound {
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: none;
}

.loader1 {
  display: inline-block;
  padding: 20px 0 0 0;
  font-size: 0;
}
.loader1 span {
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 3px 2px;
  vertical-align: middle;
  border-radius: 100%;
  -webkit-animation: loader1 0.8s linear infinite alternate;
  animation: loader1 0.8s linear infinite alternate;
}
.loader1 span:nth-child(1) {
  background: rgba(255, 255, 255, 0.6);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.loader1 span:nth-child(2) {
  background: rgba(255, 255, 255, 0.8);
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.loader1 span:nth-child(3) {
  background: rgba(255, 255, 255, 1);
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
}
.loader1 span:nth-child(4) {
  background: rgba(255, 255, 255, 0.8);
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.loader1 span:nth-child(5) {
  background: rgba(255, 255, 255, 0.4);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@keyframes loader1 {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@-webkit-keyframes loader1 {
  from {
    -webkit-transform: scale(0, 0);
  }
  to {
    -webkit-transform: scale(1, 1);
  }
}

.pensecheck {
  color: #73b98f !important;
}
.conectecheck {
  color: #f2b67d !important;
}
.cultivecheck {
  color: #dc8371 !important;
}
</style>
