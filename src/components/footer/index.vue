<template>
  <footer>
    <a href="javascript:;" v-show="!isEnd" :title="speedTips" @click.prevent="toggleSpeed" v-html="speedSvg"></a>
    <a href="javascript:;" v-show="!isEnd" :title="pauseTips" @click.prevent="togglePause" v-html="pauseSvg"></a>
    <a href="javascript:;" v-show="!isEnd" title="跳过" @click.prevent="skip">
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z"
          fill="#878787" stroke="#878787" stroke-width="3" stroke-linejoin="round" />
      </svg>
    </a>
    <a href="https://github.com/xmxe" title="GitHub" :target="target" v-show="isEnd">
      <svg width="22" height="22" class="icon" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          fill="#878787">
        </path>
      </svg>
    </a>
    <a href="https://gitee.com/xmxe" title="码云" :target="target" v-show="isEnd">
      <svg width="22" height="21" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="991" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path
          d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
          fill="#878787" p-id="992">
        </path>
      </svg>
    </a>
    <a href="https://blog-aok.pages.dev/" title="博客" :target="target" v-show="isEnd">
      <svg width="22" height="22" class="icon" viewBox="0 0 480 542" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"
          fill="#878787" />
      </svg>
    </a>
    <!-- <a href="static/xmxe.html" title="静态简历" :target="target" v-show="isEnd">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="3" stroke="#878787" stroke-width="4" stroke-linejoin="round" />
        <path d="M6 17H42" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 42V17" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a> -->
    <a href="javascript:;" title="微信" v-show="isEnd" @mouseenter="qrcodeShow = !qrcodeShow"
      @mouseleave="qrcodeShow = !qrcodeShow">
      <svg width="24" height="24" class="icon" viewBox="0 0 340 195" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M240.489202,85.4155522 C237.300416,85.1728806 234.070779,85.0488907 230.806619,85.0488907 C172.371237,85.0488907 125,124.78592 125,173.80403 C125,183.912009 127.014329,193.625337 130.724628,202.67696 C127.516696,202.890956 124.273529,203 121,203 C105.109229,203 94.9015748,200.147332 81,195.476497 C77.4345683,194.440025 65.6464559,200.392116 45.6356627,213.332769 C44.1611712,214.065139 42.6748998,213.930026 41.1768484,212.927432 C39.6787971,211.924838 39.2798584,210.395832 39.9800323,208.340415 C45.3636651,190.797986 46.8940027,181.061245 44.5710452,179.130192 C16.157209,160.556795 0,134.05785 0,101.5 C0,45.4430979 54.1735453,0 121,0 C181.301419,0 231.300195,37.0020806 240.489202,85.4155522 Z M81,86 C90.3888407,86 98,78.3888407 98,69 C98,59.6111593 90.3888407,52 81,52 C71.6111593,52 64,59.6111593 64,69 C64,78.3888407 71.6111593,86 81,86 Z M162,86 C171.388841,86 179,78.3888407 179,69 C179,59.6111593 171.388841,52 162,52 C152.611159,52 145,59.6111593 145,69 C145,78.3888407 152.611159,86 162,86 Z"
          fill="#878787">
        </path>
        <path
          d="M235.306619,262.960691 C222.002154,262.960691 213.455848,260.57231 201.816827,256.661677 C198.831688,255.793897 188.962153,260.777254 172.208221,271.611748 C170.97371,272.22492 169.729337,272.111798 168.475102,271.272381 C167.220866,270.432965 166.886856,269.152813 167.473073,267.431926 C171.980492,252.744618 173.261759,244.592583 171.316875,242.975819 C147.527539,227.425339 134,205.239236 134,177.980345 C134,131.046997 179.356518,93 235.306619,93 C291.256719,93 336.613237,131.046997 336.613237,177.980345 C336.613237,224.913694 291.256719,262.960691 235.306619,262.960691 Z M201.816827,165.003051 C209.677585,165.003051 216.049989,158.630648 216.049989,150.76989 C216.049989,142.909132 209.677585,136.536729 201.816827,136.536729 C193.956069,136.536729 187.583666,142.909132 187.583666,150.76989 C187.583666,158.630648 193.956069,165.003051 201.816827,165.003051 Z M269.633655,165.003051 C277.494413,165.003051 283.866816,158.630648 283.866816,150.76989 C283.866816,142.909132 277.494413,136.536729 269.633655,136.536729 C261.772897,136.536729 255.400493,142.909132 255.400493,150.76989 C255.400493,158.630648 261.772897,165.003051 269.633655,165.003051 Z"
          fill="#878787" transform="translate(235.306619, 182.500000) scale(-1, 1) translate(-235.306619, -182.500000) ">
        </path>
      </svg>
    </a>
    <img class="qrcode" src="static/dynamic/xcx.png" v-show="qrcodeShow">
  </footer>
