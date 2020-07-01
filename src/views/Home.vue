<template>
  <div class="home">
    <div class="backImg"></div>
    <div class="img">
      <video id="video" ref="video" autoplay muted loop>
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
      <div class="buttonVideoMob">
        <img src="../assets/images/icovideo.svg" />
      </div>
      <div class="pcc">
        <span
          class="hoverPcc hoverPcc1"
          @mouseover="mouseoverPcc1"
          @mouseleave="mouseleavePcc1"
          >Pense</span
        >
        <span
          class="hoverPcc hoverPcc2"
          @mouseover="mouseoverPcc2"
          @mouseleave="mouseleavePcc2"
          >Conecte</span
        >
        <span
          class="hoverPcc hoverPcc3"
          @mouseover="mouseoverPcc3"
          @mouseleave="mouseleavePcc3"
          >Cultive</span
        >
      </div>
      <!-- pcc -->
      <div class="diagrama">
        <div class="boxDia">
          <div class="elem1dia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="524.979"
              height="522.38"
              viewBox="0 0 524.979 522.38"
            >
              <path
                id="Path_302"
                data-name="Path 302"
                class="cls-1"
                d="M199.582,0s-72.1,0-124.971,43.259S-16.714,158.617,7.319,245.135,113.063,365.3,141.9,374.912s86.518,24.033,177.843-38.453S406.264,153.81,343.778,72.1C303.211,19.034,262.067,0,199.582,0Z"
                transform="matrix(0.883, -0.469, 0.469, 0.883, 0.481, 183.347)"
              />
            </svg>
          </div>
          <div class="elem2dia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="313.7"
              height="312.529"
              viewBox="0 0 313.7 312.529"
            >
              <path
                id="Path_304"
                data-name="Path 304"
                class="cls-2 testeee"
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
          <div
            class="link1dia"
            @mouseover="mouseoverLink1dia"
            @mouseleave="mouseleaveLink1dia"
          >
            <router-link to="/consultoria">
              <div class="link1diaBtexto">
                <span class="link1diaPense">Pense</span>
                <span class="link1diaConsultoria">CONSULTORIA</span>
              </div>
              <div class="link1diaSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.738"
                  height="18.385"
                  viewBox="0 0 18.738 18.385"
                >
                  <path
                    id="Path_339"
                    data-name="Path 339"
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
              >Soluções integradas à biodiversidade. O conhecimento e a
              experiência a favor dos seus investimentos e do ecossistema.
            </p>
          </div>
          <div class="folhadia1">
            <img src="../assets/images/elementodia2.png" />
          </div>
          <div class="elemInt1dia">
            <img src="../assets/images/elementodia1.svg" />
          </div>
          <div
            class="link2dia"
            @mouseover="mouseoverLink2dia"
            @mouseleave="mouseleaveLink2dia"
          >
            <router-link to="/modelodenegocios">
              <div class="link2diaSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.738"
                  height="18.385"
                  viewBox="0 0 18.738 18.385"
                >
                  <path
                    id="Path_339"
                    data-name="Path 339"
                    class="cls-6"
                    d="M9.058,0A10,10,0,0,0,3.384,1.964,8.624,8.624,0,0,0,.33,11.129c1.091,3.928,4.8,5.455,6.11,5.892s3.928,1.091,8.074-1.746,3.928-8.292,1.091-12A7.354,7.354,0,0,0,9.058,0Z"
                    transform="translate(0.549 0.5)"
                  />
                </svg>
              </div>
              <div class="link2diaBtexto">
                <span class="link2diaPense">Conecte</span>
                <span class="link2diaConsultoria">MODELO DE NEGÓCIOS</span>
              </div>
            </router-link>
          </div>
          <div class="cont2dia">
            <p
              >Sustentabilidade como valor econômico de sua empresa. Ganhos e
              resultados incorporados à existência do meio ambiente.
            </p>
          </div>
          <div class="folhadia2">
            <img src="../assets/images/folha2.png" />
          </div>
          <div class="elemInt2dia">
            <img src="../assets/images/elementodia2.svg" />
          </div>
          <div
            class="link3dia"
            @mouseover="mouseoverLink3dia"
            @mouseleave="mouseleaveLink3dia"
          >
            <router-link to="/biopaisagismo">
              <div class="link3diaSvg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.738"
                  height="18.385"
                  viewBox="0 0 18.738 18.385"
                >
                  <path
                    id="Path_339"
                    data-name="Path 339"
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
              >A estética do paisagismo relacionada às questões biológicas. Seu
              jardim vivo com a beleza, o volume e o ritmo da natureza.
            </p>
          </div>
          <div class="folhadia3">
            <img src="../assets/images/folha3.png" />
          </div>
          <div class="elemInt3dia">
            <img src="../assets/images/elementodia3.svg" />
          </div>
          <div class="icoVideoDia">
            <img src="../assets/images/icovideo.svg" />
          </div>
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

