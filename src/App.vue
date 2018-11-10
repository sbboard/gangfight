<template>
  <div id="app">
    {{windowWidth}} x {{windowHeight}}
    <temp/>
  </div>
</template>

<script>
import Temp from './components/screen/temp.vue'
import BottomBorder from './components/borders/bottom.vue'
import LeftBorder from './components/borders/left.vue'
import RightBorder from './components/borders/right.vue'
import TopBorder from './components/borders/top.vue'

export default {
  name: 'app',
  components: {
    Temp,
    BottomBorder,
    LeftBorder,
    RightBorder,
    TopBorder
  },
  data(){
    return{
      windowHeight: 0,
      windowWidth: 0
    }
  },
  created(){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
      });
    })
  },
}
</script>

<style>

</style>
