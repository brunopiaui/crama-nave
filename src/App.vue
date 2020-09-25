<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div v-if="progressing" class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="147.108" height="58.624">
        <g fill="#f3f3f3">
          <path
            d="M145.343,16.99l.713.909a.931.931,0,0,0,.6.31c.073.007.146.014.218.014a1.134,1.134,0,0,0,.779-.252,1.229,1.229,0,0,0,.335-.988,5.874,5.874,0,0,0-.83-2.741c-.182-.332-.371-.664-.56-1-.262-.454-.517-.916-.757-1.378a4.3,4.3,0,0,1-.575-2.373c.051-.606.277-.837.859-.894a7.191,7.191,0,0,1,1.186-.007,5.059,5.059,0,0,0,2.911-.671.9.9,0,0,0,.422-.736.884.884,0,0,0-.5-.685c-.291-.123-.59-.216-.888-.317l-.335-.108-2.38-.137-.182.029-.291.043-.83.087c-.6.058-1.186.115-1.776.2a2.089,2.089,0,0,0-1.871,1.493,6.824,6.824,0,0,0-.269,2.092,7.075,7.075,0,0,0,1.55,3.9C143.669,14.863,144.521,15.944,145.343,16.99Z"
            transform="translate(-38.454 -1.652)"
          />
          <path
            d="M149.47,32.174a7.509,7.509,0,0,0-1.2,3.8,3.777,3.777,0,0,0-.029.476,4.23,4.23,0,0,0,.946,3.051,5.566,5.566,0,0,0,2.671,1.262l.124.014c.153.022.357.043.626.058,1.165.05,3.421-.166,6.747-2.388a15.575,15.575,0,0,0,3.894-3.982c.153-.209.3-.4.429-.57.32-.418.655-.844.975-1.212.335,2.07,1.128,4.422,2.97,5.157.823.851,1.878,1.161,3.945,1.2.175.014,4.265.231,15.5-3.123a.546.546,0,0,0,.371-.469,1.345,1.345,0,0,0-.378-1.132,1.244,1.244,0,0,0-.99-.18c-11.005,2.561-14.273,2.308-14.339,2.3-2.606.007-3.741-4.523-4-6.888-.036-.772-.189-2.128-.815-2.489L166.822,27a3.647,3.647,0,0,0-2.125-.591c-.451-.007-1.936.18-2.111,2.871-1.412,2.777-4.767,8.05-7.635,8.547a2.361,2.361,0,0,1-1.827-.44,3.115,3.115,0,0,1-.167-1.306c.022-1.623,1.194-4.039,3.115-6.456.364-.4.677-.772.9-1.06a8.237,8.237,0,0,1,2.875-2.388c.073.058.2.18.247.231a2.556,2.556,0,0,0,1.82.909,1.842,1.842,0,0,0,1.31-.736,2.337,2.337,0,0,0,.633-1.443,2,2,0,0,0-.866-1.414,4.408,4.408,0,0,0-2.628-.988c-2.606-.043-5.619,1.875-8.268,5.266A22.688,22.688,0,0,0,149.47,32.174Z"
            transform="translate(-40.338 -6.334)"
          />
          <path
            d="M77.931,34.619a5.055,5.055,0,0,0-2-.289.643.643,0,0,0-.466.166.717.717,0,0,0-.146.707,3.058,3.058,0,0,1-.568,2.344c-2.948,4.811-4.564,5.929-6.7,7.09a4.382,4.382,0,0,1-2.795.678,4,4,0,0,1-.175-1.2c-.073-2.474,2.3-6.333,4.564-8.706a5.166,5.166,0,0,1,1.885-1.479q.076.054.262.216a2.557,2.557,0,0,0,1.805.83h.051a1.906,1.906,0,0,0,1.281-.808,2.356,2.356,0,0,0,.568-1.457,2.21,2.21,0,0,0-1.186-1.551,4.386,4.386,0,0,0-2.409-.7c-2.606.065-5.532,2.113-8.036,5.6-2.147,2.993-3.545,6.448-3.479,8.605a4.235,4.235,0,0,0,1.077,3.008,3.47,3.47,0,0,0,2.38.93c.066,0,.124.007.2.007h.16c1.994-.05,5.466-.844,6.9-2.8a33.425,33.425,0,0,0,4.105-3.989c.306-.426.611-.858.91-1.241.546,2.034,2.191,4.789,4.134,5.467,1,.945,2.722,1.046,4.156,1.068a4.5,4.5,0,0,0,2.817-1.154c1.012-.822,2.307-3.2,3.69-5.72,1.652-3.022,3.923-7.17,5.066-6.9.67.151.728,3.3.764,5.374.058,3.217.116,6.03,1.332,6.557a1.472,1.472,0,0,0,.808-.029c.968-.274,2.628-1.031,3.05-2.561,1.106-4.039,4.862-9.593,5.99-10.993l.575-.743c.968-1.269.6-1.262,2.366-1.594l.16-.029c.211-.036.342-.058.459-.079.306-.05.422-.072,1.5-.339-.109,1.277-.349,2.755-.582,4.205-.466,2.871-.873,5.352-.306,7.148a2.4,2.4,0,0,0,1.587,2.135,4.643,4.643,0,0,0,3.246-.166c4.258-1.37,11.405-9.442,11.711-11.433a.747.747,0,0,0-.189-.772.449.449,0,0,0-.495-.014,12.45,12.45,0,0,0-2.948,3.13c-1.427,1.832-7.067,5.489-8.6,6.045-.393.144-.509.079-.517.079-.138-.072-.3-.527-.2-1.457a30.39,30.39,0,0,1,1.165-4.948c.67-2.294,1.245-4.277.932-5.345a2.636,2.636,0,0,0-1.812-2.049,4.185,4.185,0,0,0-2.577.238l-1.587.541a7.41,7.41,0,0,1-3.676.613c-1.3-.209-4.629-.512-5.262.649-.247.447-.066.967.524,1.522a4.049,4.049,0,0,0,1.514.736,89.894,89.894,0,0,0-5.262,10.957c-.051.411-.524.93-.59.433A20.13,20.13,0,0,1,99.439,37c.131-1.017.269-2.077.328-3.073-.029-1.349-.073-3.188-.888-4.393a4.126,4.126,0,0,0-3-1.616,2.132,2.132,0,0,0-1.725.49,13.639,13.639,0,0,0-1.98,3.635c-2.4,6.073-5.786,12.269-7.919,12.435a1.245,1.245,0,0,1-.16.007c-2.424,0-3.727-4.407-4.076-6.773-.029-.13-.044-.368-.066-.57a3.007,3.007,0,0,0-.109-.75,1.307,1.307,0,0,0-.3-.447A3.756,3.756,0,0,0,77.931,34.619ZM76.3,39.841Z"
            transform="translate(-16.43 -7.062)"
          />
          <path
            d="M18.726,27.084c1.114,9.99,2.009,14.037,7.038,16.907a6.753,6.753,0,0,0,3.123.628c1.681-.036,4.265-.649,7.038-3.383,6.216-6.571,13.2-24.762,16.551-33.5l.051-.13c.459-1.2.859-2.229,1.172-3.022l.131-.346c.036-.144.138-.411.255-.729C54.741,1.73,55.1.626,54.522.2c-.924-.685-2.205.527-2.664.959l-.138.231C51.633,1.636,41.21,27.776,33.7,37.8c-1.732,2.77-3.654,3.022-4.265,3.044a3.365,3.365,0,0,1-2.6-.988c-2.307-1.984-4.949-7.487-4.4-22.461v-.014a38.847,38.847,0,0,1,1.1-6.73l.022-.087-.022-.087c-.138-.519-.451-1.731-1.478-1.89-1.507-.238-3.3,1.039-3.923,4.414A43.562,43.562,0,0,1,15.6,21.724c-.08.18-.575,1.161-1.274,2.525l-.109.216c-1.863,3.686-5.335,10.524-7.3,14.808C6.862,39.367,1.054,51.485.042,55.7a2.11,2.11,0,0,0,.852,2.323,1.874,1.874,0,0,0,.968.245h.051c.051,0,.109-.007.16-.007a5.655,5.655,0,0,0,2.773-1.342l.16-.13.058-.195C8.289,46.4,17.1,28.822,18.4,26.348A3.8,3.8,0,0,1,18.726,27.084Z"
            transform="translate(0.005 0.005)"
          />
          <path
            d="M142.722,54.01l-.9.007c-3.3.014-6.718.029-10.081.1-4.149.087-7.511.195-10.583.346-3.13.151-6.543.375-10.437.692-2.154.173-4.338.4-6.442.62l-2.118.216q-2.227.227-4.44.462c-1.048.108-2.089.224-3.137.332l-3.807.39-5.066.519c-1.922.195-3.85.4-5.772.606L78.1,58.5c-1.929.2-3.923.411-5.867.692-1.361.195-2.715.4-4.076.613-2.86.44-5.816.894-8.749,1.212-1.849.2-3.7.418-5.546.635-1,.115-1.987.238-2.984.346l-3.042.346c-1.82.209-3.639.411-5.459.628-1.645.195-3.29.4-4.928.613-1.354.173-2.7.339-4.054.5a43.585,43.585,0,0,0-7.089,1.407,57.513,57.513,0,0,0-11.966,5.222,4.712,4.712,0,0,0-1.871,1.673l-.022.043v.628l.044.05a1.815,1.815,0,0,0,1.456.563h.095a6.13,6.13,0,0,0,2.555-.548c1.172-.541,2.307-1.118,3.4-1.681A41.362,41.362,0,0,1,26.512,68.6,59.141,59.141,0,0,1,36.6,66.647q2.664-.346,5.328-.7,2.544-.335,5.088-.664c2.9-.375,5.925-.75,8.982-1.118,1.98-.238,3.967-.462,5.947-.685l1.412-.159c1.237-.137,2.467-.281,3.7-.418l3.821-.433c.553-.065,1.114-.123,1.667-.188,1.485-.166,3.028-.332,4.535-.541,1.8-.245,3.588-.5,5.379-.757,2.679-.39,5.452-.786,8.188-1.125,4.192-.527,8.785-1.031,14.463-1.609,2.591-.26,5.241-.483,7.8-.7q2.107-.173,4.222-.361l3.3-.3c1.456-.137,2.911-.274,4.367-.4,2.533-.209,5.255-.433,7.948-.6,2.635-.166,5.306-.3,7.934-.382,1.529-.05,3.086-.072,4.593-.087l2.06-.022C147.307,55.373,156.835,54.472,142.722,54.01Z"
            transform="translate(-3.384 -15.049)"
          />
        </g>
      </svg>
      <br />
      <p style="font-size:12px;">{{ progress }} %</p>
    </div>
    <!-- loading -->

    <!-- <div
      v-if="!progressing && progressingGallery"
      style="width:100%; height:100%; background-color:#000000; position:absolute; z-index:98; display:flex; flex-direction:row; justify-content:center; align-itens:center; transition: all 0.5s;"
    >
      <span>CARREGANDO {{ progressGallery }} %</span>
    </div> -->

    <div class="menuMobile" :class="{ menuMobOpen: menuMobisActive }">
      <div class="folhaMenuMob">
        <img src="./assets/images/elementointerna4_2.png" />
      </div>
      <div class="boxMenuMobile">
        <div class="topMenuMobile">
          <img class="logoMenu" src="./assets/images/logomenu.svg" />
          <img
            class="svgButton"
            src="./assets/images/buttonclosemenumob.svg"
            @click="cliqueCloseMenuMob"
          />
          <div class="listMenuMob">
            <nav>
              <ul>
                <li class="liDrop">
                  <span @click=";[(toggle = !toggle)], moveSetaMob()">O que fazemos</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    :class="{ setaUp: setaMouseUp }"
                    @click=";[(toggle = !toggle)], moveSetaMob()"
                  >
                    <path d="M4,0,8,7H0Z" transform="translate(8 7) rotate(180)" fill="#586769" />
                  </svg>
                </li>
                <li>
                  <transition name="slide-fade">
                    <div v-show="toggle" class="menuDropMob">
                      <ul>
                        <li>
                          <router-link to="/consultoria"
                            ><span @click="cliqueCloseMenuMob">Consultoria</span></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/novosnegocios"
                            ><span @click="cliqueCloseMenuMob">Novos negócios</span></router-link
                          >
                        </li>
                        <li>
                          <router-link to="/biopaisagismo"
                            ><span @click="cliqueCloseMenuMob">Biopaisagismo</span></router-link
                          >
                        </li>
                      </ul>
                    </div>
                  </transition>
                </li>
                <li>
                  <router-link to="/bioviva"
                    ><span @click="cliqueCloseMenuMob">Bioviva</span></router-link
                  >
                </li>
                <!-- <li @click="cliqueCloseMenuMob">
                  <router-link to="/midia">Midia</router-link>
                </li> -->
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
          <span class="pccLogoPense" :class="{ pensecheck: penseisActive }">Pense</span>
          <span class="pccLogoConecte" :class="{ conectecheck: conecteisActive }">Conecte</span>
          <span class="pccLogoCultive" :class="{ cultivecheck: cultiveisActive }">Cultive</span>
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
          >
            <path d="M4,0,8,7H0Z" transform="translate(8 7) rotate(180)" fill="#fff" />
          </svg>
          <div class="menuDropDown" :class="{ menuDropBio: menuBioisActive }">
            <router-link to="/consultoria">Consultoria</router-link>
            <router-link to="/novosnegocios">Novos negócios</router-link>
            <router-link to="/biopaisagismo">Biopaisagismo</router-link>
          </div>
        </a>
        <router-link class="menu" :class="{ menuBio: menuBioisActive }" to="/bioviva"
          >Bioviva</router-link
        >
        <!-- <router-link class="menu" :class="{ menuBio: menuBioisActive }" to="/midia"
          >Mídia</router-link
        > -->
        <router-link class="menu" :class="{ menuBio: menuBioisActive }" to="/contato"
          >Contato</router-link
        >
      </nav>

      <div class="som">
        <div class="areaHoverBt" @mouseover="hoverBt = true" @mouseleave="hoverBt = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            :class="{ svgSom: menuBioisActive }"
            @click="cliqueSom"
          >
            <g transform="translate(2 2.6)" fill="none" stroke="#fff" stroke-width="1">
              <path
                d="M18.763,0S11.984,0,7.012,4.067-1.574,14.914.685,23.048s9.942,11.3,12.654,12.2,8.135,2.26,16.721-3.615S38.2,14.462,32.321,6.779C28.506,1.79,24.638,0,18.763,0Z"
                transform="translate(0.003)"
                class="pathBt"
                :class="{ hoverPathBtActive: hoverBt }"
              />
              <g transform="translate(8.401 9.412)" class="so">
                <g transform="translate(0 0)">
                  <g>
                    <path
                      d="M11.687,4.9h-.015c.006-1.352.015-2.693-.015-4.031A.883.883,0,0,0,10.234.183C9.4.8,8.623,1.5,7.854,2.136L5.075,4.443a1.343,1.343,0,0,1-.764.267c-1.082.03-2.165,0-3.247.018-.692.01-1.053.349-1.058,1Q0,7.131,0,8.538t.009,2.813c0,.646.366.984,1.058,1,1.082.017,2.165-.011,3.247.018a1.337,1.337,0,0,1,.764.267l2.779,2.307c.768.636,1.546,1.331,2.38,1.953a.883.883,0,0,0,1.423-.686c.03-1.338.019-2.679.015-4.031h.015V4.9Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(21.718 11.336)" opacity="1" class="so2">
                <path
                  class="cls-2"
                  d="M0,.837A4.669,4.669,0,0,1,.7,1.312,4.785,4.785,0,0,1,2.4,6.4C2.014,7.783,0,9.238,0,9.238"
                  transform="translate(0.003 1.439)"
                />
                <path
                  class="cls-2"
                  d="M0,.837a7.2,7.2,0,0,1,1.09.733A7.378,7.378,0,0,1,3.7,9.41C3.107,11.547,0,13.791,0,13.791"
                  transform="translate(2.302 -0.837)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <!-- som -->
      <div class="buttonMenuMobile">
        <img src="./assets/images/buttonmenumob.svg" @click="cliqueOpenMenuMob" />
      </div>
    </header>
    <!-- top -->

    <router-view class="router" />

    <footer class="bottom" :class="{ bottomMob: bottomMobIsActive }">
      <div class="share">
        <!-- <div><span>Contato.</span></div> -->
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
    <!-- bottom -->

    <audio id="pageSound" controls autoplay loop>
      <source src="./assets/sounds/naviasound.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <!-- pagesound -->
  </div>
  <!-- app -->
