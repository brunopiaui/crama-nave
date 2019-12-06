<template>
  <div class="home">
    <div class="shape">
      <div class="text">
        <div>BIO</div>
        <div>PAISA</div>
        <div>GISMO</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url('../assets/images/img00.jpg');
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
