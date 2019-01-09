<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">

    <!-- TOP -->
    <template v-if="isTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px',
                                   backgroundImage: 'url(' + 'assets/' + this.$store.getters.assetFolder + '/sidebar/topBrdrBg.gif)'}">
        <div ref="wordBox" class="topLogoBox" :style="{bottom: logoBoxBottom}">
        <span id="topWords">gang fight</span>
        <span id="bottomWords">ギャングファイト</span>
        </div>
      </div>
    </template>

    <!-- LEFT -->
    <template v-if="isTaller == 'vh'">
      <div id="LeftBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
        <div id="leftBoxContain" :style="{height: (windowWidth - windowHeight) / 2 + 'px',
                                          transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          transformOrigin: 'left bottom'
                                          }">
          <div class="grid-noGutter" style="background-color:blue">
            <div class="col-10">
              <div class="col-12 heightFifty sideLogo"><span>ギャングファイト</span><span class="leftLine"></span></div>
              <div class="col-12 heightFifty fortune">{{fortune}}</div>
            </div>
            <div class="col-2 barcodeBox" style="background-color:red"><img class="barcode" :src="'assets/' + this.$store.getters.assetFolder + '/sidebar/barcode.png'"/></div>
          </div>
          <div class="grid-noGutter farLeft" style="background-color:green">
          <div class="col-3"><img class="profilePic" :src="'assets/global/sidebar/photo.png'"/></div>
          <div class="col-2 nameBlock">Buffum</div>
          <div class="col-2"><img class="randoBlock" :src="'assets/' + this.$store.getters.assetFolder + '/sidebar/2.jpg'"/></div>
          <div class="col-2"><img class="randoBlock" :src="'assets/' + this.$store.getters.assetFolder + '/sidebar/5.jpg'"/></div>
          <div class="col-3 timeBox">
            <span class="date">1/2/19</span>
            <span class="time">5:30PM</span>
          </div>
          </div>
        </div>
      </div>
    </template>

    <!-- MIDDLE -->
    <navigation/>
    <router-view v-if="isTaller" :style="{width: '100'+isTaller, height: '100'+isTaller}"/>
    
    <!-- RIGHT -->
    <template v-if="isTaller == 'vh'">
      <div id="RightBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
        <div id="rightBoxContain" :style="{height: (windowWidth - windowHeight) / 2 + 'px',
                                          transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          transformOrigin: 'left bottom'
                                          }">
          <div class="rightBox">
          <div class="grid-noGutter leftInnerBox" style="background-color:red">
          <div class="col-2 descripBox" style="background-color: yellow"><span>{{pageList[this.$router.currentRoute.name].description}}</span></div>
          <div class="col-1 stageList"><span>stage 2 act 1</span></div>
          <div class="col-2">
            <div class="col-6 topRightBlock iconBlock" style="background-color: blue"><span>O</span></div>
            <div class="col-6 topRightBlock onlineNowBlock" style="background-color: green"><span class="onlineNow">Online Now</span><span class="onlineNo">3</span></div>
          </div>
          <div class="col-4 lastUpdatePic"><img :src="'http://gang-fight.com/projects/thumbs/xeno.jpg'"/></div>
          <div class="col-2">
            <div class="col-6 adHere"><img class="profilePic" :src="'assets/global/sidebar/n64.jpg'"/></div>
            <div class="col-6 adHere"><img class="profilePic" :src="'assets/global/sidebar/playstation.png'"/></div>
          </div>
          <div class="col-1 ipFlag"><span>ip address and flag</span></div>
          </div>
          <div class="grid-noGutter" style="background-color:blue">
          <div class="col-8 routeName">{{this.$router.currentRoute.name}}</div>
          <div class="col-4 copyRight"><span>© 2012 - {{futureYear}} Buff<br/>イルミナティの公式メンバー</span></div>
          </div>
          </div>
        </div>
      </div>
    </template>

    <!-- BOTTOM -->
    <template v-if="isTaller == 'vw'">
      <div id="BottomBorder" style="background-color: yellow" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">
      <div id="grids">
        <div class="grid-noGutter">
          <div class="col-8 bottomRouteName" style="background-color:red"><span>{{this.$router.currentRoute.name}}</span></div>
          <div class="col-4 bottomRight" style="background-color:blue"><span>© 2012 - {{futureYear}} Buff<br/>イルミナティの公式メンバー</span></div>
        </div>
        <div class="grid-noGutter">
          <div class="col-12 personInfo" style="background-color:green">Buffum 10/15/15 3:75PM</div>
        </div>
        <div class="grid-noGutter">
          <div class="col-2 bottomBar" style="background-color:pink"><img :src="'assets/' + this.$store.getters.assetFolder + '/sidebar/barcodeHori.png'"/></div>
          <div class="col-9" style="background-color:blue"></div>
          <div class="col-1 firstEd"><img src="assets/global/sidebar/1sted.png"/></div>
        </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import navigation from './components/nav/navHome.vue'
import pagelist from './pageDescriptions.json'

