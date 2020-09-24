<template>
  <div class="home">
    <div class="backImg"></div>
    <div class="img">
      <video id="video" ref="video" defaultMuted autoplay muted loop playsinline>
        <source
          :src="require('../assets/videos/video01.mp4')"
          :poster="require('../assets/images/image04.jpg')"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
    <div class="loadingpv"> </div>
    <div class="contHome">
      <div class="aNavia" :class="{ aNaviaState: aNaviaIsActive }">
        <div class="formaFundoaNaviaMob"></div>

        <!-- <div class="formaFundoaNavia2"></div> -->

        <div class="formaFundoaNavia">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1488 1371"
            enable-background="new 0 0 1488 1371"
            xml:space="preserve"
          >
            <path
              opacity="0.958"
              fill="#122124"
              enable-background="new"
              d="M1342.2,1115.8
                C1591,760,1535.1,273.9,1071.4,202.6s-923.8-382-988.3-58.1c-185.7,808.9-41.6,1016.4,245,1146.3S1134.3,1412.6,1342.2,1115.8z"
            />
          </svg>
        </div>
        <!-- formaFundoaNavia -->

        <div class="btCloseaNavia">
          <div
            class="areaHoverBt"
            @mouseover="btsHome.btCloseNavia = true"
            @mouseleave="btsHome.btCloseNavia = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              @click="cliqueCloseaNavia"
            >
              <g transform="translate(2 2)" fill="none" stroke="#fff">
                <path
                  d="M19.358.5S12.579.5 7.607 4.567-.979 15.414 1.28 23.548s9.942 11.3 12.654 12.2 8.135 2.26 16.721-3.615 8.14-17.171 2.26-24.854C29.101 2.29 25.233.5 19.358.5z"
                  class="pathBt"
                  :class="{ hoverPathBtActive: btsHome.btCloseNavia }"
                />
                <path
                  stroke-linecap="round"
                  d="M13.91 24.204l9.972-11.884M13.91 12.294l9.972 11.884"
                />
              </g>
            </svg>
          </div> </div
        ><!-- btCloseaNavia -->
        <div class="blocoaNavia">
          <div class="contaNavia">
            <span class="titleContaNavia"
              >Se o ambiente favorece,<br />
              a evolução é consequência
            </span>
            <p
              >O nosso propósito é unir as pessoas à natureza.<br />
              <span>Navia é o elo entre os seus planos e a conservação da vida.</span></p
            >
            <p
              >Desenvolvemos projetos
              <span>conectados a valorização da biodiversidade brasileira</span>
              – um jardim, um produto, novas soluções, um conceito de negócio ou ações ambientais.
              Valorizamos a proteção e cuidado com o ecossistema, ainda assim nos mantemos em total
              sintonia com as estratégias que atendem as expectativas de uma sociedade moderna e um
              mercado.</p
            >
            <p
              >Trazemos a experiência e o conhecimento técnico da botânica, mas vamos além.
              Entendemos que somos parte do meio ambiente e, também, aprendemos com ele.
              <span>Acreditamos em um crescimento conjunto.</span></p
            >
            <p
              >Mais do que uma transformação, confiamos no resgate de um vínculo que é inerente a
              humanidade.<br />
              Mais do que um desafio, <span>esse é nosso compromisso.</span></p
            >
          </div>
        </div>
      </div>
      <!-- aNavia -->

      <!-- <div class="buttonVideoMob">
        <img src="../assets/images/icovideo.svg" />
      </div> -->

      <div :class="{ pccaNavia: aNaviaIsActive }" class="pcc">
        <span class="hoverPcc hoverPcc1">Pense</span>
        <span class="hoverPcc hoverPcc2">Conecte</span>
        <span class="hoverPcc hoverPcc3">Cultive</span>
      </div>
      <!-- pcc -->

      <div class="diagrama">
        <div class="boxDia">
          <div class="elem1dia">
            <svg xmlns="http://www.w3.org/2000/svg" width="524.979" height="522.38">
              <path
                class="cls-1"
                d="M199.582,0s-72.1,0-124.971,43.259S-16.714,158.617,7.319,245.135,113.063,365.3,141.9,374.912s86.518,24.033,177.843-38.453S406.264,153.81,343.778,72.1C303.211,19.034,262.067,0,199.582,0Z"
                transform="matrix(0.883, -0.469, 0.469, 0.883, 0.481, 183.347)"
              />
            </svg>
          </div>
          <div class="elem2dia">
            <svg xmlns="http://www.w3.org/2000/svg" width="313.7" height="312.529">
              <path
                class="cls-2"
                d="M116.785,0S74.6,0,43.659,25.313-9.78,92.815,4.283,143.441s61.876,70.314,78.752,75.939,50.626,14.063,104.065-22.5S237.726,90,201.162,42.188C177.424,11.138,153.349,0,116.785,0Z"
                transform="matrix(0.848, -0.53, 0.53, 0.848, 0.732, 121.52)"
              />
            </svg>
          </div>
          <div class="elem3dia">
            <span>BIO</span>
            <span>DIVER</span>
            <span>SIDADE</span>
          </div>
          <div class="elem4dia">
            <img src="../assets/images/elem4dia.svg" />
          </div>
          <div class="elem5dia">
            <img src="../assets/images/elem5dia.svg" />
          </div>
          <div class="link1dia" @mouseover="mouseoverLink1dia" @mouseleave="mouseleaveLink1dia">
            <router-link to="/consultoria">
              <div class="link1diaBtexto">
                <span class="link1diaPense">Pense</span>
                <span class="link1diaConsultoria">CONSULTORIA</span>
              </div>
              <div class="link1diaSvg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.738" height="18.385">
                  <path
                    class="cls-6"
                    d="M9.058,0A10,10,0,0,0,3.384,1.964,8.624,8.624,0,0,0,.33,11.129c1.091,3.928,4.8,5.455,6.11,5.892s3.928,1.091,8.074-1.746,3.928-8.292,1.091-12A7.354,7.354,0,0,0,9.058,0Z"
                    transform="translate(0.549 0.5)"
                  />
                </svg>
              </div>
            </router-link>
          </div>
          <!-- link1dia -->
          <div class="cont1dia">
            <p
              >Soluções integradas à biodiversidade. O conhecimento e a experiência a favor dos seus
              investimentos e do ecossistema.
            </p>
          </div>
          <div class="folhadia1">
            <img src="../assets/images/elementodia2.png" />
          </div>
          <div class="elemInt1dia">
            <img src="../assets/images/elementodia1.svg" />
          </div>
          <div class="link2dia" @mouseover="mouseoverLink2dia" @mouseleave="mouseleaveLink2dia">
            <router-link to="/novosnegocios">
              <div class="link2diaSvg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.738" height="18.385">
                  <path
                    class="cls-6"
                    d="M9.058,0A10,10,0,0,0,3.384,1.964,8.624,8.624,0,0,0,.33,11.129c1.091,3.928,4.8,5.455,6.11,5.892s3.928,1.091,8.074-1.746,3.928-8.292,1.091-12A7.354,7.354,0,0,0,9.058,0Z"
                    transform="translate(0.549 0.5)"
                  />
                </svg>
              </div>
              <div class="link2diaBtexto">
                <span class="link2diaPense">Conecte</span>
                <span class="link2diaConsultoria">NOVOS NEGÓCIOS</span>
              </div>
            </router-link>
          </div>
          <div class="cont2dia">
            <p
              >Sustentabilidade como valor econômico de seu projeto. Ganhos e resultados
              incorporados ao meio ambiente.
            </p>
          </div>
          <div class="folhadia2">
            <img src="../assets/images/folha2.png" />
          </div>
          <div class="elemInt2dia">
            <img src="../assets/images/elementodia2.svg" />
          </div>
          <div class="link3dia" @mouseover="mouseoverLink3dia" @mouseleave="mouseleaveLink3dia">
            <router-link to="/biopaisagismo">
              <div class="link3diaSvg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.738" height="18.385">
                  <path
                    class="cls-6"
                    d="M9.058,0A10,10,0,0,0,3.384,1.964,8.624,8.624,0,0,0,.33,11.129c1.091,3.928,4.8,5.455,6.11,5.892s3.928,1.091,8.074-1.746,3.928-8.292,1.091-12A7.354,7.354,0,0,0,9.058,0Z"
                    transform="translate(0.549 0.5)"
                  />
                </svg>
              </div>
              <div class="link3diaBtexto">
                <span class="link3diaPense">Cultive</span>
                <span class="link3diaConsultoria">BIOPAISAGISMO</span>
              </div>
            </router-link>
          </div>
          <div class="cont3dia">
            <p
              >A estética do paisagismo relacionada às questões biológicas. Seu jardim vivo com a
              beleza, o volume e o ritmo da natureza.
            </p>
          </div>
          <div class="folhadia3">
            <img src="../assets/images/folha3.png" />
          </div>
          <div class="elemInt3dia">
            <img src="../assets/images/elementodia3.svg" />
          </div>
          <!-- <div class="icoVideoDia">
            <div
              class="areaHoverBt"
              @mouseover="btsHome.btVideo = true"
              @mouseleave="btsHome.btVideo = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48.182"
                height="49.957"
              >
                <g
                  transform="translate(1.2 2)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                >
                  <path
                    class="pathBt"
                    :class="{ hoverPathBtActive: btsHome.btVideo }"
                    d="M44.5,23.9c0,0,0-8.1-4.9-14.1s-13-10.3-22.8-7.6S3.3,14.2,2.2,17.4s-2.7,9.8,4.3,20.1 s20.6,9.8,29.8,2.7C42.3,35.6,44.5,31,44.5,23.9z"
                  />
                  <path
                    d="M17.918,10.8V7.066A1.069,1.069,0,0,0,16.853,6H4.066A1.069,1.069,0,0,0,3,7.066V17.722a1.069,1.069,0,0,0,1.066,1.066H16.853a1.069,1.069,0,0,0,1.066-1.066v-3.73l4.262,4.262V6.533Z"
                    transform="translate(11 11)"
                  />
                </g>
              </svg>
            </div> </div
          > -->
          <!-- icoVideoDia -->
          <div
            class="botaoOpenaNavia"
            :disabled="isDisabled"
            @click="cliqueOpenaNavia"
            @mouseover="hoverNaviaFn(), (btsHome.btOpenNavia = true)"
            @mouseleave="leaveNaviaFn(), (btsHome.btOpenNavia = false)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48.182"
              height="49.957"
              viewBox="-2 -2 49.182 50.957"
            >
              <g fill="none" stroke="#fff" stroke-width="1">
                <path
                  class="pathBt"
                  :class="{ hoverPathBtActive: btsHome.btOpenNavia }"
                  d="M44.5,23.9c0,0,0-8.1-4.9-14.1s-13-10.3-22.8-7.6S3.3,14.2,2.2,17.4s-2.7,9.8,4.3,20.1 s20.6,9.8,29.8,2.7C42.3,35.6,44.5,31,44.5,23.9z"
                />
                <path
                  stroke-linecap="round"
                  transform="translate(13.5 13.5)"
                  d="M1.1,17.8c0,0,0.6-19.9,17.1-17.2 C18.3,0.7,18.2,17.5,1.1,17.8z"
                />
                <path transform="translate(13.5 13.5)" d="M1.5,17.4c0,0,4.7-8,9.4-10.7" />
              </g>
            </svg>
            <span>Desbrave</span> </div
          ><!-- botaoOpenaNavia -->
        </div>
        <!-- elem1dia -->
      </div>
      <!-- diagrama -->
    </div>
    <!-- contHome -->
  </div>
  <!-- home -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MyFunctions } from '../assets/js/functions.js'

