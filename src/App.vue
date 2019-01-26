<template>
  <div id="app" :style="{flexDirection: (isTaller == 'vh')?'row':'column'}">

    <!-- TOP -->
    <template v-if="isTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px',
                                   backgroundImage: 'url(' + 'assets/' + this.$store.getters.assetFolder + '/sidebar/tempTop.gif)'}">
        <div ref="wordBox" class="topLogoBox" :style="{bottom: logoBoxBottom,
        backgroundImage: 'url(' + 'assets/' + this.$store.getters.assetFolder + '/sidebar/tempLogoBG.jpg)'}">
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
          <div class="grid gridPadding">
            <div class="col-10 pinkNeonBlock">
              <div class="col-12 heightFifty sideLogo"><div><span>ギ</span><span>ャ</span><span>ン</span><span>グ</span><span>フ</span><span>ァ</span><span>イ</span><span>ト</span></div><span class="leftLine"></span></div>
              <div class="col-12 heightFifty fortune">"{{fortune}}"</div>
            </div>
            <div class="col-2"></div>
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
          <div ref="rightBox" class="rightBox">
          <div class="grid-noGutter leftInnerBox">
          <div class="col-2 descripBox"><div>{{pageList[this.$router.currentRoute.name].description}}<span class="blink">█</span></div></div>
          <div class="col-1 stageList"><div><span class="stageOne">stage 2</span><span class="stageTwo"> act 1</span></div></div>
          <div class="col-2">
            <div class="col-6 topRightBlock iconBlock"><span>O</span></div>
            <div class="col-6 topRightBlock onlineNowBlock"><span class="onlineNow">Online Now</span><span class="onlineNo">3</span></div>
          </div>
          <div class="col-4 lastUpdatePic"><img :src="'http://gang-fight.com/projects/thumbs/xeno.jpg'"/></div>
          <div class="col-2">
            <div class="col-6 adHere"><img class="profilePic" :src="'assets/global/sidebar/n64.jpg'"/></div>
            <div class="col-6 adHere"><img class="profilePic" :src="'assets/global/sidebar/playstation.png'"/></div>
          </div>
          <div class="col-1 ipFlag"><span>107.188.145.8</span></div>
          </div>
          <div class="grid-noGutter">
          <div class="col-8 routeName">{{this.$router.currentRoute.name}}</div>
          <div class="col-4 copyRight"><div><span class="english">© 2012 - {{futureYear}} Buff</span><br/><span class="japanese">イルミナティの公式メンバー</span></div></div>
          </div>
          </div>
        </div>
      </div>
    </template>

    <!-- BOTTOM -->
    <template v-if="isTaller == 'vw'">
      <div id="BottomBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">
      <div id="grids">
        <div class="grid">
          <div class="col-8 bottomRouteName"><span>{{this.$router.currentRoute.name}}</span></div>
          <div class="col-4 bottomRight"><div><span class="bottomEng">© 2012 - {{futureYear}} Buff</span><br/><span class="bottomJP">イルミナティの公式メンバー</span></div></div>
        </div>
        <div class="grid">
          <div class="col-12 personInfo">10/15/15 3:75PM</div>
        </div>
        <div class="grid rainbowRoad">
          <div class="col-2 bottomBar"><img :src="'assets/' + this.$store.getters.assetFolder + '/sidebar/barcodeHori.png'"/></div>
          <div class="col-9 bottomNamebar">BUFFUM</div>
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
      boxHeight: 0,
      randoOne: 1,
      randoTwo: 2
    }
  },
  methods:{
    changeSize(){
      this.isTaller = (this.windowHeight > this.windowWidth) ? "vw":"vh"
    },
    getLogoHeight(){
      const logoBox = this.$refs.wordBox
      if(logoBox != null){
        this.boxHeight = logoBox.clientHeight
      }
    }
  },
  created(){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    this.$store.commit('setAsset', [dd,mm,yyyy])

    //generate rando Nos for sidebar imgs
    this.randoOne = Math.floor(Math.random() * 10) + 1
    this.randoTwo = Math.floor(Math.random() * 10) + 1
    if(this.randoOne == this.randoTwo){
      if(this.randoOne == 10){
        this.randoTwo = 2
      }
      else{
        this.randoTwo += 1
      }
    }
  },
  computed: {
    logoBoxBottom(){
      const windowSize = (this.windowHeight - this.windowWidth) / 2
      if(((windowSize - this.boxHeight) / 2) > 10){
        return (windowSize - this.boxHeight) / 2 + "px"
      }
      else{
        return "10px"
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
      this.getLogoHeight()
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
        this.getLogoHeight()
      });
    })
  },
}
</script>

