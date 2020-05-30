<template>
  <div class="geralInt">
    <div class="backImg"></div>

    <div class="loadingpv"> </div>

    <div v-if="progressing" class="loading">{{ progress }}%</div>

    <div class="backR">
      <div class="backRshape">
        <svg width="100%" height="100%" viewBox="0 0 1280 1080">
          <path d="M1280,1080H76c0,0-76-186-76-501S76,0,76,0h1204V1080z" fill="#4b595c" opacity="0.95"/>
        </svg>
      </div>
      <div></div>
    </div>
    <!-- backR -->

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
      </div>
      <!-- sideL -->

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

          <p
            >Podemos construir o seu projeto ambiental e ajudá-lo no
            gerenciamento da preservação do meio em que sua empresa atua.
            Acreditamos que o planejamento e a administração dos recursos
            naturais são ganhos em um empreendimento.</p
          >
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <p
            >Pesquisas, diagnósticos, operações, planos de ação, instalações,
            licenciamentos, auditorias - as fases do processo de consultoria se
            adaptam a sua necessidade, mas seja ela qual for, oferecemos nossa
            criatividade, técnica e experiência para fornecer para você serviços
            confiáveis e eficientes.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
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
      .from(['.backR'], {
        duration: 1.8,
        // opacity: 0,
        x: 2000,
        ease: 'power1.inOut',
      })
      .from(['.conteudo'], {
        duration: 1,
        opacity: 0,
      })
      .from(
        ['.sideL'],
        {
          duration: 1,
          opacity: 0,
        },
        '<'
      )
      .from(['.sideR'], {
        duration: 1,
        opacity: 0,
      })
      .from('p', {
        duration: 1.5,
        opacity: 0,
        y: 20,
        stagger: 0.25,
        ease: 'back.out',
      })

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

      if (percent !== Infinity && !isNaN(percent)) {
        console.log(Math.trunc(percent) + '%')
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.tlPageOut
      .to('.conteudo', {
        opacity: 0,
        duration: 0.5,
      })
      .to(
        '.loadingpv',
        {
          width: '100%',
          duration: 1,
          ease: 'power3.in',
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
    // this.$gsap.to(['.geralInt'], {
    //   duration: 0.6,
    //   opacity: 0,
    //   scale: 1.1,
    //   delay: 1,
    //   ease: 'Power2.easeInOut',
    //   onComplete: () => {
    //     next()
    //   },
    // })
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
