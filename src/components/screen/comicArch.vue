<template>
    <div id="scene" :style="fontSize">  
    <div id="logo">
        <h1>Gang</h1> 
        <h1>Fight</h1> 
    </div>
    <div id="shadowTheHedgehog">
        <div class="topShadow"></div>
        <div class="farLeft"></div>
        <div class="midOne"></div>
        <div class="midThree"></div>
        <div class="midFive"></div>
        <div class="farRight"></div>
    </div>
    <div id="blackFilter">
    </div>
      <div id="menu">     
        <div class="contentBoxes" v-for="(item, id) in theArchive" :key="`${id}`">
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
      <div id="sketch">
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'comicArchive',
    data(){
        return{
            theArchive: [
                        {"_id":"0","comicsArray":[],"title":"HOLD ON","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-04-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"WHAT","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"UH...","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
                        {"_id":"0","comicsArray":[],"title":"OH NO","img":"tvload.jpg","url":"#","newDate":"01:01:0000","date":"2019-01-29T17:43:10.000Z","__v":0},
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

#scene
    width: 100%
    height: 100%
    line-height: 0
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
            left: 37.5em
            top: -13.5em
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
            right: -33.5em
            top: -12em
    #logo
        position: absolute
        z-index: 500
        bottom: 0
        color: red
        width: 25em
        height: 21em
        left: 8em
        display: block
        h1
            font-size: 7em
            display: block
            height: 1em
            text-transform: uppercase
    #blackFilter
        position: absolute
        bottom: 0
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
</style>