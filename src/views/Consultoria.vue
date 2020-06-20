<template>
  <div class="geralInt">
    <div class="backImg"></div>

    <div class="loadingpv"> </div>

    <!-- <div v-if="progressing" class="loading">{{ progress }}%</div> -->

    <div class="backR">
      <div class="backRshape">
        <svg width="100%" height="100%" viewBox="0 0 1280 1080">
          <path
            d="M1280,1080H76c0,0-76-186-76-501S76,0,76,0h1204V1080z"
            fill="#4b595c"
            opacity="0.95"
          />
        </svg>
      </div>
      <div></div>
    </div>
    <!-- backR -->
    <!-- <div class="backRmob"></div> -->

    <div class="blocoPorc">
      <div class="porcTxt"><span id="porc">0</span>%</div>
      <div class="setaPorc"><img src="../assets/images/setaporc.svg"/></div>
    </div>
    <!-- blocoPorc -->

    <div class="elementoInterna1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="794.996"
        height="793.949"
        viewBox="0 0 794.996 793.949"
      >
        <path
          id="Path_358"
          data-name="Path 358"
          d="M261.608,584.819c116.376-4.956,204.566-32.2,284.644-145.068,28.944-40.812,49.777-92.325,38.161-140.712-12.531-52.3-58.33-86.738-95.576-124.173C444.805,130.613,409.233,76.8,358.856,40.4,282.44-14.8,164.612-16.885,100.726,55.68c-27.871,31.627-42.675,72.881-54.7,113.6A1217.218,1217.218,0,0,0,8.37,341.46C2.657,381.294-7.759,425.294,9.506,460.93c19.475,40.149,84.56,88.221,163.217,115.177C172.724,576.107,204.856,587.249,261.608,584.819Z"
          transform="matrix(-0.883, 0.469, -0.469, -0.883, 794.317, 517.355)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="elementoInterna2">
      <img src="../assets/images/elementointerna4.png" />
    </div>
    <div class="elementoInterna3">
      <img src="../assets/images/elementointerna5.svg" />
    </div>
    <div class="elementoInterna4">
      <img src="../assets/images/elementointerna6.svg" />
    </div>
    <div class="elementoInterna5">
      <img src="../assets/images/elementointerna7.svg" />
    </div>
    <div class="backContMob">
      <div class="intBackContMob"></div>
    </div>
    <div class="conteudo">
      <div class="sideL">
        <div class="blocoTitle">
          <h3>Pense no amanhã</h3>
          <h2>CONSULTORIA</h2>
          <p
            >Investir no meio que você produz é garantir continuidade de novas
            conquistas.</p
          >
        </div>
        <!--blocoTitle-->
        <div class="blocoMedia">
          <!-- <div><img src="../assets/images/icofoto.svg"/></div> -->
          <div><img src="../assets/images/icovideo.svg"/></div>
          <!-- <div><img src="../assets/images/icoaudio.svg"/></div> -->
        </div>
      </div>
      <!-- sideL -->
      <div class="testescroll" style="position:absolute; right:0; width: 55%;">
        <div
          class="testescroll1"
          style="position:absolute; top:340px; left:-70px;"
        >
          <img src="../assets/images/elementointerna2.svg" />
        </div>
        <div
          class="testescroll1"
          style="position:absolute; top:320px; left:-22px;"
        >
          <img src="../assets/images/elementointerna3.svg" />
        </div>
      </div>
      <div class="sideR">
        <div id="scroll">
          <div class="aspas">
            <h4>Sua marca como parte do mundo</h4>
            <p
              >“Na consultoria você tem um aprofundamento da biodiversidade.
              Você mostra que é possível ter um empreendimento usando esse
              conceito em benefício do seu negócio, em seu benefício e do
              entorno.”</p
            >
            <span>Gustavo Martinelli</span>
          </div>
          <!-- aspas -->
          <div class="blocoTexto">
            <p
              >Podemos construir o seu projeto ambiental unindo sustentabilidade
              e responsabilidade social integrado aos objetivos de sua empresa,
              e colaborando no gerenciamento da preservação do meio em que atua.
              Acreditamos que o planejamento e a administração dos recursos
              naturais são ganhos em um empreendimento.
            </p>

            <p
              >Pesquisas, diagnósticos, operações, planos de ação, instalações,
              licenciamentos, auditorias - as fases do processo de consultoria
              se adaptam a sua necessidade, mas seja ela qual for, oferecemos
              nossa criatividade, técnica e experiência para fornecer para você
              serviços confiáveis e eficientes.
            </p>

            <span class="destContP"
              >Porque a vida é a matéria-prima de nosso trabalho.</span
            >

            <ul class="contSolucoes">
              <span>Soluções na cadeia produtiva</span>
              <li>- Inventários florísticos e florestais</li>
              <li>- Restauração de ecossistemas</li>
              <li>- Conservação de espécies</li>
              <li>- Pesquisas de matérias-primas naturais para produtos</li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <!-- sideR -->
    </div>
    <!-- conteudo -->
  </div>
  <!-- geralInt -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Consultoria',
  data() {
    return {
      tl: null,
      umavez: true,
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
    const divconteudo = document.querySelector('.conteudo')
    const umavez = this.umavez
    document.addEventListener(
      'touchmove',
      function() {
        if (divconteudo.scrollTop > 0 && umavez === true) {
          console.log('acao')
        }
      },
      true
    )

    // if (this.progressing) {
    //   this.tl.to(
    //     '.loading',
    //     {
    //       duration: 1,
    //       opacity: 0,
    //       onComplete: () => {
    //         this.stopProgressingAction()
    //       },
    //     },
    //     '+=0.5'
    //   )
    // }
    this.tlPageIn
      .to(
        [
          '.backR',
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
          x: 50,
          y: 150,
        },
        '<0.5'
      )
      .from(
        [
          '.testescroll1',
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

    // Scroll
    const conteudo = document.querySelector('.sideR')
    conteudo.addEventListener('DOMMouseScroll', () => false, false)
    conteudo.addEventListener('mousewheel', () => false, false)

    document.addEventListener('DOMMouseScroll', this.moveScroll, false)
    document.addEventListener('mousewheel', this.moveScroll, false)
  },

  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),
    moveScroll(event) {
      let delta = 0
      if (!event) event = window.event
      // normalize the delta
      if (event.wheelDelta) {
        // IE and Opera
        delta = event.wheelDelta / 60
      } else if (event.detail) {
        // W3C
        delta = -event.detail / 2
      }
      const conteudo = document.querySelector('.sideR')
      let currPos = conteudo.scrollTop
      // calculating the next position of the object
      currPos = parseInt(currPos) - delta * 10
      // moving the position of the object
      conteudo.scrollTop = currPos

      let h = conteudo
      let b = document.querySelector('#scroll')
      let st = 'scrollTop'
      let sh = 'scrollHeight'

      var percent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100

      var percentshow = percent.toFixed(0)

      document.getElementById('porc').innerHTML = percentshow

      if (percent === 100) {
        this.$gsap.to('.setaPorc', {
          duration: 0.5,
          opacity: 0,
          ease: 'linear',
        })
      } else {
        this.$gsap.to('.setaPorc', {
          duration: 0.5,
          opacity: 1,
          ease: 'linear',
        })
      }

      if (percent === 0) {
        this.$gsap.to(
          [
            '.testescroll',
            '.elementoInterna1',
            '.elementoInterna2',
            '.elementoInterna3',
            '.elementoInterna4',
            '.elementoInterna5',
          ],
          {
            duration: 1,
            opacity: 1,
            ease: 'linear',
          }
        )
        this.$gsap.to('.porcTxt', {
          duration: 1,
          opacity: 0.1,
          ease: 'linear',
        })
      } else {
        this.$gsap.to(
          [
            '.testescroll',
            '.elementoInterna1',
            '.elementoInterna2',
            '.elementoInterna3',
            '.elementoInterna4',
            '.elementoInterna5',
          ],
          {
            duration: 1,
            opacity: 0.1,
            ease: 'linear',
          }
        )
        this.$gsap.to('.porcTxt', {
          duration: 1,
          opacity: 1,
          ease: 'linear',
        })
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.tlPageOut
      .to(['.conteudo', '.blocoPorc'], {
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
  },
}
</script>

<style lang="scss" scoped>
// .img {
//   position: fixed;
//   z-index: 1;
//   display: block;
//   width: 100%;
//   height: 100%;
//   background-image: url('../assets/images/image01.jpg');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }
.backImg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/image01.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
