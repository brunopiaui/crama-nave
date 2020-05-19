<template>
  <div class="img">
    <div v-if="progressing" class="loading">{{ progress }}%</div>
    <video id="video" autoplay muted loop>
      <source :src="video" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Bioviva',
  data() {
    return {
      tl: null,
      video: null,
    }
  },
  computed: {
    ...mapGetters(['loading', 'backgrounds', 'progressing', 'progress']),
  },
  created() {
    const video = this.backgrounds('video01')
    this.video = video.url

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
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  #video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
