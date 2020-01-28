<template>
  <div
    id="app"
    :class="[nextBackground.type === 'image' ? 'image' : 'video']"
    :style="{ backgroundImage: `url(${nextBackground.url})` }"
  >
    <div class="backTop"></div>
    <header class="top">
      <div class="logo">
        <p>logo</p>
      </div>
      <nav>
        <router-link to="/">Home</router-link>|
        <router-link to="/image01">Image01</router-link>|
        <router-link to="/image02">Image02</router-link>|
        <router-link to="/image03">Image03</router-link>|
        <router-link to="/image04">Image04</router-link>
      </nav>
      <div class="hamburguer">
        <p>menu hamburguer</p>
      </div>
    </header>
    <router-view class="router" />
    <footer class="bottom">
      <div class="share">
        <div>Contato.</div>
        <div class="fb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.444"
            height="23"
            viewBox="0 0 12.444 23"
          >
            <path
              d="M3.474,12.979H3.221q-1.311,0-2.622,0c-.428,0-.594-.166-.595-.592q0-1.762,0-3.525c0-.43.176-.6.611-.6H3.474V5.732a6.311,6.311,0,0,1,.784-3.238A4.77,4.77,0,0,1,6.826.359a6.348,6.348,0,0,1,2.2-.366q1.415,0,2.83,0c.407,0,.588.178.589.585q0,1.64,0,3.28c0,.413-.173.581-.585.586-.773.008-1.547,0-2.319.034a1.083,1.083,0,0,0-1.024.556,1.607,1.607,0,0,0-.17.648c-.019.847-.008,1.7-.008,2.576h3.347c.446,0,.617.169.617.613q0,1.753,0,3.506c0,.442-.159.6-.6.6H8.332v9.354c0,.507-.155.661-.665.661H4.1c-.465,0-.627-.16-.627-.62q0-4.562,0-9.123Z"
              fill="#FFF"
            />
          </svg>
        </div>
        <div class="inst">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22.993"
            viewBox="0 0 23 22.993"
          >
            <path
              d="M0,16.959V6.041c.008-.069.016-.138.023-.208A6.194,6.194,0,0,1,1.279,2.564,6.142,6.142,0,0,1,6.27.017C9.7-.017,13.134.008,16.565.007a6.086,6.086,0,0,1,3.124.8,6.168,6.168,0,0,1,3.286,5.516c.046,3.46.016,6.92.006,10.381a6.34,6.34,0,0,1-.125,1.168,6.117,6.117,0,0,1-1.5,3,6.3,6.3,0,0,1-3.917,2.068c-.161.022-.322.038-.483.056H6.034a.761.761,0,0,0-.093-.016,6.088,6.088,0,0,1-1.334-.236,6.4,6.4,0,0,1-4.551-5.3C.033,17.282.019,17.12,0,16.959ZM11.494,5.118a6.383,6.383,0,1,0,6.384,6.387A6.376,6.376,0,0,0,11.494,5.118Zm6.384-1.277A1.278,1.278,0,1,0,19.155,2.56,1.284,1.284,0,0,0,17.878,3.841Z"
              transform="translate(0 0.001)"
              fill="#FFF"
            />
            <path
              d="M255.4,252.02a3.648,3.648,0,1,1-3.649,3.647A3.648,3.648,0,0,1,255.4,252.02Z"
              transform="translate(-243.905 -244.167)"
              fill="#FFF"
            />
          </svg>
        </div>
        <div class="mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.738"
            height="22.99"
            viewBox="0 0 28.738 22.99"
          >
            <path
              d="M27.864,4H4.874A2.87,2.87,0,0,0,2.014,6.874L2,24.116A2.882,2.882,0,0,0,4.874,26.99h22.99a2.882,2.882,0,0,0,2.874-2.874V6.874A2.882,2.882,0,0,0,27.864,4Zm0,5.747L16.369,16.932,4.874,9.747V6.874l11.5,7.184L27.864,6.874Z"
              transform="translate(-2 -4)"
              fill="#FFF"
            />
          </svg>
        </div>
      </div>
      <div class="ind">indicador</div>
      <div class="sound">som</div>
    </footer> </div
  ><!-- app -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Preload from 'preload-it-extended-5'

const preload = Preload()

export default {
  name: 'App',
  data() {
    return {
      tl: null,
    }
  },
  computed: {
    ...mapGetters(['loading', 'nextBackground', 'progressing', 'progress']),
  },
  created() {
    this.tl = this.$gsap.timeline()
    this.startProgressingAction()
  },
  beforeMount() {
    preload.fetch([
      {
        url: require('@/assets/images/image00.jpg'),
        meta: { type: 'image', name: 'image00' },
      },
      {
        url: require('@/assets/images/image01.jpg'),
        meta: { type: 'image', name: 'image01' },
      },
      {
        url: require('@/assets/images/image02.jpg'),
        meta: { type: 'image', name: 'image02' },
      },
      {
        url: require('@/assets/images/image03.jpg'),
        meta: { type: 'image', name: 'image03' },
      },
      {
        url: require('@/assets/videos/video01.mp4'),
        meta: { type: 'video', name: 'video01' },
      },
      {
        url: require('@/assets/images/image04.jpg'),
        meta: { type: 'video', name: 'image04' },
      },
    ])
    preload.onfetched = (item) => {
      this.addToBackgroundsAction({
        name: item.meta.name,
        type: item.meta.type,
        url: item.blobUrl,
      })
    }
    preload.onprogress = (event) => {
      this.setProgressAction(event.progress)
    }
  },
  methods: {
    ...mapActions([
      'startLoadingAction',
      'stopLoadingAction',
      'addToBackgroundsAction',
      'startProgressingAction',
      'stopProgressingAction',
      'setProgressAction',
    ]),
  },
}
</script>

<style lang="scss">
$base-color: #ffffff;
#app {
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  color: $base-color;
  // text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  div.backTop {
    position: fixed;
    width: 100%;
    height: 430px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.6)),
      to(rgba(0, 0, 0, 0))
    );
    z-index: 998;
  }

  header.top {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94%;
    padding: 60px 3% 0 3%;
    z-index: 999;

    a {
      font-weight: bold;
      color: $base-color;
      text-decoration: none;
    }
  }

  footer.bottom {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94%;
    padding: 0 3% 35px 3%;
    z-index: 999;

    div.share {
      display: flex;
      flex-direction: row;
      align-items: center;
      div.fb,
      div.inst,
      div.mail {
        padding: 0 12px 0 12px;
      }
    }
    div.ind {
      background-color: aqua;
    }
    div.sound {
      background-color: blue;
    }
  }

  .router {
    z-index: 5;
  }
}
</style>
