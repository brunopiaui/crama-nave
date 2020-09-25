<template>
  <div v-touch:swipe.top="moveBackMob" v-touch:swipe.bottom="moveBackMobBottom" class="geralInt">
    <div class="backImg"></div>

    <div class="loadingpv"> </div>

    <!-- <div v-if="progressing" class="loading">{{ progress }}%</div> -->

    <div class="backR">
      <div class="backRshape">
        <svg width="100%" height="100%" viewBox="0 0 1280 1080">
          <path
            d="M1280,1080H76c0,0-76-186-76-501S76,0,76,0h1204V1080z"
            fill="#122124"
            opacity="0.97"
          />
        </svg>
      </div>
      <div></div>
    </div>
    <!-- backR -->

    <div class="blocoPorc">
      <div class="porcTxt"><span id="porc">0</span>%</div>
      <div class="setaPorc"><img src="../assets/images/setaporc.svg"/></div>
    </div>
    <!-- blocoPorc -->

    <div class="elementoInterna1">
      <svg xmlns="http://www.w3.org/2000/svg" width="794.996" height="793.949">
        <path
          d="M261.608,584.819c116.376-4.956,204.566-32.2,284.644-145.068,28.944-40.812,49.777-92.325,38.161-140.712-12.531-52.3-58.33-86.738-95.576-124.173C444.805,130.613,409.233,76.8,358.856,40.4,282.44-14.8,164.612-16.885,100.726,55.68c-27.871,31.627-42.675,72.881-54.7,113.6A1217.218,1217.218,0,0,0,8.37,341.46C2.657,381.294-7.759,425.294,9.506,460.93c19.475,40.149,84.56,88.221,163.217,115.177C172.724,576.107,204.856,587.249,261.608,584.819Z"
          transform="matrix(-0.883, 0.469, -0.469, -0.883, 794.317, 517.355)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="elementoInterna2 elementoInterna2_cont">
      <img src="../assets/images/elementointerna4_5.png" />
    </div>
    <div class="elementoInterna3">
      <img src="../assets/images/elementointerna5.svg" />
    </div>
    <div class="elementoInterna4">
      <img src="../assets/images/elementointerna6.svg" />
    </div>
    <div class="elementoInterna5">
      <!-- <img src="../assets/images/elementointerna7.svg" /> -->
    </div>

    <div class="backContMob">
      <div class="intBackContMob"></div>
    </div>
    <!-- backContMob -->

    <div class="conteudo">
      <div class="sideL">
        <div class="blocoTitle">
          <!-- <h3>Pense no amanhã</h3> -->
          <h2>CONTATO</h2>
          <p>A biodiversidade te chama.</p>
        </div>
        <!--blocoTitle-->
        <div class="blocoMedia">
          <!-- <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48.182"
              height="49.957"
              style="cursor:pointer;"
              @mouseover="btsInt.btVideo = true"
              @mouseleave="btsInt.btVideo = false"
            >
              <g
                transform="translate(1.2 2)"
                fill="none"
                stroke="#fff"
                stroke-width="1"
              >
                <path
                  class="pathBt"
                  :class="{ hoverPathBtActive: btsInt.btVideo }"
                  d="M44.5,23.9c0,0,0-8.1-4.9-14.1s-13-10.3-22.8-7.6S3.3,14.2,2.2,17.4s-2.7,9.8,4.3,20.1 s20.6,9.8,29.8,2.7C42.3,35.6,44.5,31,44.5,23.9z"
                />
                <path
                  d="M17.918,10.8V7.066A1.069,1.069,0,0,0,16.853,6H4.066A1.069,1.069,0,0,0,3,7.066V17.722a1.069,1.069,0,0,0,1.066,1.066H16.853a1.069,1.069,0,0,0,1.066-1.066v-3.73l4.262,4.262V6.533Z"
                  transform="translate(11 11)"
                />
              </g>
            </svg>
          </div> -->
        </div>
        <!-- blocoMedia -->
      </div>
      <!-- sideL -->

      <div class="sideR">
        <div id="scroll">
          <div class="blocoTexto">
            <p>
              <span class="tit-bloco-contato">Fale conosco</span>
              A gente te coloca em contato com a natureza.
            </p>
            <p>
              <span class="dest-bloco-contato">Email</span>
              contato@navia.bio
            </p>
            <p>
              <span class="dest-bloco-contato">Telefones</span>
              +55 (21) 99151-5119
              <br />
              +55 (21) 99151-5119
            </p>
            <p>
              <span class="dest-bloco-contato">Endereços</span>
              Estrada Bernando Coutinho, n. 1717, fundos, CEP 25.725-020, Araras, Petrópolis
              <br />
              Estrada da Gávea, n. 640, sala 306, CEP 22.610-001, São Conrado, Rio de Janeiro
            </p>
          </div>
          <!-- blocoTexto -->
        </div>
        <!-- scroll -->
      </div>
      <!-- sideR -->
    </div>
    <!-- conteudo -->
  </div>
  <!-- geralInt -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { MyFunctions } from '../assets/js/functions.js'

