<template>
  <div class="img"></div>
</template>

<script>
export default {
  name: 'Image02',
  data() {
    return {
      tl: null,
    }
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
  beforeRouteLeave(to, from, next) {
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
  background-image: url('../assets/images/img02.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
