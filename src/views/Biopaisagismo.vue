<template>
  <div v-touch:swipe.top="moveBackMob" v-touch:swipe.bottom="moveBackMobBottom" class="geral">
    <transition name="fadeGal">
      <div v-if="showGal" v-touch:swipe.left="prev" v-touch:swipe.right="next" class="galeria">
        <div
          v-if="progressingGallery"
          style="width:100%; height:100%; background-color:#000000; position:absolute; z-index:98; display:flex; flex-direction:row; justify-content:center; align-itens:center; transition: all 0.5s;"
        >
          <span>CARREGANDO {{ progressGallery }} %</span>
        </div>
        <div class="backGal"></div>
        <transition-group name="fade" tag="div" class="fotosGaleria">
          <div v-for="i in [currentIndex]" :key="i">
            <img class="img-slide" :src="currentImg" />
          </div>
        </transition-group>
        <div class="backBottom"></div>
        <div class="topGaleria" style="z-index:99;">
          <div class="fecharGal">
            <div
              class="areaHoverBt"
              @mouseover="btsInt.btCloseGaleria = true"
              @mouseleave="btsInt.btCloseGaleria = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                @click="showGal = false"
              >
                <g transform="translate(2 2)" fill="none" stroke="#fff">
                  <path
                    d="M19.358.5S12.579.5 7.607 4.567-.979 15.414 1.28 23.548s9.942 11.3 12.654 12.2 8.135 2.26 16.721-3.615 8.14-17.171 2.26-24.854C29.101 2.29 25.233.5 19.358.5z"
                    class="pathBt"
                    :class="{ hoverPathBtActive: btsInt.btCloseGaleria }"
                  />
                  <path
                    stroke-linecap="round"
                    d="M13.91 24.204l9.972-11.884M13.91 12.294l9.972 11.884"
                  />
                </g>
              </svg>
            </div>
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
              ><a class="prev" @click="prev"><img src="../assets/images/setaleft.svg"/></a
            ></div>
            <div class="indNavGal"
              ><span>{{ currentID }}</span> / {{ slides.length }}</div
            >
            <div
              ><a class="next" @click="next"><img src="../assets/images/setaright.svg"/></a
            ></div>
          </div>
        </div>
      </div>
      <!-- galeria -->
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

      <div class="backContMob">
        <div class="intBackContMob"></div>
      </div>
      <!-- backContMob -->

      <div class="conteudo">
        <div class="sideL">
          <div class="blocoTitle">
            <h3>Cultive o princípio</h3>
            <h2>BIOPAISAGISMO</h2>
            <p>Um jardim é muito mais que a exibição de plantas e flores - nele, a vida cresce.</p>
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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48.182"
                height="49.957"
                style="cursor:pointer;"
                @click="showGal = !showGal"
                @mouseover="btsInt.btGaleria = true"
                @mouseleave="btsInt.btGaleria = false"
              >
                <g transform="translate(1.2 2)" fill="none" stroke="#fff" stroke-width="1">
                  <path
                    class="pathBt"
                    :class="{ hoverPathBtActive: btsInt.btGaleria }"
                    d="M44.5,23.9c0,0,0-8.1-4.9-14.1s-13-10.3-22.8-7.6S3.3,14.2,2.2,17.4s-2.7,9.8,4.3,20.1 s20.6,9.8,29.8,2.7C42.3,35.6,44.5,31,44.5,23.9z"
                  />
                  <path
                    d="M8.6,2,6.874,3.886H3.886A1.891,1.891,0,0,0,2,5.771V17.085a1.891,1.891,0,0,0,1.886,1.886H18.971a1.891,1.891,0,0,0,1.886-1.886V5.771a1.891,1.891,0,0,0-1.886-1.886H15.982L14.257,2Zm2.828,14.142a4.714,4.714,0,1,1,4.714-4.714A4.716,4.716,0,0,1,11.428,16.142Z"
                    transform="translate(12 12)"
                  />
                </g>
              </svg>
            </div>
          </div>
          <!-- blocoMedia -->
        </div>
        <!-- sideL -->
        <div class="elScrollInt">
          <div class="elScrollInt1">
            <img src="../assets/images/elementointerna2.svg" />
          </div>
          <div class="elScrollInt2">
            <img src="../assets/images/elementointerna3_3.svg" />
          </div>
        </div>
        <!-- elScrollInt -->
        <div class="sideR">
          <div id="scroll">
            <div class="aspas">
              <h4>Você em harmonia com a vida</h4>
              <p
                >“<span>O Biopaisagismo une as questões biológicas à estética do paisagismo.</span>
                Na medida em que você consegue aproximar esses dois contextos – um jardim integrado
                a um ecossistema, você consegue uma conexão, que considero uma das mais importantes
                para a sociedade.”</p
              >
              <span class="assAspas bioCor">Gustavo Martinelli</span>
            </div>
            <!-- aspas -->
            <div class="blocoTexto">
              <p
                >A diversidade de nossos biomas nos garante inúmeras composições estéticas e
                orgânicas. Ainda assim, no Brasil, mais de 90% das plantas utilizadas nas
                ornamentações não são da nossa flora. O Biopaisagismo é um novo conceito que amplia
                o olhar sobre o seu jardim.
                <span
                  >O Biopaisagismo reconecta as pessoas com a biodiversidade, promove
                  sustentabilidade e alia a beleza da natureza à arquitetura.</span
                >
                Com base no conhecimento científico sobre a ecologia, Navia cria soluções
                funcionais, valorizando o meio e integrando o ambiente.
              </p>
              <p
                >Quando projetamos um jardim, escolhendo espécies adequadas à área, valorizamos
                plantas compatíveis com a região, investimos no desenvolvimento de um ecossistema
                sustentável que atrai a fauna conveniente e, consequentemente, promove um maior
                controle de pragas, gerando baixo custo de manutenção.</p
              >
              <p
                ><span>É a integração e a potencialização dos recursos naturais disponíveis</span>
                no encanto do seu projeto.</p
              >
              <p>
                <span class="destContP">O nosso jardim fortalece o mundo. </span>
              </p>
            </div>
            <!-- blocoTexto -->
            <div class="videoCont">
              <div class="videoContBlocoTexto">
                <p style="color:#e9e9e9">Visite nossa galeria:</p>
              </div>
              <div
                class="videoContBlocoImg"
                @click="showGal = !showGal"
                @mouseover="btsInt.btGaleria2 = true"
                @mouseleave="btsInt.btGaleria2 = false"
              >
                <div class="imgVideoCont"><img src="../assets/images/thumbgaleria1.png"/></div>
                <div class="icoVideoCont">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48.182"
                    height="49.957"
                    style="cursor:pointer;"
                  >
                    <g transform="translate(1.2 2)" fill="none" stroke="#fff" stroke-width="1">
                      <path
                        class="pathBt"
                        :class="{ hoverPathBtActive: btsInt.btGaleria2 }"
                        d="M44.5,23.9c0,0,0-8.1-4.9-14.1s-13-10.3-22.8-7.6S3.3,14.2,2.2,17.4s-2.7,9.8,4.3,20.1 s20.6,9.8,29.8,2.7C42.3,35.6,44.5,31,44.5,23.9z"
                      />
                      <path
                        d="M8.6,2,6.874,3.886H3.886A1.891,1.891,0,0,0,2,5.771V17.085a1.891,1.891,0,0,0,1.886,1.886H18.971a1.891,1.891,0,0,0,1.886-1.886V5.771a1.891,1.891,0,0,0-1.886-1.886H15.982L14.257,2Zm2.828,14.142a4.714,4.714,0,1,1,4.714-4.714A4.716,4.716,0,0,1,11.428,16.142Z"
                        transform="translate(12 12)"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <!-- videoCont -->
            </div>
            <!-- videoCont / imagem galeria -->
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
import { MyFunctions } from '../assets/js/functions.js'