<style lang="sass" scoped>
@import "./css/reset.css"
@import "./css/gangColors.sass"
@import "./css/gangFonts.sass"
@import "./css/gridlex.min.css"
@import url('https://fonts.googleapis.com/css?family=Montserrat')
@import url('https://fonts.googleapis.com/css?family=Yantramanav')

$lineWidth: .5em
$sideImgOpacity: .7

#BottomBorder
  background-image: url("/assets/global/sidebar/tempTop.jpg")
  background-size: 100% auto
  background-repeat: no-repeat
  background-position: top
  #grids
  .bottomRouteName
    font-size: 9vw
    background-color: #fcfb07
    color: #700123
    text-shadow: 0px 0px 8px #c56508
    font-family: Montserrat
    padding-left: .25em
    border-right: .4em double $neonBlack
  .bottomRight
    text-align: right
    padding-top: .5em
    background-color: #7bf7d3
    div
      padding-right: 1em
      display: block
      font-size: 2.5vw
      .bottomEng
        font-family: Yantramanav
        text-transform: uppercase
        font-weight: 800
      .bottomJP
        font-family: Illuminati
  .firstEd
    display: flex
    flex-direction: column
    justify-content: center
    text-align: left
    img
      width: 85%
  .bottomBar
    padding: .25em 0
    background-color: white
    img
      width: 100%
  .personInfo
    padding: .25em 0
    font-size: 3.25vw
    text-align: center
    letter-spacing: .25em
    //background-color: $neonBlack
    font-weight: 800
    border: 2px solid #f25100
    color: #f25100
    text-transform: uppercase
    font-family: Montserrat
#TopBorder
  text-align: center
  display: flex
  flex-direction: column
  align-content: center
  justify-content: center
  color: white
  position: relative
  background-size: 100% auto
  background-repeat: no-repeat
  background-position: bottom
  //color: white
  .topLogoBox
    margin: 0 auto
    display: block
    width: fit-content
    border: 2px solid white
    left: 0
    background-size: 100% auto
    background-position: center
    right: 0
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
    background-image: url("/assets/global/sidebar/tempSide.jpg")
    background-size: auto 100%
    #rightBoxContain
      position: absolute
      width: 100vh
      overflow: hidden
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
  /* left border */
  #LeftBorder
    height: 100%
    background-image: url("/assets/global/sidebar/tempSide.jpg")
    background-size: auto 100%
    //background: linear-gradient(to bottom,$sideGradient)
    #leftBoxContain
      position: absolute
      width: 100vh
      #leftBoxContents
        margin: 1em
.barcodeBox
  align-self: center
  text-align: center
  //background-color: $neonBlack
  .barcode
    height: 24.5vh
    width: 11vh
.heightFifty
  height: 50%
.sideLogo
  font-size: 8vh
  display: flex
  align-content: center
  height: 11.5vh
  padding: 0
  //background-color: #00ffff
  align-self: center
  color: #fe0063
  margin-left: .25em
  border: 8px double #00ffff
  border-radius: 15px
  background-color: rgba(55,55,55,.5)
  div
    margin-left: 3vh
    font-family: Logo
    display: flex
    span
      transform: rotate(-90deg)
      display: block
  .leftLine
    height: .5vh
    display: inline-block
    width: 100px
    background-color: #fe0063
    align-self: center
    width: 9.5vh
    padding: 0
.fortune
  padding: 0
  padding-top: .25em
  font-size: 3vh
  margin-left: .75em
  //background-color: #fe0063
  color: #fafdf7
  font-style: italic
