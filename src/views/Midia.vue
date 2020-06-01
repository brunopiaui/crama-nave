<template>
  <div class="img teste">
    <div v-if="progressing" class="loading">{{ progress }}%</div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="img-slide" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" href="#" @click="prev">&#10094;</a>
    <a class="next" href="#" @click="next">&#10095;</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Midia',
  data() {
    return {
      tl: null,
      currentIndex: 0,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
    slides() {
      return [
        {
          midia: this.backgrounds('image00'),
        },
        {
          midia: this.backgrounds('image01'),
        },
        {
          midia: this.backgrounds('image04'),
        },
      ]
    },
    currentImg() {
      const data = this.slides[Math.abs(this.currentIndex) % this.slides.length]
      return data && data.midia ? data.midia.url : null
    },
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
      this.currentIndex += 1
    },
    prev() {
      this.currentIndex -= 1
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

.teste {
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
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    border-radius: 0 4px 4px 0;
    transition: 0.7s ease;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
</style>