export default {
  name: 'Biopaisagismo',
  data() {
    return {
      tl: null,
      showGal: false,
      currentIndex: 0,
      btsInt: {
        btVideo: false,
        btGaleria: false,
        btGaleria2: false,
        btCloseGaleria: false,
      },
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'backgrounds',
      'progressing',
      'progressingGallery',
      'progress',
      'progressGallery',
    ]),

    // slides, fotos e informaçoes galeria
    slides() {
      return [
        {
          midia: this.backgrounds('j101'),
          id: 1,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j102'),
          id: 2,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j103'),
          id: 3,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j104'),
          id: 4,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j105'),
          id: 5,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j106'),
          id: 6,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
        },
        {
          midia: this.backgrounds('j107'),
          id: 7,
          titulo: 'Jardim 1',
          arquiteto: 'Arquitetura: Bernardes Arquitetura & Lobão Arquitetura',
          descricao:
            'O projeto foi elaborado a partir de um jardim feito pela mãe do proprietário e com grande valor emocional. Conciliou as plantas já existentes com novas espécies adequadas ao ecossistema local.',
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
    // end
  },
  watch: {
    progressingGallery(value) {
      console.log(value)
    },
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.tlPageIn = this.$gsap.timeline()
    this.tlPageOut = this.$gsap.timeline()
  },
  mounted() {
    // navegaçao teclado galeria
    window.addEventListener('keyup', (event) => {
      const key = event.key // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
      if (key === 'ArrowLeft') {
        this.prev()
      } else if (key === 'ArrowRight') {
        this.next()
      } else if (key === 'Escape') {
        this.showGal = false
      }
    })
    // end

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
          x: 50,
          y: 150,
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

    // navegaçao next e prev galeria
    next() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex += 1
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1
      }
    },
    // end
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
  background-image: url('../assets/images/image03.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

div.fecharGal {
  width: 42px;
  height: 42px;
  div.areaHoverBt {
    position: absolute;
    top: -30px;
    left: -26px;
  }
}

div.navGaleria div a img:active {
  transform: scale(1.1);
}
</style>
