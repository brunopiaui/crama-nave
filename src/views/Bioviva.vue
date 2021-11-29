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
            fill="#E9E9E9"
            opacity="0.95"
          />
        </svg>
      </div>
      <div></div>
    </div>
    <!-- backR -->

    <div class="blocoPorc">
      <div class="porcTxt" style="color: #445356"><span id="porc">0</span>%</div>
      <div class="setaPorc">
        <!-- <img src="../assets/images/setaporc.svg"/> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="25.318" height="11.381">
          <g
            transform="translate(459.409 -1353.444) rotate(90)"
            fill="none"
            stroke="#586769"
            stroke-linecap="round"
            stroke-width="1"
          >
            <line x2="15.514" transform="translate(1354.148 458.704) rotate(-50)" />
            <line x2="15.514" transform="translate(1354.148 434.794) rotate(50)" />
          </g>
        </svg>
      </div>
    </div>
    <!-- blocoPorc -->

    <div class="elementoInterna1">
      <svg xmlns="http://www.w3.org/2000/svg" width="794.996" height="793.949">
        <path
          d="M261.608,584.819c116.376-4.956,204.566-32.2,284.644-145.068,28.944-40.812,49.777-92.325,38.161-140.712-12.531-52.3-58.33-86.738-95.576-124.173C444.805,130.613,409.233,76.8,358.856,40.4,282.44-14.8,164.612-16.885,100.726,55.68c-27.871,31.627-42.675,72.881-54.7,113.6A1217.218,1217.218,0,0,0,8.37,341.46C2.657,381.294-7.759,425.294,9.506,460.93c19.475,40.149,84.56,88.221,163.217,115.177C172.724,576.107,204.856,587.249,261.608,584.819Z"
          transform="matrix(-0.883, 0.469, -0.469, -0.883, 794.317, 517.355)"
          fill="none"
          stroke="#A3A3A3"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="elementoInterna2 elementoInterna2_b">
      <img src="../assets/images/elementointerna4_b.png" />
    </div>
    <div class="elementoInterna3">
      <img src="../assets/images/elementointerna5.svg" />
    </div>
    <div class="elementoInterna4">
      <img src="../assets/images/elementointerna6_b.svg" />
    </div>
    <div class="elementoInterna5">
      <img src="../assets/images/elementointerna7_2.svg" />
    </div>

    <div class="backContMob">
      <div class="backClaro"></div>
    </div>
    <!-- backContMob -->

    <div class="conteudo">
      <div class="sideL">
        <div class="blocoTitle">
          <!-- <h3>Pense no amanhã</h3> -->
          <h2>BIOVIVA</h2>
          <p>Experiência é parte da inovação.</p>
        </div>
        <!--blocoTitle-->
        <div class="blocoMedia">
          <div>
            <a @click="scrollSmooth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48.182"
                height="49.957"
                style="cursor: pointer"
                @mouseover="btsInt.btVideo = true"
                @mouseleave="btsInt.btVideo = false"
              >
                <g transform="translate(1.2 2)" fill="none" stroke="#fff" stroke-width="1">
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
            </a>
          </div>
        </div>
        <!-- blocoMedia -->
      </div>
      <!-- sideL -->
      <div class="elScrollInt">
        <div style="top: 500px" class="elScrollInt1">
          <img src="../assets/images/elementointerna2_b.svg" />
        </div>
        <div style="top: 480px" class="elScrollInt2">
          <img src="../assets/images/elementointerna3_b.svg" />
        </div>
      </div>
      <!-- elScrollInt -->
      <div class="sideR">
        <div id="scroll">
          <div class="blocoTexto">
            <p><span style="color: #122124">Conheça quem faz a Navia</span></p>
            <p style="color: #122124">
              <span style="color: #122124">Gustavo Martinelli</span> e
              <span style="color: #122124">Eládio Miranda Lima</span> se encontram na visão de mundo
              e se complementam no conhecimento e prática. Na Navia,
              <span style="color: #122124"
                >o domínio técnico do biólogo se une à veia empreendedora do homem de negócios</span
              >. Dois olhares que juntos se multiplicam, mas que tem um interesse e uma paixão única
              no desenvolvimento desse trabalho -
              <span style="color: #122124"
                >a conexão e o equilíbrio produtivo entre o homem, a sociedade e o meio
                ambiente.</span
              >
            </p>
          </div>
          <!-- blocoTexto -->
          <div class="aspas" style="margin-top: 80px">
            <h4 style="font-size: 18px; color: #4b9167"
              >A arte verde e a técnica viajante de Gustavo Martinelli.</h4
            >
            <p class="bioCorP"
              >“Eu realizei durante muitos e muitos anos expedições científicas por todo o Brasil.
              Isso me deu um contato único com a natureza e a possibilidade de enxergar os
              ecossistemas, as paisagens e os lugares muito de perto.”</p
            >
            <span class="assAspas bioCorSpan">Gustavo Martinelli</span>
          </div>
          <!-- aspas -->
          <div class="blocoTexto">
            <p style="color: #122124"
              >A trajetória de uma vida, o conhecimento de um caminho e as memórias de uma terra
              unidos na construção do seu negócio, projeto ou ambiente e, principalmente, no cuidado
              com o mundo. O biólogo
              <span style="color: #122124">Gustavo Martinelli é a raiz da Navia</span>, um botânico
              reconhecido internacionalmente por sua contribuição na conservação do ecossistema, e
              um dos maiores especialistas em bromélias do mundo.
            </p>
            <p style="color: #122124"
              >Na ciência e na técnica - Com PhD em Ecologia pela University of St.Andrews, no Reino
              Unido, e 46 anos de carreira, foi pesquisador titular do Jardim Botânico do Rio de
              Janeiro e coordenador do Centro Nacional de Conservação da Flora e representante do
              Brazil Plant Red List Authority da IUCN, catalogando e conservando a biodiversidade
              nativa por meio de avaliações de risco e expedições por todo o território nacional. Na
              busca constante pela conservação da flora, o cientista participa de conselhos de
              organizações nacionais e internacionais, como SOS Mata Atlântica e Chair do Brazilian
              Plant Red List Authority da IUCN, e é membro do International Advisory Committee do
              Botanic Gardens Conservation International. Martinelli também é professor de
              pós-graduação na Escola Nacional de Botânica Tropical-ENBT/JBRJ e professor
              credenciado da Open University, na Inglaterra.
            </p>
            <p style="color: #122124"
              >No Biopaisagismo - Martinelli atua como paisagista desde 1980, e já assinou inúmeros
              jardins nas capitais e interior do Brasil, muitos deles em parcerias com arquitetos e
              escritórios de arquitetura. Seu trabalho como paisagista se destaca pelas belas
              paisagens que realçam a biodiversidade brasileira e ajudam na regeneração dos
              ecossistemas, e por um design que integra os elementos arquitetônicos às preferências
              dos clientes.
            </p>
            <br />
            <span class="title-list-final">Os frutos de uma rota:</span>
            <ul class="contSolucoes">
              <li style="color: #122124; margin-left: 5px">47 anos estudando a flora brasileira</li>
              <li style="color: #122124; margin-left: 5px">Mais de 380 jardins planejados</li>
              <li style="color: #122124; margin-left: 5px"
                >Prêmio Rodrigo de Mello Franco de Andrade – IAB de melhor projeto paisagístico de
                1991, pelo projeto da Fazenda Monte Cristo, em parceria com o arquiteto Alfredo
                Britto</li
              >
              <li style="color: #122124; margin-left: 5px">Premio Jabuti 1º lugar 2014</li>
              <li style="color: #122124; margin-left: 5px"
                >Premio Work of Excellence - IUCN - Abu Dhabi, EAU, 2018</li
              >
              <li style="color: #122124; margin-left: 5px"
                >Mais 400 expedições científicas no Brasil</li
              >
              <li style="color: #122124; margin-left: 5px"
                >Membro de expedições de Roberto Burle Marx, contribuindo com a identificação de
                plantas</li
              >
              <li style="color: #122124; margin-left: 5px"
                >Mais de 22 mil espécies da flora catalogadas
              </li>
              <li style="color: #122124; margin-left: 5px"
                >Coordenador do Centro Nacional de Conservação da Flora (CNCFlora)</li
              >
              <li style="color: #122124; margin-left: 5px"
                >Membro da comissão técnica de elaboração da candidatura do Sítio Roberto Burle Marx
                ao título de Patrimônio Natural e Cultural da Humanidade da UNESCO</li
              >
            </ul>
            <div id="video-int" class="videoWrapper">
              <iframe
                width="560"
                height="349"
                src="https://www.youtube.com/embed/iunxJeDZjGQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
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
  name: 'Bioviva',
  data() {
    return {
      tl: null,
      btsInt: {
        btVideo: false,
        btGaleria: false,
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
          '.backClaro',
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
        '.backClaro',
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
          x: 50,
          y: 150,
        },
        '<0.5'
      )
      .from(
        [
          'elScrollInt div',
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
        ['.blocoTexto p'],
        {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.25,
          ease: 'back.out',
        },
        '<'
      )

    // end

    // desabilitando evento scroll desbrave home
    document.removeEventListener('DOMMouseScroll', MyFunctions.moveScrollHome, false)
    document.removeEventListener('mousewheel', MyFunctions.moveScrollHome, false)

    // scroll em qualquer lugar da página
    const conteudo = document.querySelector('.sideR')
    // conteudo.addEventListener('DOMMouseScroll', () => false, false)
    // conteudo.addEventListener('mousewheel', () => false, false)
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

    scrollSmooth() {
      document.querySelector('#video-int').scrollIntoView({
        behavior: 'smooth',
      })
    },

    moveBackMob() {
      this.$gsap.to('.backClaro', {
        duration: 1.2,
        y: -180,
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
      setTimeout(function () {
        if (conteudoScroll.scrollTop === 0) {
          gsap.to('.backClaro', {
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
      .to(['.conteudo', '.blocoPorc', '.backClaro'], {
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
  background-image: url('../assets/images/imagebio.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

// #video {
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 0;
//   min-width: 100%;
//   min-height: 100%;
// }
</style>
