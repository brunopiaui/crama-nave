<template>
  <div class="geralInt">
    <div class="backImg"></div>

    <div class="loadingpv"> </div>
    <div v-if="progressing" class="loading">{{ progress }}%</div>
    <video id="video" autoplay muted loop>
      <source :src="video" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div class="backR">
      <div class="backRshape">
        <svg width="100%" height="100%" viewBox="0 0 1280 1080">
          <path
            d="M1280,1080H76c0,0-76-186-76-501S76,0,76,0h1204V1080z"
            fill="#E9E9E9"
            opacity="0.95"
          />
        </svg>
      </div>
      <div></div>
    </div>
    <!-- backR -->
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
    <div class="elementoInterna2 elementoInterna2_3">
      <img src="../assets/images/elementointerna4_3.png" />
    </div>
    <div class="elementoInterna3">
      <img src="../assets/images/elementointerna5.svg" />
    </div>
    <div class="elementoInterna4">
      <img src="../assets/images/elementointerna6.svg" />
    </div>
    <div class="elementoInterna5">
      <img src="../assets/images/elementointerna7_3.svg" />
    </div>

    <div class="conteudo">
      <div class="sideL">
        <div class="blocoTitle">
          <!-- <h3>Pense no amanhã</h3> -->
          <h2>BIOVIVA</h2>
          <p>Experiência é parte da inovação.</p>
        </div>
        <!--blocoTitle-->
        <div class="blocoMedia">
          <!-- <div><img src="../assets/images/icofoto.svg"/></div> -->
          <div><img src="../assets/images/icovideo.svg"/></div>
          <!-- <div><img src="../assets/images/icoaudio.svg"/></div> -->
        </div>
      </div>
      <!-- sideL -->
      <div class="sideR">
        <div id="scroll">
          <div class="aspas">
            <!-- <h4>Sua marca como parte do mundo</h4> -->
            <p
              >“Eu realizei durante muitos e muitos anos expedições científicas
              por todo o Brasil. Isso me deu um contato único com a natureza e a
              possibilidade de enxergar os ecossistemas, as paisagens e os
              lugares muito de perto.”</p
            >
            <span>Gustavo Martinelli</span>
          </div>
          <!-- aspas -->
          <div class="blocoTexto" style="color:#333333;">
            <p style="color:#333333;"
              >A trajetória de uma vida, o conhecimento de um caminho e as
              memórias de uma terra unidos na construção do seu negócio, projeto
              ou ambiente e, principalmente, no cuidado com o mundo. O biólogo
              Gustavo Martinelli é a raiz da Navia.
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div class="videoCont">
            <div><img src="../assets/images/icovideo.svg"/></div>
          </div>
        </div>
      </div>
      <!-- sideR -->
    </div>
    <!-- conteudo -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Bioviva',
  data() {
    return {
      tl: null,
      video: require('../assets/videos/video01.mp4'),
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
    this.tlPageIn
      .to(
        [
          '.backR',
          '.conteudo',
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
          ease: 'power1.out',
        },
        0
      )
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),
  },
  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.tlPageOut
      .to('.conteudo', {
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
.backImg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#video {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
