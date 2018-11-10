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
                                          //transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          //transformOrigin: 'left bottom'
                                          }">
            <div id="leftBoxContents">
              <div id="leftBoxTopRow">
                <span>ギャングファイト</span><div :style="{width: 'calc(100% - 8em)'}" id="line"></div>
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
    background-color: green
    #leftBoxContain
      position: absolute
      background-color: rgba(44,44,44,.5)
      width: 100vh
      #leftLine
        height: 5px
        background-color: red
        margin: 1em 
        position: absolute;
        bottom: 0;
        width: calc(100% - 2em);
      #leftBoxContents
        margin: 1em
        background-color: yellow
        #fortune
          font-style: italic;
        #leftBoxTopRow
          font-size: 2.5em
          #line
            height: .25em
            background-color: red
            display: inline-block
            margin-bottom: .2em
</style>