</template>

<script>
const debug = process.env.NODE_ENV !== 'production'

const STATE_RUNNING = 0
const STATE_PAUSED = 1

const speedSvg = [
  '<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0005 27C18.3431 27 14.065 22.6575 14.065 17L14 7L19.0005 11L24.0005 5L29.0005 11L34.0005 7V17C34.0005 22.6575 29.658 27 24.0005 27Z" fill="none" stroke="#878787" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.4862 43.3137C25.0483 41.7516 23.1488 37.3195 19.2436 33.4142C15.3383 29.509 10.9062 27.6095 9.34408 29.1715C7.78199 30.7336 9.68146 35.1658 13.5867 39.0711C17.492 42.9763 21.9241 44.8758 23.4862 43.3137Z" fill="none" stroke="#878787" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.8289 42.9706C26.391 44.5327 30.8231 42.6332 34.7283 38.7279C38.6336 34.8227 40.5331 30.3905 38.971 28.8285C37.4089 27.2664 32.9767 29.1658 29.0715 33.0711C25.1662 36.9763 23.2668 41.4085 24.8289 42.9706Z" fill="none" stroke="#878787" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12L26 24L14 36" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 12V36" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
]
const speedTips = ['自然', '倍速']

const pauseSvg = [
  '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12V36" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 12V36" stroke="#878787" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="#878787" stroke="#878787" stroke-width="3" stroke-linejoin="round"/></svg>'
]
const pauseTips = ['暂停', '继续']

export default {
  name: 'v-footer',
  data() {
    return {
      state: STATE_RUNNING,
      state_speed: debug ? STATE_RUNNING : STATE_PAUSED,
      isEnd: false,
      target: '_blank',
      qrcodeShow: false
    }
  },
  computed: {
    speedSvg() {
      return speedSvg[this.state_speed]
    },
    speedTips() {
      return speedTips[this.state_speed]
    },
    pauseSvg() {
      return pauseSvg[this.state]
    },
    pauseTips() {
      return pauseTips[this.state]
    }
  },
  methods: {
    toggleSpeed() {
      this.state_speed = this.state_speed === STATE_RUNNING ? STATE_PAUSED : STATE_RUNNING
      this.$store.commit('toggleSpeed')
    },
    togglePause() {
      this.state = this.state === STATE_RUNNING ? STATE_PAUSED : STATE_RUNNING
      this.$root.$emit('togglePause', this.state)
    },
    skip() {
      this.$root.$emit('skip')
      this.$root.$emit('togglePause', STATE_RUNNING)
    },
    end() {
      this.isEnd = true
    }
  }
}
</script>

<style lang="stylus">
  footer
    position: absolute
    bottom: 15px
    left: 50%
    transform: translate3d(-50%, 50%, 0)
    .icon
      vertical-align: bottom
    .qrcode
      position: absolute
      bottom: 5px
      animation: move .4s linear 1 normal
      zoom: 35%
    @keyframes move
      0%
        transform: translate(100px, 0)
        opacity: 0
      50%
        transform: translate(50px, 0)
        opacity: .5
      100%
        transform: translate(0, 0)
        opacity: 1
    @media only screen and (max-width: 601px)
      .qrcode
        bottom: 35px
        left: 1px
    @keyframes float
      100%
        transform: translateY(-13px)
        // box-shadow: 0 40px 10px -18px hsla(0, 0%, 0%, .2), 0 40px 16px -12px hsla(0, 0%, 0%, .2)
    a
      display inline-block
      animation: float 1s infinite ease-in-out alternate
      &:nth-of-type(odd)
        animation-delay: .3s
      &:hover
        animation-play-state: paused
        svg
          transform: scale(1.5)
          margin: 0 2px
      svg
        box-reflect: below 2px gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, .5)))
        transition: all 0.3s
        transform-origin: 40% 70%

</style>
