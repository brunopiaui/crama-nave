<template>
  <div class="geralInt">
    <div class="img"></div>

    <div v-if="progressing" class="loading">{{ progress }}%</div>

    <div class="backR">
      <div class="backRshape"></div>
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
        <div class="aspas">
          <h4>Sua marca como parte do mundo</h4>
          <p
            >“Na consultoria você tem um aprofundamento da biodiversidade. Você
            mostra que é possível ter um empreendimento usando esse conceito em
            benefício do seu negócio, em seu benefício e do entorno.”</p
          >
          <span>Gustavo Martinelli</span>
        </div>
        <!-- aspas -->

        <p
          >Podemos construir o seu projeto ambiental e ajudá-lo no gerenciamento
          da preservação do meio em que sua empresa atua. Acreditamos que o
          planejamento e a administração dos recursos naturais são ganhos em um
          empreendimento.</p
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
    this.tl.from(['.sideL'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.from(['.sideR'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.from('p', {
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.25,
      ease: 'back.out',
    })
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

    this.$gsap.to(['.conteudo'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.to('.img', {
      duration: 0.6,
      opacity: 0,
      scale: 1.1,
      delay: 0,
      ease: 'Power2.easeInOut',
      onComplete: () => {
        next()
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.img {
  position: fixed;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/image01.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