.randoBlockWrap
  display: flex    
  align-content: center
  flex-direction: column
  justify-content: center
  //padding: 0 .5em !important
  img
    filter: $imgFilter
    opacity: $sideImgOpacity
    width: 100%
    height: auto
    justify-self: center
    align-self: center
    transform: rotate(-90deg)
.farLeft
  //background-color: $neonBlack
  line-height: 0
.timeBox
  line-height: 1
  display: flex
  flex-direction: column
  justify-content: center
  //background-color: $neonBlack
  color: white
  font-family: VCR
  span
    display: block
    font-size: 3.5vh
    text-align: center
    letter-spacing: 1vh
.profilePic    
  width: 25vh
  height: 100%
.rightBox
  position: absolute
  bottom: 0
  .routeName
    font-size: 8vh
    padding-left: .5em
    background-color: #fcfb07
    color: #700123
    text-shadow: 0px 0px 8px #c56508
    font-family: Montserrat
  .copyRight
    text-align: right
    display: flex
    justify-content: flex-end
    font-size: 1.75vh
    background-color: $neonBlack
    color: #00b2da
    border: 3px solid #00b2da
    div
      align-self: flex-end
      justify-self: baseline
      padding-right: 1em
      padding-bottom: 1em
      .english
        color: #dda525
        font-family: Yantramanav
        font-weight: 800
      .japanese
        font-family: Illuminati
  .descripBox
    display: block
    position: relative
    line-height: 1
    background-color: $neonBlack
    color: #f25100
    border: 3px double #F25101
    font-family: "Courier New", Courier, monospace
    div
      display: block    
      transform: rotate(-90deg)
      font-size: 1.75vh
      position: absolute
      left: -10.5vh
      bottom: 15vh
      width: 32vh
      padding-left: 1em
.adHere
  padding: 0
  line-height: 0
  img
    width: 100%
.lastUpdatePic
  img
    width: 100%
    filter: $imgFilter
    transform: rotate(-90deg)
    opacity: $sideImgOpacity
.topRightBlock
  height: 16.666666666vh
  padding: 0
.onlineNowBlock
  position: relative
  line-height: 1
  background-color: #00b6fa
  .onlineNow
    transform-origin: left
    position: absolute
    font-size: 4vh
    bottom: -3vh
    left: 5vh
    transform: rotate(-90deg)
    display: block
    color: #e4bd2d
  .onlineNo
    transform: rotate(-90deg)
    position: absolute
    top: -2vh
    left: 9vh
    font-size: 10vh
    color: #fdfc4b
.iconBlock
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  background-color: #022460
  color: #f564df
  text-shadow: 0px 0px 20px #1007c3
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
  background-color: $neonBlack
  div
    display: block
    width: 32vh
    transform: rotate(-90deg)
    font-size: 3.5vh
    text-align: center
    font-family: VCR
    text-transform: uppercase
    .stageOne
      color: $lightNeonRed
      text-shadow: 0px 0px 8px $neonRed
    .stageTwo
      color: $lightNeonBlue
      text-shadow: 0px 0px 8px $neonBlue
.ipFlag
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  line-height: 1
  flex-direction: column
  background-color: $neonBlack
  font-family: VCR
  span
    display: block
    width: 32vh
    transform: rotate(-90deg)
    font-size: 3vh
    text-align: center
    color: $lightNeonRed
    text-shadow: 0px 0px 8px $neonRed
.pinkNeonBlock
  //background-color: #fe0063
.blink
  animation: blink 2s infinite
@keyframes blink
  0%
    opacity: 0
  49.9%
    opacity: 0
  50%
    opacity: 1
.rainbowRoad
  background-image: linear-gradient(#c6399e, #e443aa, #ce51fd, #566ffd, rgba(44, 142, 110, 0))
.bottomNamebar
  text-align: center
  font-size: 13.75vw
  font-family: Alien
  color: white

[class*=grid-], [class*=grid_], [class~=grid]
    margin: 0 !important

.gridPadding
  padding-top: 1vh
.rightGridPad
  width: 100vh
  padding-bottom: .75em
</style>
