<template>
  <div class="home">
    <div class="shape">
      <div class="text">
        <div class="textLogo">BIO</div>
        <div class="textLogo">PAISA</div>
        <div class="textLogo">GISMO</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      tl: null,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgroundImages']),
  },
  created() {
    this.tl = this.$gsap.timeline()
  },
  mounted() {
    this.$gsap.to(['#nav'], {
      duration: 1,
      opacity: 1,
    })
    this.tl.to('.shape', {
      duration: 1,
      opacity: 1,
    })
    this.tl.from('.textLogo', {
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
      'setNextBackgroundImageAction',
    ]),
  },
  beforeRouteLeave(to, from, next) {
    let nextBackgroundImage = this.backgroundImages(to.meta.image)
    this.setNextBackgroundImageAction(nextBackgroundImage)

    this.$gsap.to(['#nav', '.shape'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.to('.home', {
      duration: 1,
      opacity: 0,
      scale: 1.5,
      delay: 1,
      onComplete: () => {
        next()
      },
    })
  },
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url('../assets/images/image00.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .shape {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 256px;
    background: #fff;
    border: 5px solid #333;
    border-radius: 51% 49% 24% 76% / 19% 27% 73% 81%;
    opacity: 0;
    animation: logo 20s ease-in-out alternate both infinite;
    .text {
      font-family: 'Ubuntu', sans-serif;
      font-size: 40px;
      color: #333;
      letter-spacing: 0.1em;
    }
  }
}

@keyframes logo {
  20% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  40% {
    border-radius: 87% 13% 65% 35% / 51% 55% 45% 49%;
  }
  60% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 74% 26% 24% 76% / 42% 52% 48% 58%;
  }
  100% {
    border-radius: 44% 56% 11% 89% / 57% 81% 19% 43%;
  }
}
</style>