export default {
  name: 'Home',
  data() {
    return {
      tl: null,
      video: require('../assets/videos/video01.mp4'),
      btsHome: {
        btCloseNavia: false,
        btOpenNavia: false,
        btVideo: false,
      },
      linkDiaOn: true,
      link1dia: false,
      link2dia: false,
      link3dia: false,
      linkNavia: false,
      link1diaOver: false,
      link2diaOver: false,
      link3diaOver: false,
      hoverNaviaFnOver: false,
      aNaviaIsActive: false,
      isDisabled: false,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
  },
  watch: {
    progress(value) {
      const bkg = this.backgrounds('video01')
      if (value === 100 && bkg && this.$refs.video) {
        this.$refs.video.src = URL.createObjectURL(this.backgrounds('video01').url)
      }
    },
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageOut = this.$gsap.timeline()
    this.tl1overParte1 = this.$gsap.timeline({ paused: true })
    this.tl1overParte2 = this.$gsap.timeline({ paused: true })
    this.tl1overParte3 = this.$gsap.timeline({ paused: true })
    this.tl1overParte4 = this.$gsap.timeline({ paused: true })
    this.tl2overParte1 = this.$gsap.timeline({ paused: true })
    this.tl2overParte2 = this.$gsap.timeline({ paused: true })
    this.tl2overParte3 = this.$gsap.timeline({ paused: true })
    this.tl2overParte4 = this.$gsap.timeline({ paused: true })
    this.tl3overParte1 = this.$gsap.timeline({ paused: true })
    this.tl3overParte2 = this.$gsap.timeline({ paused: true })
    this.tl3overParte3 = this.$gsap.timeline({ paused: true })
    this.tl3overParte4 = this.$gsap.timeline({ paused: true })
    this.tlhoverNavia = this.$gsap.timeline({ paused: true })
  },
  mounted() {
    const video = document.querySelector('#video')
    video.onloadeddata = () => {
      const loading = this.$gsap.timeline({ paused: true })
      loading.to('.loading', {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          this.stopProgressingAction()
        },
      })
      loading.play()
    }

    document.removeEventListener('DOMMouseScroll', MyFunctions.moveScroll, false)
    document.removeEventListener('mousewheel', MyFunctions.moveScroll, false)
    document.removeEventListener('keydown', MyFunctions.KeyScroll, false)

    // end

    // funçao diagrama segue o movimento do mouse
    const app = document.querySelector('#app')
    const bg = document.querySelector('.boxDia')
    const windowWidth = window.innerWidth / 10
    const windowHeight = window.innerHeight / 30

    app.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth
      const mouseY = e.clientY / windowHeight
      const move = this.$gsap
      move.to(bg, { x: mouseX, y: mouseY })
    })
    // end

    // animacoes de entrada da página
    this.tlPageIn
      .fromTo('.pcc', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.out' })
      .fromTo('.diagrama', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.out' }, 0)
    // end

    // animacoes de hover diagrama
    this.tl1overParte1
      .to(
        [
          // '.backImg',
          '.link2diaBtexto',
          '.link3diaBtexto',
          '.blockMenu',
          '.som',
          '.bottom',
        ],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          ease: 'power1.inOut',
        }
      )
      .to(
        ['.hoverPcc2', '.hoverPcc3', '.botaoOpenaNavia'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl1overParte2
      .to('.link1diaSvg', {
        scale: 1.5,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(
        '.link1diaBtexto',
        {
          x: -5,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl1overParte3
      .to('.elem4dia', {
        x: 20,
        y: 40,
        duration: 1,
        opacity: 0.5,
        ease: 'power1.inOut',
      })
      .to(
        '.elem5dia',
        {
          x: 90,
          y: 60,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl1overParte4
      .to('.elem2dia', {
        duration: 0.5,
        scale: 1.3,
        opacity: 0.1,
        x: 20,
        ease: 'power1.inOut',
        onReverseComplete: () => {
          this.link1dia = false
          if (this.link2diaOver) {
            this.mouseoverLink2dia()
          }
          if (this.link3diaOver) {
            this.mouseoverLink3dia()
          }
          if (this.hoverNaviaFnOver) {
            this.hoverNaviaFn()
          }
        },
      })
      .to(
        '.elem3dia',
        {
          filter: 'blur(5px)',
          autoRound: false,
          opacity: 0.2,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<0.3'
      )
      .to('.cont1dia', {
        duration: 0.3,
        opacity: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.elemInt1dia',
        {
          duration: 0.3,
          opacity: 1,
          y: -10,
          x: -10,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to(
        '.folhadia1',
        {
          duration: 0.5,
          opacity: 1,
          y: -10,
          ease: 'power1.inOut',
        },
        '<0.1'
      )

    this.tl2overParte1
      .to(
        [
          // '.backImg',
          '.link1diaBtexto',
          '.link3diaBtexto',
          '.blockMenu',
          '.som',
          '.bottom',
        ],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          ease: 'power1.inOut',
        }
      )
      .to(
        ['.hoverPcc1', '.hoverPcc3', '.botaoOpenaNavia'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl2overParte2
      .to('.link2diaSvg', {
        scale: 1.5,
        y: 5,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(
        '.link2diaBtexto',
        {
          x: 5,
          y: 5,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl2overParte3
      .to('.elem4dia', {
        x: 20,
        y: 40,
        opacity: 0.5,
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.elem5dia',
        {
          x: 90,
          y: 60,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl2overParte4
      .to('.elem2dia', {
        duration: 0.5,
        scale: 1.3,
        opacity: 0.1,
        x: 20,
        ease: 'power1.inOut',
        onReverseComplete: () => {
          this.link2dia = false
          if (this.link1diaOver) {
            this.mouseoverLink1dia()
          }
          if (this.link3diaOver) {
            this.mouseoverLink3dia()
          }
          if (this.hoverNaviaFnOver) {
            this.hoverNaviaFn()
          }
        },
      })
      .to(
        '.elem3dia',
        {
          filter: 'blur(5px)',
          autoRound: false,
          opacity: 0.2,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<0.3'
      )
      .to('.cont2dia', {
        duration: 0.3,
        opacity: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.elemInt2dia',
        {
          duration: 0.3,
          opacity: 1,
          y: -10,
          x: -10,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to(
        '.folhadia2',
        {
          duration: 0.5,
          opacity: 1,
          y: -10,
          ease: 'power1.inOut',
        },
        '<0.1'
      )
    this.tl3overParte1
      .to(
        [
          // '.backImg',
          '.link1diaBtexto',
          '.link2diaBtexto',
          '.blockMenu',
          '.som',
          '.bottom',
        ],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          ease: 'power1.inOut',
        }
      )
      .to(
        ['.hoverPcc2', '.hoverPcc1', '.botaoOpenaNavia'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl3overParte2
      .to('.link3diaSvg', {
        scale: 1.5,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(
        '.link3diaBtexto',
        {
          x: 5,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl3overParte3
      .to('.elem4dia', {
        x: 20,
        y: 40,
        duration: 1,
        opacity: 0.5,
        ease: 'power1.inOut',
      })
      .to(
        '.elem5dia',
        {
          x: 90,
          y: 60,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        '<'
      )
    this.tl3overParte4
      .to('.elem2dia', {
        duration: 0.5,
        scale: 1.3,
        opacity: 0.1,
        x: 20,
        ease: 'power1.inOut',
        onReverseComplete: () => {
          this.link3dia = false
          if (this.link1diaOver) {
            this.mouseoverLink1dia()
          }
          if (this.link2diaOver) {
            this.mouseoverLink2dia()
          }
          if (this.hoverNaviaFnOver) {
            this.hoverNaviaFn()
          }
        },
      })
      .to(
        '.elem3dia',
        {
          filter: 'blur(5px)',
          autoRound: false,
          opacity: 0.2,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '<0.3'
      )
      .to('.cont3dia', {
        duration: 0.3,
        opacity: 1,
        ease: 'power1.inOut',
      })
      .to(
        '.elemInt3dia',
        {
          duration: 0.3,
          opacity: 1,
          y: -10,
          x: -10,
          ease: 'power1.inOut',
        },
        '<'
      )
      .to(
        '.folhadia3',
        {
          duration: 0.5,
          opacity: 1,
          y: -10,
          ease: 'power1.inOut',
        },
        '<0.1'
      )

    this.tlhoverNavia.to('.elem2dia', {
      duration: 0.5,
      scale: 1.3,
      opacity: 0.1,
      x: 20,
      ease: 'power1.inOut',
      onReverseComplete: () => {
        this.linkNavia = false
        if (this.link1diaOver) {
          this.mouseoverLink1dia()
        }
        if (this.link2diaOver) {
          this.mouseoverLink2dia()
        }
        if (this.link3diaOver) {
          this.mouseoverLink3dia()
        }
      },
    })
    // end
  },

  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),

    // funçoes clique e hover aNavia
    cliqueOpenaNavia: function() {
      if (this.isDisabled) return
      this.isDisabled = true

      if (window.innerWidth >= 1400) {
        this.$gsap.timeline().from('.formaFundoaNavia', {
          scale: 1.2,
          ease: 'Power2.out',
          duration: 0.5,
        })
      } else {
        this.$gsap.timeline().from('.formaFundoaNavia', {
          scale: 1,
          ease: 'Power2.out',
          duration: 0.5,
        })
      }

      this.$gsap
        .timeline()
        .to('.loadingpv', {
          width: '100%',
          duration: 0.8,
          ease: 'power2.in',
        })
        .to('.loadingpv', {
          width: '0',
          duration: 0,
          onComplete: () => {
            this.aNaviaIsActive = true
            this.isDisabled = false
          },
        })
        .to('.aNavia', {
          opacity: 1,
          ease: 'linear',
          duration: 0.3,
        })
        .from(
          '.formaFundoaNavia',
          {
            scale: 0.8,
            ease: 'Power2.out',
            duration: 0.5,
          },
          '<'
        )
        .from('.contaNavia', {
          opacity: 0,
          y: 40,
          ease: 'Power1.out',
          duration: 0.5,
        })
        .from('.btCloseaNavia', {
          opacity: 0,
          y: -40,
          ease: 'Power1.out',
          duration: 0.4,
        })
    },
    cliqueCloseaNavia: function() {
      this.$gsap.timeline().to('.aNavia', {
        opacity: 0,
        ease: 'linear',
        duration: 0.3,
        onComplete: () => {
          this.aNaviaIsActive = false
        },
      })
    },

    hoverNaviaFn: function() {
      this.hoverNaviaFnOver = true
      if (this.linkDiaOn) {
        if (!this.link2dia && !this.link3dia && !this.link1dia) {
          this.tlhoverNavia.play()
        }
      }
    },
    leaveNaviaFn: function() {
      this.hoverNaviaFnOver = false
      if (this.linkDiaOn) {
        this.linkNavia = true
        this.tlhoverNavia.reverse()
      }
    },
    // end

    // funçoes hover links diagrama
    mouseoverLink1dia() {
      this.link1diaOver = true
      if (this.linkDiaOn) {
        if (!this.link2dia && !this.link3dia && !this.linkNavia) {
          this.tl1overParte1.play()
          this.tl1overParte2.play()
          this.tl1overParte3.play()
          this.tl1overParte4.play()
        }
      }
    },
    mouseleaveLink1dia() {
      this.link1diaOver = false
      if (this.linkDiaOn) {
        this.link1dia = true
        this.tl1overParte1.reverse()
        this.tl1overParte2.reverse()
        this.tl1overParte3.reverse()
        this.tl1overParte4.reverse()
      }
    },

    mouseoverLink2dia() {
      this.link2diaOver = true
      if (this.linkDiaOn) {
        if (!this.link1dia && !this.link3dia && !this.linkNavia) {
          this.tl2overParte1.play()
          this.tl2overParte2.play()
          this.tl2overParte3.play()
          this.tl2overParte4.play()
        }
      }
    },
    mouseleaveLink2dia() {
      this.link2diaOver = false
      if (this.linkDiaOn) {
        this.link2dia = true
        this.tl2overParte1.reverse()
        this.tl2overParte2.reverse()
        this.tl2overParte3.reverse()
        this.tl2overParte4.reverse()
      }
    },
    mouseoverLink3dia() {
      this.link3diaOver = true
      if (this.linkDiaOn) {
        if (!this.link1dia && !this.link2dia && !this.linkNavia) {
          this.tl3overParte1.play()
          this.tl3overParte2.play()
          this.tl3overParte3.play()
          this.tl3overParte4.play()
        }
      }
    },
    mouseleaveLink3dia() {
      this.link3diaOver = false
      if (this.linkDiaOn) {
        this.link3dia = true
        this.tl3overParte1.reverse()
        this.tl3overParte2.reverse()
        this.tl3overParte3.reverse()
        this.tl3overParte4.reverse()
      }
    },
    // end
  },

  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.tl1overParte1.reverse()
    this.tl1overParte2.reverse()
    this.tl1overParte3.reverse()
    this.tl1overParte4.reverse()

    // animacoes de saída da página
    this.tlPageOut
      .to(['.pcc', '.contaNavia'], {
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in',
      })
      .to(
        '.diagrama',
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power3.in',
        },
        '<'
      )
      .to(
        '.loadingpv',
        {
          width: '100%',
          duration: 1,
          ease: 'power3.in',
        },
        0
      )
      .to('.home', {
        duration: 0.5,
        opacity: 0,
        scale: 1.1,
        delay: 0.2,
        ease: 'Power2.out',
        onComplete: () => {
          next()
        },
      })
  },
  // end
}
</script>

<style lang="scss">
.img {
  display: block;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  #video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .backImg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    // background-image: url('../assets/images/image00.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .contHome {
    // border: 2px solid #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
    height: 100%;
    max-width: 1300px;
    // margin: 10px 0 0 0;
    .pcc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // border: 2px solid #333;
      width: 40%;
      height: 100%;
      mix-blend-mode: overlay;
      opacity: 0;
      z-index: 888;
      span {
        display: block;
        font-size: 115px;
        font-weight: 700;
        line-height: 110px;
      }
    }
    .pccaNavia {
      mix-blend-mode: normal !important;
      color: #cbcbcb !important;
    }

    .aNaviaState {
      display: block !important;
    }

    .aNavia {
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      z-index: 887;
      top: 0;
      left: 0;
      opacity: 0;
      .formaFundoaNavia {
        position: absolute;
        width: 1488px;
        height: 1371px;
        right: -50px;
        top: -235px;
        transform: scale(1);
        // transform-origin: right top;
      }
      // .formaFundoaNavia2 {
      //   position: absolute;
      //   // background-color: rgba(18, 33, 36, 0.958);
      //   background-color: rgba(72, 33, 36, 0.5);
      //   width: 105%;
      //   height: 105%;
      //   z-index: 999999999;
      //   border-radius: 0% 25% 0% 0% / 0% 70% 0% 0%;
      // }
      .formaFundoaNaviaMob {
        position: absolute;
        width: 100%;
        height: 100%;
        display: none;
        background-color: rgba(18, 33, 36, 0.958);
        border-radius: 92% 16% 10% 10% / 10% 0% 0% 0%;
        margin: 110px 0 0 0;
      }
      .btCloseaNavia {
        position: absolute;
        z-index: 99999999999;
        right: 5%;
        top: 95px;
      }
      div.blocoaNavia::-webkit-scrollbar {
        display: none;
      }
      .blocoaNavia {
        position: relative;
        max-width: 1300px;
        width: 85%;
        margin: 150px auto 0 auto;
        height: 100%;
        overflow-y: auto;
        .contaNavia {
          width: 50%;
          position: absolute;
          right: 0;
          padding: 60px 0 160px 0;
          span.titleContaNavia {
            margin: 0 0 35px 0;
            display: block;
            font-size: 24px;
            line-height: 32px;
            color: #73b98f;
          }
          p {
            font-size: 15px;
            font-weight: 300;
            color: #cbcbcb;
            line-height: 22px;
            margin: 0 0 25px 0;
            span {
              font-weight: 400;
              color: #e9e9e9;
            }
          }
        }
      }
    }
    .diagrama {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;
      opacity: 0;
      .boxDia {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .elem2dia {
        position: absolute;
        left: 65px;
      }
      .elem3dia {
        position: absolute;
        left: 105px;
        span {
          display: block;
          font-size: 37px;
          font-weight: 600;
          line-height: 32px;
        }
      }
      .elem4dia {
        position: absolute;
        bottom: 115px;
        left: 245px;
        z-index: 10;
      }
      .elem5dia {
        position: absolute;
        bottom: 200px;
        left: 290px;
      }
      .link1dia {
        position: absolute;
        top: 130px;
        left: -10px;
        cursor: pointer;
        a {
          display: flex;
          flex-direction: row;
        }
        .link1diaBtexto {
          text-align: right;
        }
        .link1diaSvg {
          margin: 25px 0 0 6px;
        }
        span {
          display: block;
        }
        span.link1diaPense {
          margin: 0 0 3px 0;
          font-size: 14px;
          font-weight: 500;
        }
        span.link1diaConsultoria {
          font-size: 14px;
          font-weight: 300;
        }
      }
      .cont1dia {
        position: absolute;
        width: 290px;
        opacity: 0;
        p {
          font-size: 17px;
          font-weight: 300;
          line-height: 25.5px;
          color: #e9e9e9;
        }
      }
      .elemInt1dia {
        position: absolute;
        bottom: 140px;
        left: 250px;
        opacity: 0;
      }
      .folhadia1 {
        position: absolute;
        right: 110px;
        bottom: 108px;
        opacity: 0;
      }
      .link2dia {
        position: absolute;
        bottom: 35px;
        left: 235px;
        cursor: pointer;
        a {
          display: flex;
          flex-direction: row;
        }
        .link2diaBtexto {
          text-align: left;
        }
        .link2diaSvg {
          margin: -10px 6px 0 0;
        }
        span {
          display: block;
        }
        span.link2diaPense {
          margin: 0 0 3px 0;
          font-size: 14px;
          font-weight: 500;
        }
        span.link2diaConsultoria {
          font-size: 14px;
          font-weight: 300;
        }
      }
      .cont2dia {
        position: absolute;
        width: 290px;
        opacity: 0;
        p {
          font-size: 17px;
          font-weight: 300;
          line-height: 25.5px;
          color: #e9e9e9;
        }
      }
      .elemInt2dia {
        position: absolute;
        bottom: 140px;
        left: 250px;
        opacity: 0;
      }
      .folhadia2 {
        position: absolute;
        right: 120px;
        bottom: 83px;
        opacity: 0;
      }
      .link3dia {
        position: absolute;
        top: 190px;
        right: -51px;
        cursor: pointer;
        a {
          display: flex;
          flex-direction: row;
        }
        .link3diaBtexto {
          text-align: left;
        }
        .link3diaSvg {
          margin: 25px 6px 0 0;
        }
        span {
          display: block;
        }
        span.link3diaPense {
          margin: 0 0 3px 0;
          font-size: 14px;
          font-weight: 500;
        }
        span.link3diaConsultoria {
          font-size: 14px;
          font-weight: 300;
        }
      }
      .cont3dia {
        position: absolute;
        width: 290px;
        opacity: 0;
        p {
          font-size: 17px;
          font-weight: 300;
          line-height: 25.5px;
          color: #e9e9e9;
        }
      }
      .elemInt3dia {
        position: absolute;
        bottom: 140px;
        left: 250px;
        opacity: 0;
      }
      .folhadia3 {
        position: absolute;
        right: 124px;
        bottom: 76px;
        opacity: 0;
      }
      div.icoVideoDia {
        position: absolute;
        bottom: 28px;
        left: 25px;
      }
      div.botaoOpenaNavia {
        position: absolute;
        top: 180px;
        left: 220px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        span {
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 0 10px;
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .formaFundoaNavia {
    transform-origin: top right;
  }
}
</style>
