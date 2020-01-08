<template>
  <div class="img">
    <div v-if="progressing" class="loading">{{ progress }}%</div></div
  >
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Image03',
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
    this.$gsap.to(['#nav'], {
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

    this.$gsap.to(['#nav'], {
      duration: 1,
      opacity: 0,
    })
    this.tl.to('.img', {
      duration: 1,
      opacity: 0,
      scale: 1.5,
      delay: 0,
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
</style>