export default {
  name: 'Contato',
  data() {
    return {
      tl: null,
      btsInt: {
        btVideo: false,
      },
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageOut = this.$gsap.timeline()
  },
  mounted() {
    // animacao entrada página interna
    this.tlPageIn
      .to(
        [
          '.backR',
          '.intBackContMob',
          '.conteudo',
          '.blocoPorc',
          '.elementoInterna1',
          '.elementoInterna2',
          '.elementoInterna3',
          '.elementoInterna4',
          '.elementoInterna5',
        ],
        {
          duration: 0.1,
          visibility: 'visible',
        }
      )
      .from(
        '.intBackContMob',
        {
          duration: 0.8,
          y: 2000,
          ease: 'power3.out',
        },
        0
      )
      .from(
        '.backR',
        {
          duration: 0.8,
          x: 2000,
          ease: 'power3.out',
        },
        0
      )
      .from(
        ['.elementoInterna1'],
        {
          duration: 0.5,
          x: 100,
          y: -100,
        },
        '<'
      )
      .from(
        '.blocoTitle h3',
        {
          duration: 0.5,
          opacity: 0,
          x: 40,
          ease: 'power1.out',
        },
        '<0.5'
      )
      .from(
        ['.blocoTitle h2', '.blocoTitle p', '.blocoMedia'],
        {
          duration: 0.5,
          opacity: 0,
          x: 40,
          ease: 'power1.out',
          stagger: 0.25,
        },
        '<0.3'
      )
      .from(
        ['.sideR'],
        {
          duration: 0.5,
          opacity: 0,
        },
        '<0.5'
      )
      .from(
        '.elementoInterna2',
        {
          duration: 0.6,
          opacity: 0,
          x: 100,
          y: -10,
        },
        '<0.5'
      )
      .from(
        [
          '.elScrollInt div',
          '.elementoInterna3',
          '.elementoInterna4',
          '.elementoInterna5',
          '.blocoPorc',
        ],
        {
          duration: 0.5,
          opacity: 0,
          stagger: 0.25,
        },
        '<'
      )
      .from(
        '.blocoTexto p',
        {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.25,
          ease: 'back.out',
        },
        '< 1'
      )

    // end

    // scroll em qualquer lugar da página
    const conteudo = document.querySelector('.sideR')
    conteudo.addEventListener('DOMMouseScroll', () => false, false)
    conteudo.addEventListener('mousewheel', () => false, false)
    document.addEventListener('DOMMouseScroll', MyFunctions.moveScroll, false)
    document.addEventListener('mousewheel', MyFunctions.moveScroll, false)

    conteudo.addEventListener('keydown', () => false, false)
    document.addEventListener('keydown', MyFunctions.KeyScroll, false)

    conteudo.addEventListener('scroll', MyFunctions.porcScroll)
    // end
  },

  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),

    moveBackMob() {
      this.$gsap.to('.intBackContMob', {
        duration: 1.2,
        y: -235,
        ease: 'power3.out',
      })
    },
    moveBackMobBottom() {
      const conteudoScroll = document.querySelector('.conteudo')
      const gsap = this.$gsap.timeline()
      // if (conteudoScroll.scrollTop === 0) {
      //   this.$gsap.to('.intBackContMob', {
      //     duration: 1.2,
      //     y: 0,
      //     ease: 'power3.out',
      //   })
      // }
      setTimeout(function() {
        if (conteudoScroll.scrollTop === 0) {
          gsap.to('.intBackContMob', {
            duration: 1.2,
            y: 0,
            ease: 'power3.out',
          })
        }
      }, 500)
    },
  },
  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    // animacao saída página interna
    this.tlPageOut
      .to(['.conteudo', '.blocoPorc', '.intBackContMob'], {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        '.loadingpv',
        {
          width: '100%',
          duration: 0.8,
          ease: 'power2.in',
        },
        '<'
      )
      .to('.geralInt', {
        duration: 0.5,
        opacity: 0,
        scale: 1.1,
        delay: 0.2,
        ease: 'Power2.out',
        onComplete: () => {
          next()
        },
      })

    // end
  },
}
</script>

<style lang="scss" scoped>
.backImg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/image00.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
