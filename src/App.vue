<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">
    <template v-if="isTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">

      </div>
    </template>
    <template v-if="isTaller == 'vh'">
      <div id="LeftBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'
                                    }">
        <div id="leftBoxContain" :style="{height: (windowWidth - windowHeight) / 2 + 'px',
                                          transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          transformOrigin: 'left bottom'
                                          }">
            <div id="leftBoxContents">
              <div id="leftBoxTopRow">
                <span>ギャングファイト</span><div :style="{width: 'calc(100% - 8.5em)'}" id="line"></div>
              </div>
              <div id="fortune">"{{fortune}}"</div>
            </div>
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
  #LeftBorder
    height: 100%
    background-color: #3A0D07
    #leftBoxContain
      position: absolute
      width: 100vh
      #leftLine
        height: .75em
        background-color: #F7941D
        margin: 1em 
        position: absolute;
        bottom: 0;
        width: calc(100% - 2em)
        &::after
          height: 1.5em
          background-color: #F7941D
          width: .75em
          display: block
          content: " "
          transform: translatey(-.75em);
        &::before
          height: 1.5em
          background-color: #F7941D
          width: .75em
          display: block
          content: " "
          transform: translatey(-.75em);
          position: absolute
          right: 0
      #leftBoxContents
        margin: 1em
        #fortune
          font-style: italic;
          font-size: 1.5em
          color: #FAF5B3
        #leftBoxTopRow
          color: #EE6E63
          font-size: 2.5em
          font-weight: 800
          #line
            height: .25em
            background-color: #F7941D
            display: inline-block
            margin-bottom: .2em
            margin-left: .5em
</style>
