<template>
  <div id="app">
    <temp :style="{width: '100'+isTaller, height: '100'+isTaller}"/>
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
      windowWidth: 0,
      isTaller: false
    }
  },
  methods:{
    changeSize(){
      this.isTaller = (this.windowHeight > this.windowWidth) ? "vw":"vh"
      console.log(this.isTaller)
    }
  },
  created(){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
  },
  watch: {
    windowHeight: function(){
      this.changeSize()
    },
    windowWidth:function(){
      this.changeSize()
    },
    isTaller: function(){

    }
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

<style lang="sass" scoped>
@import "./css/reset.css";
</style>
