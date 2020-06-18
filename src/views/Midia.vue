<template>
  <div class="img teste">
    <!-- <div v-if="progressing" class="loading">{{ progress }}%</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Midia',
  data() {
    return {
      tl: null,
      showGal: false,
      currentIndex: 0,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
  },
  created() {
    this.tl = this.$gsap.timeline()
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
    // this.$gsap.to(['.top1'], {
    //   duration: 1,
    //   opacity: 1,
    // })
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

    // this.$gsap.to(['.top1'], {
    //   duration: 1,
    //   opacity: 0,
    // })
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
  display: block;
  height: 100%;
  background-image: url('../assets/images/image03.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

div.galeria {
  position: fixed;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div.backGal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #263538;
  }
  div.fotosGaleria {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div.topGaleria {
    position: absolute;
    width: 94vw;
    top: 46px;
    div.fecharGal {
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
  div.bottomGaleria {
    position: absolute;
    bottom: 40px;
    width: 94vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    div.contFotoGaleria {
      width: 50%;
      color: #f3f3f3;
      span {
        font-size: 18px;
        font-weight: 500;
        margin: 0 0 10px 0;
        display: block;
      }
      p {
        font-size: 16px;
        font-weight: 300;
      }
    }
    div.navGaleria {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #f3f3f3;
      div.indNavGal {
        margin: -4px 35px 0 35px;
        font-size: 16px;
        font-weight: 200;
        span {
          font-weight: 500;
        }
      }
    }
  }
}

.fadeGal-enter-active,
.fadeGal-leave-active {
  transition: opacity ease-out 0.3s;
}
.fadeGal-enter, .fadeGal-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  width: 100%;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  transition: all 0.9s ease;
}

.fade-enter,
.fade-leave-to {
  width: 100%;
  visibility: hidden;
  opacity: 0;
}

.img-slide {
  width: 100%;
  height: 100%;
}

.prev,
.next {
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

div.backBottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 220px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.6)),
    to(rgba(0, 0, 0, 0))
  );
}
</style>
