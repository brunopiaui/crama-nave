<template>
  <div class="img"></div>
</template>

<script>
export default {
  name: 'Image01',
}
</script>

<style lang="scss" scoped>
.img {
  display: block;
  height: 100%;
  background-image: url('../assets/images/img01.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
