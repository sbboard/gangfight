<template>
  <div id="app" :style="{flexDirection: (this.$store.getters.getTaller == 'vh')?'row':'column'}">

    <!-- TOP -->
    <template v-if="this.$store.getters.getTaller == 'vw'">
      <div id="TopBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px',
                                   backgroundImage: 'url(' + '/assets/' + this.$store.getters.assetFolder + '/sidebar/tempTopp.gif)'}">
        <div ref="wordBox" class="topLogoBox" :style="{bottom: logoBoxBottom,
        backgroundImage: 'url(' + '/assets/global/sidebar/sidebarTop.jpg)'}">
        <span id="topWords">gang fight</span>
        <div id="bottomWords"><span>ギ</span><span>ャ</span><span>ン</span><span>グ</span><span>フ</span><span>ァ</span><span>イ</span><span>ト</span></div>
        </div>
      </div>
    </template>

    <!-- LEFT -->
    <template v-if="this.$store.getters.getTaller == 'vh'">
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
    <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
    <router-view :class="[(this.$store.getters.getTaller == 'vh')?'middleViewLong':'middleViewHigh']" :style="{width: '100'+this.$store.getters.getTaller, height: '100'+this.$store.getters.getTaller, position: 'relative'}"/>
    
    <!-- RIGHT -->
    <template v-if="this.$store.getters.getTaller == 'vh'">
      <div id="RightBorder" :style="{width: (windowWidth - windowHeight) / 2 + 'px'}">
        <div id="rightBoxContain" :style="{height: (windowWidth - windowHeight) / 2 + 'px',
                                          transform: 'translateY('+ (windowHeight - windowWidth) / 2 +'px) rotate(90deg)',
                                          transformOrigin: 'left bottom'
                                          }">
          
          <div class="grid rightBox gridPadding">
            <div class="col-2">
              <div class="openWindow">
                <div>
                  <div class="openText">OPEN
                    <span>24HR</span></div>
                </div>
              </div>
            </div>
            <div class="col-1 timeCol">
              <div class="timeDiv">
                <span>{{hour}}:{{minute}}{{AMPM}}</span>
              </div>
            </div>
            <div class="col-2">
              <div class="col-12 randoBlock fiftyFifty"><div>
                <img class="scanlines" src="/assets/global/sidebar/scanlines4.png"/>
                <img class="screen" :src="'/assets/' + this.$store.getters.assetFolder + '/sidebar/'+this.randoOne+'.jpg'"/>
                </div></div>
              <div class="col-12 randoBlock fiftyFifty"><div>
                <img class="scanlines" src="/assets/global/sidebar/scanlines4.png"/>
                <img class="screen" :src="'/assets/' + this.$store.getters.assetFolder + '/sidebar/'+this.randoTwo+'.jpg'"/></div></div>
            </div>
            <div class="col-4">
              <div class="col-12 fiftyFifty"><div id="threeLetter"><span>足</span><span>の</span><span>王</span></div></div>
              <div class="col-12 fiftyFifty leftLeft">
                <div id="newImg" :style="{ 'background-image': 'url(/assets/contentImages/' + this.newestUpdate + ')' }" style="background-size: contain;">
                  <div id="top">
                    <span>EAT</span>
                  </div>
                  <div id="bottom">
                    <span>DIRT</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="col-6 fiftyFifty chewyPlace"><div id="iconGuy"><span>
              <img src="/assets/global/sidebar/chewy.svg" onload="SVGInject(this)" />
              <img id="blurredChewy" src="/assets/global/sidebar/chewy.svg" onload="SVGInject(this)" />
              </span></div></div>
              <div class="col-6 padZero"></div>
              <div class="col-12 fiftyFifty leftLeft"><div id="cyberTop"><div id="cyber"><span></span><span>C</span><span>Y</span><span>B</span><span>E</span><span>R</span><span></span></div></div></div>
            </div>

            <div class="col-9 theBottomRight"><div class="routeName">{{this.$router.currentRoute.name}}</div></div>
            <div class="col-3 theBottomRight"><div class="copyRight"><div><span class="english">© 2012 - {{futureYear}} Buff</span><br/><span class="japanese">イルミナティの公式メンバー</span></div></div></div>
          </div>
          
        </div>
      </div>
    </template>

    <!-- BOTTOM -->
    <template v-if="this.$store.getters.getTaller == 'vw'">
      <div id="BottomBorder" :style="{height: (windowHeight - windowWidth) / 2 + 'px'}">
      <div id="grids">
        <div class="grid">
          <div class="col-8 bottomRouteName"><span>{{this.$router.currentRoute.name}}</span></div>
          <div class="col-4 bottomRight"><div><span class="bottomEng">© 2012 - {{futureYear}} Buff</span><br/><span class="bottomJP">イルミナティの公式メンバー</span></div></div>
        </div>
        <div class="grid">
          <div class="col-12 personInfo">{{month}}/{{day}}/{{futureYear}} {{hour}}:{{minute}}{{AMPM}}</div>
        </div>
        <div class="grid rainbowRoad">
          <div class="col-2 bottomBar">
            <div><img :src="'/assets/global/sidebar/barcodeHori.png'"/></div>
          </div>
          <div class="col-9 bottomNamebar">bad</div>
          <div class="col-1 firstEd"><img src="/assets/global/sidebar/1stedi.png"/></div>
        </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import navigation from '../../components/nav/navHome.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    navigation
  },
  data(){
    return{
      windowHeight: 0,
      windowWidth: 0,
      flexDirect: "row",
      fortune: this.$store.getters.getFortune,
      futureYear: 0,
      day: 0,
      month: 0,
      boxHeight: 0,
      randoOne: 1,
      randoTwo: 2,
      hour: 0,
      minute: 0,
      AMPM: "AM",
      newestUpdate: "tvload.jpg"
    }
  },
  methods:{
    getLogoHeight(){
      const logoBox = this.$refs.wordBox
      if(logoBox != null){
        this.boxHeight = logoBox.clientHeight
      }
    },
    sendTime(){
      function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
      }
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      let tempHour = today.getHours()
      if(tempHour > 12){
        tempHour = tempHour-12
        this.AMPM = "PM"
      }
      (tempHour == 0)?this.hour = 12:this.hour = tempHour
      this.minute = addZero(today.getMinutes())
      this.month = mm
      this.day = dd
      this.futureYear = yyyy+12
      this.$store.commit('setAsset', [dd,mm,yyyy])
    }
  },
  beforeMount(){
    this.sendTime()
  },
  created(){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
    setInterval(this.sendTime, 1000);

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

    //get latest update
    axios.get(`${this.$store.getters.getAPI}/1`).then(response => (this.newestUpdate = response.data[0].img))
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
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/gridlex.min.css"
[class*=grid-], [class*=grid_], [class~=grid]
    margin: 0
[class*=col-], [class*=col_], [class~=col]
    padding: 0 .75vh 1.75vh

$lineWidth: .5em
$sideImgOpacity: .7

#BottomBorder
  background-image: url("/assets/global/sidebar/bottomBar.jpg")
  background-color: black
  background-size: 100% auto
  background-repeat: no-repeat
  background-position: top
  z-index: 99999999
  #grids
  .bottomRouteName
    font-size: 9vw
    background-color: #fcfb07
    color: #700123
    text-shadow: 0px 0px 8px #c56508
    font-family: Montserrat
    padding: 0
    display: flex
    align-content: center
    padding-left: .25em
    border-right: 0.4em double $neonBlack
    @include boxGlow(#fcfb07)
    span
      display: block
      height: fit-content
      align-self: center
  .bottomRight
    text-align: right
    padding-top: .5em
    background-color: $neonGreen
    padding: 0
    display: flex
    align-items: center
    justify-content: flex-end
    @include boxGlow($neonGreen)
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
    padding-left: 0
    padding-right: 1vw
    img
      width: 100%
  .bottomBar
    padding-left: 0
    padding-right: 0
    div
      background-color: white
      padding-top: 1vw
      img
        width: 100%
  .personInfo
    padding: .25em 0
    font-size: 3.25vw
    text-align: center
    letter-spacing: .25em
    font-weight: 800
    border: 2px solid #9affff
    text-transform: uppercase
    font-family: Montserrat
    
    color: #ffcce0
    @include textGlow(#fe0063, 1px)
    @include boxGlow(#00c4ff)
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
  z-index: 99999999
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
  font-family: Montserrat
#bottomWords
  font-size: 3vw
  font-family: topLogo
  display: flex
  justify-content: space-evenly
  margin-top: 1em
#app
  display: flex
  height: 100%
  justify-content: center
  overflow: hidden
  /* right border */
  #RightBorder
    background-image: url("/assets/global/sidebar/sidebarRm.jpg")
    background-size: auto 100%
    background-position: left
    height: 100vh
    z-index: 99999999
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
          font-family: 'Montserrat', sans-serif
        #lowOfLows
          font-family: 'Yantramanav', sans-serif
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
    background-image: url("/assets/global/sidebar/sidebarLm.jpg")
    background-size: auto 100%
    background-position: right
    height: 100vh
    z-index: 99999999
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
  align-self: center
  color: #ffcce0
  @include textGlow(#fe0063, 1px)
  @include boxGlow(#00c4ff)
  margin-left: .25em
  border: 0.75vh double #9affff
  border-radius: 15px
  background-color: rgba(0,0,0,.3)
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
    background-color: #ffcce0
    box-shadow: 1px -1px 2px black, 0px 0px 10px #fe0063, 0 0 20px #fe0063, 0 0 10px #fe0063
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
.farLeft
  //background-color: $neonBlack
  line-height: 0
.profilePic    
  width: 25vh
  height: 100%
.rightBox
  position: absolute
  bottom: 0
  width: 100vh
  .openWindow
    height: calc(100% - 1vh)
    border: .5vh solid #ECF028
    position: relative
    border-radius: .5vh
    @include boxGlow(#ECF028)
    div
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      .openText
        transform: rotate(-90deg)
        display: block
        color: #DB4486
        @include textGlow(#DB4486, 1px)
        font-size: 6.25vh
        width: fit-content
        align-self: center
        justify-self: center
        height: fit-content
        font-family: Montserrat
        span
          color: #16DBF2
          @include textGlow(#16DBF2, 1px)

  .timeCol
    position: relative
    .timeDiv
      display: flex
      width: 100%
      height: 100%
      align-content: center
      justify-content: center
      background-color: black
      span
        transform: rotate(-90deg)
        font-size: 6.5vh
        font-family: VCR
        color: white
        width: fit-content
        height: fit-content
        align-self: center
        justify-self: center
  .randoBlock
    line-height: 0
    padding: 0
    div
      height: fit-content
      padding: .25em
      position: relative
      .screen
        transform: rotate(-90deg)
        width: 100%    
        filter: contrast(1.75) saturate(2)
        opacity: 0.9
      .scanlines
        height: calc(100% - .5em)
        width: calc(100% - .5em)
        position: absolute
        z-index: 1
        transform: rotate(-90deg)
        opacity: 0.3
  .routeName
    font-size: 7vh
    padding: .5vh .5em
    background-color: #fcfb07
    color: #700123
    text-shadow: 0px 0px 8px #c56508
    font-family: Montserrat
    border-radius: 11px
    @include boxGlow(#fcfb07)
  .copyRight
    text-align: right
    display: flex
    justify-content: flex-end
    font-size: 1.75vh
    color: #00b2da
    height: 100%
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
.gridPadding
  padding-top: 1vh
.rightGridPad
  width: 100vh
  padding-bottom: .75em
.middleViewLong
  box-shadow: inset 8px 0 15px -5px rgba(0, 0, 0, 0.8), inset -8px 0 15px -5px rgba(0, 0, 0, 0.8)
.middleViewHigh
  box-shadow: inset 0 8px 15px -5px rgba(0, 0, 0, 0.8), inset 0 -8px 15px -5px rgba(0, 0, 0, 0.8)
#cyberTop
  padding: inherit
  padding-bottom: 0
  width: calc(100% - 1em)
  height: 100%
  display: flex
  align-items: center
  #cyber
    border: .5vh solid $neonGreen
    @include boxGlow($neonGreen)
    font-family: Montserrat    
    height: 50%
    width: 100%
    display: flex
    flex-direction: inherit
    align-items: center
    justify-content: space-evenly
    span
      color: $neonGreen
      @include textGlow($neonGreen,1px)
      font-weight: 700
      display: block
      transform: rotate(-90deg)
      font-size: 2vh
#threeLetter
  display: flex
  flex-direction: initial
  justify-content: center
  align-items: center
  height: 100%
  font-family: 'Kosugi Maru', sans-serif
  span
    transform: rotate(-90deg)
    color: #fff6e3
    @include textGlow($neonOrange, 1px)
    font-size: 10vh
    display: block
#newImg
  position: relative
  height: 100%
  width: 100%
  background-size: 100% auto
  overflow: hidden
  border-radius: 1em
  filter: contrast(1.5) saturate(1)
  font-size: 3.5vh
  font-family: Alien
  #top
    background-color: $neonBlack
    height: 100%
    float: left
    position: relative
    display: flex
    align-items: center
    justify-content: center
    width: 20%
    span
      color: #e8f5ff
      transform: rotate(-90deg)
      display: block
      width: fit-content
      margin: 0 auto
  #bottom
    background-color: $neonBlack
    height: 100%
    float: right
    position: relative
    display: flex
    align-items: center
    justify-content: center
    width: 20%
    span
      color: #e8f5ff
      transform: rotate(-90deg)
      display: block
      width: fit-content
      margin: 0 auto
.fiftyFifty
  height: 50%
.leftLeft
  padding: 0
.chewyPlace
  padding-right: 50%
  #iconGuy
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    span
      display: block
      transform: rotate(-90deg)
      font-size: 15vh
      height: inherit
      width: 100%
      svg
        fill: rgb(255, 216, 226)
      #blurredChewy
        //filter: drop-shadow(0 0 10px 0px $neonRed)
        filter: drop-shadow(0 0 10px $neonRed)
        fill: black
        z-index: -1
        position: absolute
        left: 1px
        top: 1vh
.padZero
  padding: 0
.theBottomRight
  padding-bottom: 1vh
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
</style>