export default {
  name: 'app',
  components: {
    navigation
  },
  data(){
    return{
      windowHeight: 0,
      windowWidth: 0,
      isTaller: false,
      flexDirect: "row",
      fortune: this.$store.getters.getFortune,
      futureYear: new Date().getFullYear()+12,
      pageList: pagelist,
      boxHeight: 0
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
  computed: {
    logoBoxBottom(){
      const windowSize = (this.windowHeight - this.windowWidth) / 2
      if(((windowSize - this.boxHeight) / 2) > 0){
        return (windowSize - this.boxHeight) / 2 + "px"
      }
      else{
        return "0px"
      }
    }
  },
  watch: {
    windowHeight: function(){
      this.changeSize()
    },
    windowWidth:function(){
      this.changeSize()
    },
    isTaller: function(){

    },
    //$route: function(to){
      //this.$store.commit('changePage',to.name)
    //}
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
        this.boxHeight = this.$refs.wordBox.clientHeight
      });
    })
  },
}
</script>

<style lang="sass" scoped>
@import "./css/reset.css"
@import "./css/gfColors.scss"
@import "./css/gridlex.min.css"
@import url('https://fonts.googleapis.com/css?family=Montserrat')
@import url('https://fonts.googleapis.com/css?family=Yantramanav')

$lineWidth: .5em

#BottomBorder
  #grids
  .bottomRouteName
    font-size: 5.5vh
  .bottomRight
    text-align: right
    span
      padding-right: 1em
      display: block
      font-size: 2.5vw
  .firstEd
    img
      width: 100%
  .bottomBar
    img
      width: 100%
  .personInfo
    text-align: center
    letter-spacing: .25em
#TopBorder
  background-color: red
  text-align: center
  display: flex
  flex-direction: column
  align-content: center
  justify-content: center
  color: red
  position: relative
  //color: white
  .topLogoBox
    margin: 0 auto
    display: block
    width: fit-content
    border: 2px solid red
    //border: 2px solid white
    padding: 1em
    position: absolute
    bottom: 0
span#topWords
  display:block !important
  font-size: 9vw
span#bottomWords
  display:block !important
  font-size: 3vw
  padding-top: .5em
#app
  display: flex
  height: 100%
  justify-content: center
  overflow: hidden
  /* right border */
  #RightBorder
    height: 100%
    //background-color: red
    #rightBoxContain
      position: absolute
      //background: linear-gradient(to right,$sideGradient)
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
    //background: linear-gradient(to bottom,$sideGradient)
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
.barcodeBox
  align-self: center
  text-align: center
  .barcode
    width: 13vh
.heightFifty
  height: 50%
  border: .5px solid blue
.sideLogo
  font-size: 8vh
  display: flex
  align-content: center
  padding: 0
  align-self: center
  span
    padding-top: .25em
  .leftLine
    height: .5vh
    display: inline-block
    width: 100px
    background-color: red
    align-self: center
    margin-bottom: -.4em
    width: 18vh
    padding: 0
.fortune
  padding: 0
  padding-top: .25em
  font-size: 3vh
  margin-left: .75em
.randoBlock
  width: 100%
  transform: rotate(-90deg)
.farLeft
  line-height: 0
.timeBox
  line-height: 1
  display: flex
  flex-direction: column
  justify-content: center
  span
    display: block
    font-size: 3.5vh
    text-align: center
    letter-spacing: 1vh
.profilePic    
  width: 25vh
  height: 100%
.nameBlock
  line-height: 1
  font-size: 6vh
  word-break: break-all
  transform: rotate(-90deg)
  align-self: center
.rightBox
  position: absolute
  bottom: 0
  .routeName
    font-size: 8vh
    padding-left: .5em
  .copyRight
    text-align: right
    display: flex
    justify-content: flex-end
    font-size: 1.75vh
    span
      align-self: flex-end
      justify-self: baseline
      padding-right: 1em
      padding-bottom: 1em
  .descripBox
    display: block
    position: relative
    line-height: 1
    span
      display: block    
      transform: rotate(-90deg)
      font-size: 1.75vh
      position: absolute
      left: -10.5vh
      bottom: 15vh
      width: 32vh
.adHere
  padding: 0
  line-height: 0
  img
    width: 100%
.lastUpdatePic
  img
    width: 100%
    filter: saturate(5) contrast(2.5) hue-rotate(151deg)
    transform: rotate(-90deg)
.topRightBlock
  height: 16.666666666vh
  padding: 0
.onlineNowBlock
  position: relative
  line-height: 1
  .onlineNow
    transform-origin: left
    position: absolute
    font-size: 4vh
    bottom: -3vh
    left: 5vh
    transform: rotate(-90deg)
    display: block
  .onlineNo
    transform: rotate(-90deg)
    position: absolute
    top: -2vh
    left: 9vh
    font-size: 10vh
.iconBlock
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  span
    display: block
    transform: rotate(-90deg)
    font-size: 15vh
    text-align: center
.leftInnerBox
  line-height: 0
.stageList
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  line-height: 1
  flex-direction: column
  span
    display: block
    width: 32vh
    transform: rotate(-90deg)
    font-size: 5vh
    text-align: center
.ipFlag
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  line-height: 1
  flex-direction: column
  span
    display: block
    width: 32vh
    transform: rotate(-90deg)
    font-size: 3vh
    text-align: center
</style>
