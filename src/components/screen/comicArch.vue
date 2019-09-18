<template>
    <div id="scene" :style="fontSize">
        <div v-if="currentPage == 0" class="leftArrow">x</div>
        <div v-else @click="changeNav(-1)" class="leftArrow">L</div>
        <div v-if="currentPage > (theArchive.length/4)-1" class="rightArrow">x</div>
        <div v-else @click="changeNav(1)" class="rightArrow">R</div>
        <div id="wheel">
            <div id="outerRim"></div>
            <div id="onePole"></div>
            <div id="twoPole"></div>
            <div id="threePole"></div>
            <div id="innerCircle"></div>
        </div>  
        <div id="handle">
            <div id="topHandle"></div>
            <div id="rightHandle"></div>
            <div id="handleCurve"></div>
        </div>
        <div id="stoolGroup">
            <div id="stoolOne">
                <div class="seat"></div>
                <div class="pole"></div>
            </div>
            <div id="stoolTwo">
                <div class="seat"></div>
                <div class="pole"></div>
            </div>
        </div>
    <div id="signHooks">
        <div id="leftHook"></div>
        <div id="rightHook"></div>
    </div>
    <div id="leftPart">
        <div id="roof"></div>
        <div id="roofPole"></div>
    </div>
    <div id="hangingSign">
        <h2>私を殺して</h2>
    </div>
    <div id="tableTop"></div>
    <div id="tableFront"></div>
    <div id="poleLeft"></div>
    <div id="poleRight"></div>
    <div id="logo">
        <h1>Gang</h1> 
        <h1>Fight</h1> 
    </div>
    <div id="lantern">
        <h3>拉</h3>
        <h4>麺</h4>
        <img src="/assets/global/comicArch/lantern.png">
    </div>
    <div id="shadowTheHedgehog">
        <div class="topShadow"></div>
        <div class="farLeft"></div>
        <div class="midOne"></div>
        <div class="midThree"></div>
        <div class="midFive"></div>
        <div class="farRight"></div>
        <div class="lightFlicker"></div>
    </div>
    <div id="rowOfLights">
        <div class="lightOne"></div>
        <div class="lightTwo"></div>
        <div class="lightThree"></div>
        <div class="lightFour"></div>
    </div>
    <div id="blackFilter">
    </div>
      <div id="menu">     
        <div class="contentBoxes" v-for="(item, id) in theArchive.slice(currentPage*4, currentPage*4+4)" :key="`${id}`">
              <div class="boxWrap">
                  <p class="boxDate">{{item.date}}</p>
                  <p class="titleName">
                      <span class="titleText">{{item.title}}</span>
                      <span class="subtitle" v-if="item.subtitle != ''">{{item.subtitle}}</span>
                  </p>
                  <a :href="item.url" v-if="item.comicsArray.length < 1 || item.comicsArray[0] == ''">
                      <img :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                  </a>
                  <a v-else :href="'/comicReader/'+item._id">
                      <img :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                  </a>
              </div>
      </div>
      </div>
      <div id="comixSign">
        <h1>COMIX</h1>
      </div>
      <div id="backboard"></div>
      <div id="woodBack"></div>
      <div id="tinRoof"></div>
      <div id="sketch">
      </div>
      <div id="backwall"></div>
      <div id="rightwall"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'comicArchive',
    data(){
        return{
            currentPage: 0,
            theArchive: [
                        {"_id":"0","comicsArray":[],"title":"HOLD ON","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-04-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"WHAT","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"UH...","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"1","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"2OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"3OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"4OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"5OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"6OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"7OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        ],
        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/category/comic`)
        .then(response => (this.theArchive = response.data))
    },
    methods: {
        formatDate(isoDate){
            let d = new Date(isoDate)
            let month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1
            let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            let year = d.getFullYear().toString().substring(2)
            let dString = `${month}:${date}:${year}`
            return dString
        },
        changeNav(num){
            this.currentPage += num
        }
    },
    computed: {
        blockSize(){
            return {width: '25'+this.$store.getters.getTaller,height: '25'+this.$store.getters.getTaller}
        },
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    watch: {
        theArchive(){
            for(let i=0;i<this.theArchive.length;i++){
                this.theArchive[i].date = this.formatDate(this.theArchive[i].date)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

.arrowTemplate
    font-size: 4em
    position: absolute
    left: 0
    top: 0
    cursor: pointer
    z-index: 900
.leftArrow
    @extend .arrowTemplate    
    left: 3em
    top: 8em
.rightArrow
    @extend .arrowTemplate 
    left: 21em
    top: 8em
#wheel
    position: absolute
    bottom: -10em
    right: 1em
    z-index: 403
    #outerRim
        width: 29em
        height: 29em
        border-radius: 28em
        border: 4em solid orange
        z-index: 173
        position: relative
    #onePole
        position: absolute
        top: 17.5em
        left: 2em
        background-color: purple
        width: 33em
        height: 3em
    #twoPole    
        position: absolute
        top: 17.5em
        left: 2em
        background-color: purple
        width: 33em
        height: 3em
        transform: rotateZ(60deg)
    #threePole
        position: absolute
        top: 17.5em
        left: 2em
        background-color: purple
        width: 33em
        height: 3em
        transform: rotateZ(120deg)
    #innerCircle  
        position: absolute
        top: 14em
        left: 14em
        background-color: orange
        width: 10em
        height: 10em
        border-radius: 10em
#handle
    #handleParts
        position: absolute
        top: 1em
        right: 1em
        background-color: purple
        height: 1em
        width: 1em
    #topHandle
        @extend #handleParts
        top: 41em
        left: 88em
        height: 7em
        width: 9em
        border-top-right-radius: 3em
        transform: skewY(39deg)
    #rightHandle
        @extend #handleParts
        top: 47em
        right: 3.1em
        height: 26em
        width: 5.5em
    #handleCurve
        @extend #handleParts
        border-top: 1em solid purple
        border-right: 1em solid purple
        border-radius: 2em
        right: 8em
        height: 29em
        width: 4em
        background-color: inherit
        top: 45em
        transform: skewY(39deg)
#leftPart
    #roof    
        width: 12em
        position: absolute
        height: 2em
        left: 1em
        transform: rotateZ(-28deg)
        top: 22em
        background-color: green
    #roofPole    
        width: 1.5em
        position: absolute
        height: 48em
        top: 24em
        z-index: -1
        left: 5em
        background-color: yellow
#signHooks    
    width: 28em
    height: 8em
    top: 37em
    left: 19em
    position: absolute
    #hook
        width: .5em
        height: 8em
        background-color: black
        position: absolute
    #leftHook
        @extend #hook
        left: 0
    #rightHook
        @extend #hook
        right: 0
#backwall
    background-color: pink
    position: absolute
    top: 37em
    left: 0
    right: 0
    margin: 0 auto
    width: 52em
    z-index: -1
    height: 36em
#rightwall
    background-color: purple
    position: absolute
    top: 37em
    right: 16em
    width: 8em
    z-index: -1
    height: 36em
#hangingSign
    width: 30em
    height: 11em
    position: absolute
    top: 40em
    left: 18em
    background-color: yellow
    display: flex
    align-items: center
    justify-content: center
    h2
        font-size: 5em
        font-family: calig
#stoolGroup
    position: absolute
    bottom: 0
    height: 21em
    width: 53em
    left: 47em
    z-index: 600
    .seat
        height: 5em
        width: 17em
        border-radius: 1em
        background-color: red
    .pole
        width: 4em
        height: 16em
        margin: 0 auto
        background-color: yellow
    #stoolOne
        display: inline-block
        height: 100%
    #stoolTwo
        @extend #stoolOne
        margin-left: 4em
#poleLeft
    background-color: red
    width: 4em
    top: 37em
    left: 12em
    height: 35em
    position: absolute
#poleRight
    @extend #poleLeft
    left: initial
    right: 12em
#tableTop
    width: 94em
    top: 71em
    background-color: green
    position: absolute
    height: 4em
    margin: 0 auto
    left: 0
    right: 0
    z-index: 400
#tableFront
    position: absolute
    bottom: 0
    background-color: blue
    left: 0
    right: 0
    margin: 0 auto
    width: 89em
    height: 26em
#lantern    
    position: absolute
    width: 16em
    top: 39em
    right: 14em
    pointer-events: none
    h3    
        font-size: 7em
        z-index: 300
        position: absolute
        top: 1em
        left: 0
        right: 0
        margin: 0 auto
        text-align: center
        font-family: topLogo
    h4
        @extend h3
        top: 2em
    img
        width: 100%
#scene
    width: 100%
    height: 100%
    line-height: 0
    #woodBack
        position: absolute
        top: 7.5em
        left: 0
        width: 78em
        right: 0
        height: 30em
        margin: 0 auto
        background-color: blue
    #tinRoof
        position: absolute
        top: 7.5em
        left: 0
        width: 80em
        right: 0
        z-index: 80
        margin: 0 auto
        border-bottom: 2.5em solid green
        border-left: 1.5em solid transparent
        border-right: 1.5em solid transparent
    #rowOfLights
        z-index: 499
        position: relative
        .lightOne    
            width: 10em
            height: 4em
            position: absolute
            left: 20.75em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            top: 7em
            background-color: blue
        .lightTwo
            width: 10em
            left: 34.25em
            height: 4em
            position: absolute
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            top: 7em
            background-color: blue
        .lightThree
            width: 10em
            height: 4em
            position: absolute
            right: 34.25em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            background-color: blue
            top: 7em
        .lightFour  
            width: 10em
            height: 4em
            position: absolute
            right: 20.75em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            background-color: blue
            top: 7em
    #shadowTheHedgehog
        opacity: .75
        position: relative
        z-index: 500
        pointer-events: none
        .shadow
            background-color: black
            position: absolute
            display: block
            transform: rotateZ(45deg)
        .topShadow
            background-color: black
            position: absolute
            display: block
            top: 0
            width: 100em
            height: 11em
        .farLeft
            @extend .shadow
            width: 46em
            height: 45em
            left: -33.5em
            top: -12em
        .midOne
            @extend .shadow    
            width: 10em
            left: 27.5em
            top: 1.5em
            height: 10em
        .midThree
            @extend .shadow     
            width: 25em
            left: 0
            right: 0
            margin: 0 auto
            top: -12.5em
            height: 25em
        .midFive
            @extend .shadow
            width: 10em
            right: 27.5em
            top: 1.5em
            height: 10em
        .farRight
            @extend .shadow
            width: 46em
            height: 45em
            right: -32.75em
            top: -12em
        .lightFlicker
            width: 91em
            height: 54em
            background-color: black
            position: absolute
            top: -3em
            right: -61.5em
            -webkit-transform: rotateZ(45deg)
            transform: rotateZ(45deg)
            opacity: 0
            //animation: lightShake 10s steps(5, start) infinite alternate-reverse
    #logo
        position: absolute
        z-index: 999
        bottom: 0
        color: red
        width: 25em
        height: 21em
        left: 8em
        display: block
        pointer-events: none
        h1
            font-size: 7em
            display: block
            height: 1em
            text-transform: uppercase
            font-family: Alien
    #blackFilter
        position: absolute
        bottom: 0
        z-index: 900
        width: 100em
        height: 26em
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1) 90%)
    #backboard
      background-color: red
      height: 27em
      position: absolute
      z-index: 50
      top: 9em
      margin: 0 auto
      right: 0
      left: 0
      width: 73em
    #comixSign
      width: fit-content
      display: block
      position: absolute
      z-index: 100
      left: 0
      margin: 0 auto
      right: 0
      top: 33em
      h1
        font-size: 4em
        font-family: Alien
    #sketch
      background-image: url("/assets/global/comicArch/sketch.jpg")
      background-size: 100% 100%
      position: absolute
      top: 0
      left: 0
      width: 100em
      height: 100em
      z-index: -200
    #menu
      background-color: black
      width: 70em
      position: absolute
      top: 13em
      left: 0
      height: 17.5em
      right: 0
      margin: 0 auto
      z-index: 100
      .contentBoxes
          display: inline-block
          font-family: VCR
          position: relative
          overflow: hidden
          line-height: normal
          color: white
          font-weight: 100
          animation: screenGlow 10s infinite
          width: 17.5em
          height: 17.5em
          .boxWrap
              opacity: .75
              img
                  filter: sepia(1) hue-rotate(320deg) contrast(1.5)
                  width: 100%
          .boxDate
              position: absolute
              bottom: 0
              margin: 0
              padding: 0 3px 0 3px
              right: 0
              background-color: black
              pointer-events: none
              z-index: 5
              text-decoration: none
              margin: .5em
          .titleName
              position: absolute
              text-transform: uppercase
              text-align: left
              z-index: 6
              pointer-events: none
              margin: .5em
              display: inline-block
              .titleText
                  background-color: black
                  padding: 0 3px 0 3px
                  text-decoration: none
                  font-size: 3em
              .subtitle
                  background-color: black
                  padding: 0 3px 0 3px
                  text-decoration: none
                  font-size: 2em
                  display: block
@keyframes screenGlow
    0%
        opacity: .9
    50%
        opacity: 1
    100%
        opacity: .9
@keyframes lightShake
    0%
        opacity: 0
    99%
        opacity: 0
    100%
        opacity: 1
</style>