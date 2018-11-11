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
                <div id="copyright">© 2012 - {{futureYear}} Buff<br/>イルミナティの公式メンバー</div>
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
      currentPage: "welcome",
      pageDescrip: "Welcome to Gang Fight. We've been waiting for you. Now we can begin.",
      futureYear: new Date().getFullYear()+12
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
@import "./css/reset.css"
@import "./css/gfColors.scss"
@import url('https://fonts.googleapis.com/css?family=Montserrat')
@import url('https://fonts.googleapis.com/css?family=Yantramanav')

$lineWidth: .5em

#app
  display: flex
  height: 100%
  justify-content: center
  overflow: hidden

  /* right border */
  #RightBorder
    height: 100%
    #rightBoxContain
      position: absolute
      background: linear-gradient(to right,$sideGradient)
      width: 100vh
      overflow: hidden
      #rightLine
        height: $lineWidth
        background-color: $outrunYellow
        margin: 1em 
        position: absolute;
        top: 0;
        width: calc(100% - 2em)
        &::after
          height: 1.5em
          background-color: $outrunYellow
          width: $lineWidth
          display: block
          content: " "
        &::before
          height: 1.5em
          background-color: $outrunYellow
          width: $lineWidth
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
          color: $white
          font-family: 'Montserrat', sans-serif;
        #lowOfLows
          font-family: 'Yantramanav', sans-serif;
          #leftOfLows
            float: left
            width: calc(100% - (100% - 21.25em))
            color: $white
          #rightOfLows
            float: right
            width: calc(100% - 8.5em)
            font-size: 2.5em
            #rightBar
              height: $lineWidth / 3
              width: 100%
              background-color: $neonBlue
              margin-bottom: .3em
            #copyright
              text-align: right
              font-size: .3em
              color: $white
  /* left border */
  #LeftBorder
    height: 100%
    background: linear-gradient(to bottom,$sideGradient)
    #leftBoxContain
      position: absolute
      width: 100vh
      #leftLine
        height: $lineWidth
        background-color: $outrunYellow
        margin: 1em 
        position: absolute;
        bottom: 0;
        width: calc(100% - 2em)
        &::after
          height: 1.5em
          background-color: $outrunYellow
          width: $lineWidth
          display: block
          content: " "
          transform: translatey($lineWidth * -2);
        &::before
          height: 1.5em
          background-color: $outrunYellow
          width: $lineWidth
          display: block
          content: " "
          transform: translatey($lineWidth * - 2);
          position: absolute
          right: 0
      #leftBoxContents
        margin: 1em
        #fortune
          font-style: italic;
          font-size: 1.5em
          color: white
          margin-top: .25em
          margin-left: 1em
        #leftBoxTopRow
          color: $neonPink
          font-size: 2.5em
          font-weight: 800
          #line
            height: $lineWidth / 3
            background-color: $neonBlue
            display: inline-block
            margin-bottom: $lineWidth / 2
            margin-left: .5em
</style>
