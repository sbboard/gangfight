<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">

    <!-- TOP -->
    <template v-if="isTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">

      </div>
    </template>

    <!-- LEFT -->
    <template v-if="isTaller == 'vh'">
      <div id="LeftBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
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

    <!-- MIDDLE -->
    <temp :style="{width: '100'+isTaller, height: '100'+isTaller}"/>
    
    <!-- RIGHT -->
    <template v-if="isTaller == 'vh'">
      <div id="RightBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
        <div id="rightBoxContain" :style="{height: (windowWidth - windowHeight) / 2 + 'px',
                                          transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          transformOrigin: 'left bottom'
                                          }">
          <div id="bottomSlap">
            <div id="pageTitle">{{currentPage}}</div>
            <div id="lowOfLows">
              <div id="leftOfLows">{{pageDescrip}}</div>
              <div id="rightOfLows">
                <div id="rightBar"></div>
                <div id="copyright">© 2012 - 2030 Buff<br/>イルミナティの公式メンバー</div>
              </div>
            </div>
          </div>
          <div id="rightLine"></div>
        </div>
      </div>
    </template>

    <!-- BOTTOM -->
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
      fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      currentPage: "home",
      pageDescrip: "Ah yes, the warm summer breeze. lorem lorem lorem baby okay dude."
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

  /* right border */
  #RightBorder
    height: 100%
    background-color: green
    #rightBoxContain
      position: absolute
      background-color: #3A0D07
      width: 100vh
      #rightLine
        height: .75em
        background-color: #F7941D
        margin: 1em 
        position: absolute;
        top: 0;
        width: calc(100% - 2em)
        &::after
          height: 1.5em
          background-color: #F7941D
          width: .75em
          display: block
          content: " "
        &::before
          height: 1.5em
          background-color: #F7941D
          width: .75em
          display: block
          content: " "
          position: absolute
          right: 0
      #bottomSlap
        bottom: 0
        margin: 1em
        width: calc(100vh - 2em)
        position: absolute
        #pageTitle
          text-transform: capitalize
          font-size: 5em
          color: #EE6E63
        #lowOfLows
          #leftOfLows
            float: left
            width: calc(100% - (100% - 21.25em))
            color: #FAF5B3
          #rightOfLows
            float: right
            width: calc(100% - 8.5em)
            font-size: 2.5em
            #rightBar
              height: .25em
              width: 100%
              background-color: #F7941D
              margin-bottom: .3em
            #copyright
              text-align: right
              font-size: .3em
              color: #FAF5B3
  /* left border */
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
          margin-top: .25em
          margin-left: 1em
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
