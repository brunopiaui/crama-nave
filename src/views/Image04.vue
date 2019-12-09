<template>
  <div class="img">
    <video id="video" autoplay muted loop>
      <source :src="require('@/assets/videos/video01.mp4')" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Image04',
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

    this.$gsap.to(['#nav'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.to('.img', {
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

<style lang="scss" scoped>
.img {
  display: block;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  #video {
    object-fit: cover;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
