<template>
  <div class="geral">
    <transition name="fadeGal">
      <div v-if="showGal" class="galeria">
        <div class="backGal"></div>
        <transition-group name="fade" tag="div" class="fotosGaleria">
          <div v-for="i in [currentIndex]" :key="i">
            <img class="img-slide" :src="currentImg" />
          </div>
        </transition-group>
        <div class="backBottom"></div>
        <div class="topGaleria">
          <div class="fecharGal" @click="showGal = false">
            <img src="../assets/images/fechar.svg" />
          </div>
        </div>
        <div class="bottomGaleria">
          <div class="contFotoGaleria">
            <span class="jardimTit">{{ tituloJardim }}</span>
            <span class="jardimArq">{{ currentArq }}</span>
            <p>{{ currentDesc }}</p>
          </div>
          <div class="navGaleria">
            <div
              ><a class="prev" @click="prev"
                ><img src="../assets/images/setaleft.svg"/></a
            ></div>
            <div class="indNavGal"
              ><span>{{ currentID }}</span> / {{ slides.length }}</div
            >
            <div
              ><a class="next" @click="next"
                ><img src="../assets/images/setaright.svg"/></a
            ></div>
          </div>
        </div>
      </div>
    </transition>

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
            <h3>Cultive o princípio</h3>
            <h2>BIOPAISAGISMO</h2>
            <p
              >Um jardim é muito mais que a exibição de plantas e flores - nele,
              a vida cresce.</p
            >
          </div>
          <!--blocoTitle-->
          <div class="blocoMedia">
            <div><img src="../assets/images/icovideo.svg"/></div>
            <div style="cursor:pointer;" @click="showGal = !showGal"
              ><img src="../assets/images/icofoto.svg"
            /></div>
            <!-- <div><img src="../assets/images/icoaudio.svg"/></div> -->
          </div>
        </div>
        <!-- sideL -->
        <div
          class="testescroll"
          style="position:absolute; right:0; width: 55%;"
        >
          <div
            class="testescroll1"
            style="position:absolute; top:300px; left:-50px;"
          >
            <img src="../assets/images/elementointerna2.svg" />
          </div>
          <div
            class="testescroll1"
            style="position:absolute; top:280px; left:-75px;"
          >
            <img src="../assets/images/elementointerna3_3.svg" />
          </div>
        </div>
        <div class="sideR">
          <div id="scroll">
            <div class="aspas">
              <h4>Você em harmonia com a vida</h4>
              <p
                >“O Biopaisagismo é um conceito que une as questões biológicas e
                estéticas ao paisagismo. Na medida em que você consegue
                aproximar esses dois contextos – um jardim integrado a um
                conceito biológico, dentro de um ecossistema, você consegue uma
                conexão, que considero uma das mais importantes para a
                sociedade.”</p
              >
              <span class="bioCor">Gustavo Martinelli</span>
            </div>
            <!-- aspas -->
            <div class="blocoTexto">
              <p
                >A diversidade de nossos biomas nos garante inúmeras composições
                estéticas e orgânicas, ainda assim, no Brasil, mais de 90% das
                plantas utilizadas nas ornamentações não são da nossa flora. O
                Biopaisagismo traz um novo olhar sobre o jardim. Um jardim que
                cresce na integração, funcionalidade e potencialização de seus
                recursos, e faz parte da vida de quem convive e coexiste com sua
                beleza.
              </p>
              <p>
                <span class="destContP"
                  >Porque o nosso jardim fortalece o mundo.
                </span>
              </p>
            </div>
            <div class="videoCont">
              <div class="videoContBlocoTexto">
                <p style="color:#e9e9e9">Visite nossa galeria:</p>
              </div>
              <div class="videoContBlocoImg" @click="showGal = !showGal">
                <div class="imgVideoCont"
                  ><img src="../assets/images/thumbgaleria1.png"
                /></div>
                <div class="icoVideoCont">
                  <img src="../assets/images/icofoto.svg" />
                </div>
              </div>
              <!-- videoCont -->
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
          </div>
        </div>
        <!-- sideR -->
      </div>
      <!-- conteudo -->
    </div>
    <!-- geralInt -->
  </div>
  <!-- geral -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Biopaisagismo',
  data() {
    return {
      tl: null,
      showGal: false,
      currentIndex: 0,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
    slides() {
      return [
        {
          midia: this.backgrounds('j101'),
          id: 1,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j102'),
          id: 2,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j103'),
          id: 3,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j104'),
          id: 4,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j105'),
          id: 5,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j106'),
          id: 6,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j107'),
          id: 7,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas existentes com as característica ecológicas locais.',
        },
        {
          midia: this.backgrounds('j201'),
          id: 8,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j202'),
          id: 9,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j203'),
          id: 10,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j204'),
          id: 11,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j205'),
          id: 12,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j206'),
          id: 13,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j207'),
          id: 14,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j208'),
          id: 15,
          titulo: 'Jardim 2',
          arquiteto: 'Arquitetura: Lobão Arquitetura',
          descricao:
            'O paisagismo se integrou as áreas de uso e lazer do terreno. O projeto agregou ao cenário espécies ornamentais, mas preservou e valorizou as espécies existentes, incluindo os pomares frutíferos da Mata Atlântica.',
        },
        {
          midia: this.backgrounds('j301'),
          id: 16,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j302'),
          id: 17,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j303'),
          id: 18,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j304'),
          id: 19,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j305'),
          id: 20,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j306'),
          id: 21,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j307'),
          id: 22,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j308'),
          id: 23,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j309'),
          id: 24,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j310'),
          id: 25,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j311'),
          id: 26,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j312'),
          id: 27,
          titulo: 'Jardim 3',
          arquiteto: 'Arquitetura: Ao Cubo Arquitetura',
          descricao:
            'O projeto valorizou a área florestal do terreno, e criou um  conceito paisagístico com espécies de baixa manutenção. Utilizou as pedras locais na suavização de declives do terreno e na confecção de muros que se integraram a topografia.',
        },
        {
          midia: this.backgrounds('j401'),
          id: 28,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j402'),
          id: 29,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j403'),
          id: 30,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j404'),
          id: 31,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j405'),
          id: 32,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j406'),
          id: 33,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j407'),
          id: 34,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
        {
          midia: this.backgrounds('j408'),
          id: 35,
          titulo: 'Jardim 4',
          arquiteto: 'Arquitetura: Francisco Hue Arquitetura',
          descricao:
            'O paisagismo evidenciou o sofisticado projeto arquitetônico, integrando seus elementos com o jardim, sem interferir no seu design.',
        },
      ]
    },

    currentImg() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data && data.midia ? data.midia.url : null
    },
    currentID() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data.id
    },
    currentArq() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data.arquiteto
    },
    currentDesc() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data.descricao
    },
    tituloJardim() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data.titulo
    },
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageOut = this.$gsap.timeline()
  },
  mounted() {
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
          ease: 'power1.out',
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
    next() {
      this.currentIndex += 1
    },
    prev() {
      this.currentIndex -= 1
    },
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
//   display: block;
//   height: 100%;
//   background-image: url('../assets/images/image03.jpg');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// }
.backImg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/image03.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