</template>



<script>
import { mapGetters, mapActions } from 'vuex'
import Preload from 'preload-it-extended-5'

const preloadInit = Preload()
const preloadGallery = Preload()

export default {
  name: 'App',
  data() {
    return {
      tl: null,
      cliqueSomAtivo: true,
      menuBioisActive: false,
      hoverBt: false,
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
      'loadingGallery',
      'backgrounds',
      'nextBackground',
      'progressing',
      'progress',
      'progressGallery',
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
    if (!this.progressing) {
      this.$gsap.to('.loading', {
        duration: 1,
        opacity: 0,
        // delay: 50,
      })
    }
    setTimeout(() => this.checkSound(), 1000)

    // animacao ícone de som
    this.tlsomOn = this.$gsap.timeline({ repeat: -1 })
    this.tlsomOn.to('.so2 path', {
      opacity: 0.3,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })
    this.tlsomOn.to('.so2 path', {
      opacity: 1,
      ease: 'power1.in',
      duration: 0.4,
      stagger: 0.4,
    })
    // end

    // animacao dropdown oquefazemos
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
    // end
  },
  beforeMount() {
    // preloadInit das images no carregamento do site

    preloadInit.fetch([
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
    ])
    preloadInit.onfetched = (item) => {
      this.addToBackgroundsAction({
        name: item.meta.name,
        type: item.meta.type,
        url: item.blobUrl,
      })
    }
    preloadInit.onprogress = (event) => {
      this.setProgressAction(event.progress)
    }
    preloadInit.oncomplete = (items) => {
      let nextBackground = this.backgrounds(this.$route.meta.image)
      this.setNextBackgroundAction(nextBackground)
      preloadGallery.fetch([
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
      preloadGallery.onfetched = (item) => {
        this.addToBackgroundsAction({
          name: item.meta.name,
          type: item.meta.type,
          url: item.blobUrl,
        })
      }
      preloadGallery.oncomplete = (items) => {
        this.stopProgressingGalleryAction()
      }
      preloadGallery.onprogress = (event) => {
        this.setProgressGalleryAction(event.progress)
      }
      if (this.$route.name !== 'home') {
        if (this.progressing) {
          const loading = this.$gsap.timeline({ paused: true })
          loading.to('.loading', {
            duration: 1,
            opacity: 0,
            onComplete: () => {
              if (this.$route.name !== 'home') {
                this.stopProgressingAction()
              }
            },
          })
          loading.play()
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundsAction',
      'startProgressingAction',
      'stopProgressingAction',
      'stopProgressingGalleryAction',
      'setProgressAction',
      'setProgressGalleryAction',
      'setNextBackgroundAction',
    ]),
    checkSound() {
      let somcheck = document.getElementById('pageSound')
      if (!somcheck.paused) {
        this.$gsap.to('.so', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
      } else {
        this.cliqueSomAtivo = false
        this.$gsap.to('.so', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
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
        this.$gsap.to('.so', { x: 12.315, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 0, ease: 'expo.out', duration: 0.5 })
        som.pause()
        this.cliqueSomAtivo = false
      } else if (this.cliqueSomAtivo === false && som.paused) {
        this.$gsap.to('.so', { x: 8.401, ease: 'expo.out', duration: 0.5 })
        this.$gsap.to('.so2', { opacity: 1, ease: 'expo.out', duration: 0.5 })
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
      if (route === '/consultoria') {
        this.penseisActive = true
      } else {
        this.penseisActive = false
      }
      if (route === '/novosnegocios') {
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
          .to(['.blockMenu'], {
            x: 85,
            duration: 0.5,
            ease: 'power1.out',
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
          .to(['.blockMenu'], {
            x: 0,
            duration: 0.5,
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// div.logo img.imgLogo {
//   width: 147.11px;
// }
div.pccLogo {
  display: flex;
  flex-direction: column;
  width: 0;
  padding: 7px 0 0 16px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  span {
    display: block;
    font-size: 10px;
  }
}

#app {
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: $base-color;
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
      color: rgb(18, 33, 36);
    }
    a.menu:hover {
      color: $base-colorV2;
    }
    a.menuBio:hover {
      color: #586769;
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

div.som {
  width: 42px;
  height: 42px;
  position: relative;
  div.areaHoverBt {
    position: absolute;
    top: -28px;
    left: -26px;
  }
}

#pageSound {
  position: absolute;
  bottom: 0;
  z-index: 1;
  display: none;
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
