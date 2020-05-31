<template>
  <div class="img">
    <div v-if="progressing" class="loading">{{ progress }}%</div>
    <div class="carousel-view">
      <transition-group class="carousel" tag="div">
        <div v-for="slide in slides" :key="slide.id" class="slide">
          <h4> {{ slide.title }} </h4>
        </div>
      </transition-group>
      <div class="carousel-controls">
        <button class="carousel-controls__button" @click="previous"
          >prev</button
        >
        <button class="carousel-controls__button" @click="next">next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Midia',
  data() {
    return {
      tl: null,
      slides: [
        {
          title: 'I am Slide A',
          id: 1,
        },
        {
          title: 'I am Slide B',
          id: 2,
        },
        {
          title: 'I am Slide C',
          id: 3,
        },
        {
          title: 'I am Slide D',
          id: 4,
        },
        {
          title: 'I am Slide E',
          id: 5,
        },
      ],
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
    this.$gsap.to(['.top1'], {
      duration: 1,
      opacity: 1,
    })
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'setNextBackgroundAction',
      'stopProgressingAction',
    ]),
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
  },
  beforeRouteLeave(to, from, next) {
    let nextBackground = this.backgrounds(to.meta.image)
    this.setNextBackgroundAction(nextBackground)

    this.$gsap.to(['.top1'], {
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
  display: block;
  height: 100%;
  background-image: url('../assets/images/image03.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24em;
  min-height: 25em;
  overflow: hidden;
}

.slide {
  display: flex;
  flex: 0 0 20em;
  align-items: center;
  justify-content: center;
  height: 20em;
  margin: 1em;
  border: 0.1em dashed #000;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.slide:first-of-type {
  opacity: 0;
}

.slide:last-of-type {
  opacity: 0;
}
</style>