export default {
  name: 'Home',
  data() {
    return {
      tl: null,
      video: require('../assets/videos/video01.mp4'),
      hoverSom: false,
      linkDiaOn: true,
      link1dia: false,
      link2dia: false,
      link3dia: false,
      link1diaOver: false,
      link2diaOver: false,
      link3diaOver: false,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
  },
  watch: {
    progress(value) {
      const bkg = this.backgrounds('video01')
      if (value === 100 && bkg && this.$refs.video) {
        this.$refs.video.src = URL.createObjectURL(
          this.backgrounds('video01').url
        )
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

    this.tlPageIn
      .fromTo(
        '.pcc',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(
        '.diagrama',
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.out' },
        0
      )

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
        ['.hoverPcc2', '.hoverPcc3'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.5,
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
        ['.hoverPcc1', '.hoverPcc3'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.5,
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
        ['.hoverPcc2', '.hoverPcc1'],
        {
          filter: 'blur(5px)',
          autoRound: false,
          duration: 0.3,
          opacity: 0.5,
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
  },

  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),

    mouseoverPcc1() {},
    mouseleavePcc1() {},
    mouseoverPcc2() {},
    mouseleavePcc2() {},
    mouseoverPcc3() {},
    mouseleavePcc3() {},

    mouseoverLink1dia() {
      this.link1diaOver = true
      if (this.linkDiaOn) {
        if (!this.link2dia && !this.link3dia) {
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
        if (!this.link1dia && !this.link3dia) {
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
        if (!this.link1dia && !this.link2dia) {
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
  },

  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.tl1overParte1.reverse()
    this.tl1overParte2.reverse()
    this.tl1overParte3.reverse()
    this.tl1overParte4.reverse()

    this.tlPageOut
      .to('.pcc', {
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
  // background-image: url('../assets/images/image00.jpg');
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  // .shape {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 256px;
  //   height: 256px;
  //   background: #fff;
  //   border: 2px solid #333;
  //   border-radius: 51% 49% 24% 76% / 19% 27% 73% 81%;
  //   opacity: 0;
  //   animation: logo 20s linear alternate both infinite;
  //   .text {
  //     font-family: 'Ubuntu', sans-serif;
  //     font-size: 40px;
  //     color: #fff;
  //     letter-spacing: 0.1em;
  //   }

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
      span {
        display: block;
        font-size: 115px;
        font-weight: 700;
        line-height: 110px;
      }
    }
    .diagrama {
      position: relative;
      // border: 2px solid #ff0000;
      // z-index: 99999999;
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
        // transition: transform 0.1s;
      }
      .elem2dia {
        position: absolute;
        left: 65px;
      }
      .elem3dia {
        position: absolute;
        left: 105px;
        // margin: 0 0 0 -90px;
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
        // margin: 90px 0 0 100px;
      }
      .elem5dia {
        position: absolute;
        bottom: 200px;
        left: 290px;
        // margin: 20px 0 0 70px;
      }
      .link1dia {
        position: absolute;
        top: 130px;
        left: -10px;
        // margin: -110px 0 0 -230px;
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
        // margin: 90px 0 0 20px;
        opacity: 0;
      }
      .folhadia1 {
        position: absolute;
        right: 110px;
        bottom: 108px;
        // margin-top: 95px;
        // margin-left: 123px;
        opacity: 0;
      }
      .link2dia {
        position: absolute;
        bottom: 35px;
        left: 235px;
        // margin: 210px 0 0 70px;
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
        // margin: 90px 0 0 20px;
        bottom: 140px;
        left: 250px;
        opacity: 0;
      }
      .folhadia2 {
        position: absolute;
        right: 120px;
        // margin-top: 112px;
        // margin-left: 116px;
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
        bottom: 50px;
        left: 50px;
      }
    }
  }
}

// @keyframes logo {
//   20% {
//     border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
//   }
//   40% {
//     border-radius: 87% 13% 65% 35% / 51% 55% 45% 49%;
//   }
//   60% {
//     border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
//   }
//   80% {
//     border-radius: 74% 26% 24% 76% / 42% 52% 48% 58%;
//   }
//   100% {
//     border-radius: 44% 56% 11% 89% / 57% 81% 19% 43%;
//   }
// }
</style>
