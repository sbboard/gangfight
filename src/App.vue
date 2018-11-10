<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">
    <template v-if="isTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">

      </div>
    </template>
    <template v-if="isTaller == 'vh'">
      <div id="LeftBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
        <div id="boxContain">
            <span>ギャングファイト</span>
            <div id="line"></div>
            <div id="fortune">{{fortune}}</div>
            <div id="leftLine"></div>
        </div>
      </div>
    </template>
    <temp :style="{width: '100'+isTaller, height: '100'+isTaller}"/>
    <template v-if="isTaller == 'vh'">
      <div id="RightBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">

      </div>
    </template>
    <template v-if="isTaller == 'vw'">
      <div id="BottomBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">

      </div>
    </template>
  </div>
</template>

<script>
import Temp from './components/screen/temp.vue'

export default {
  name: 'app',
  components: {
    Temp
  },
  data(){
    return{
      windowHeight: 0,
      windowWidth: 0,
      isTaller: false,
      flexDirect: "row",
      fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
