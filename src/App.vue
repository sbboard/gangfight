<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">
    <template v-if="isTaller == 'vw'">
      <TopBorder :style="{height: (windowHeight - windowWidth) / 2 + 'px'}"/>
    </template>
    <template v-if="isTaller == 'vh'">
      <LeftBorder :style="{width: (windowWidth - windowHeight) / 2 + 'px'}"/>
    </template>
    <temp :style="{width: '100'+isTaller, height: '100'+isTaller}"/>
    <template v-if="isTaller == 'vh'">
      <RightBorder :style="{width: (windowWidth - windowHeight) / 2 + 'px'}"/>
    </template>
    <template v-if="isTaller == 'vw'">
      <BottomBorder :style="{height: (windowHeight - windowWidth) / 2 + 'px'}"/>
    </template>
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
      isTaller: false,
      flexDirect: "row" 
    }
  },
  methods:{
    changeSize(){
      this.isTaller = (this.windowHeight > this.windowWidth) ? "vw":"vh"
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
#app
  display: flex
  height: 100%
  justify-content: center
  overflow: hidden
</style>
