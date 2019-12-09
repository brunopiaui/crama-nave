<template>
  <div class="img"></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Image01',
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
  background-image: url('../assets/images/image01.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
