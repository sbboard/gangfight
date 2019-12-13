<template>
    <div id="comicPage">
      <div id="theComic">
        
        <h1>{{comicInfo.title}}</h1>
        <h2>{{comicInfo.subtitle}}</h2>

        <div id="comicNav" :class="[(this.$store.getters.getTaller == 'vh')?'desktop':'mobile']">
          <a id="leftArrow" :href="`/comicReader/${priorComic._id}/${cat}`">
            <span class="arrow"><i class="fas fa-angle-left"></i></span>
            <span class="nameContent">{{priorComic.title}}</span>
          </a>
          <template v-if="cat=='1'">
            <div id="currentArch" @click="switchCat(0)">{{comicInfo.series}}</div>
          </template>
          <template v-else>
            <div id="currentArch" @click="switchCat(1)">ALL COMIC ARCHIVE</div>
          </template>
          <a id="rightArrow" :href="`/comicReader/${nextComic._id}/${cat}`">
            <span class="nameContent">{{nextComic.title}}</span>
            <span class="arrow"><i class="fas fa-angle-right"></i></span>
          </a>
        </div>

        <div class="comicPages">
          <img v-for="pages in comicInfo.comicsArray" :key="pages" v-lazy="`/assets/comics/${comicInfo.url}/${pages}`"/>
        </div>
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
      </div>
      <div id="city"></div>
      <div id="cityLights"></div>
      <div id="cityOfStars"></div>
      <div id="cityBlues"></div>
    </div>
</template>

<script>
import navigation from '../../components/nav/navHome.vue'

export default {
  data(){
    return{
      comicInfo:{"comicsArray":[""],
      "_id":"",
      "title":"",
      "subtitle":"",
      "img":"",
      "url":"",
      "category":"",
      "date":"",
      "series":"noseries"},
      fullReturn: JSON.parse(JSON.stringify(this.$store.getters.getArchive)),
      comicId: this.$route.params.id,
      cat: 0,
      nextComic:{"_id":"","title":""},
      priorComic:{"_id":"","title":""},
    }
  },
  components: {
    navigation
  },
  mounted () {
      if(typeof this.$route.params.cat !== 'undefined'){
        this.cat = this.$route.params.cat
      }
      else{
        this.cat = 0
      }
      let currentIndex = this.fullReturn.map(function(e) { return e._id; }).indexOf(this.comicId)
      if(this.fullReturn.length > 0 && currentIndex > -1){
        this.comicInfo = this.fullReturn[currentIndex]
        if(currentIndex != 0){
          this.nextComic = this.fullReturn[currentIndex-1]
        }
        if(currentIndex < this.fullReturn.length-1){
          this.priorComic = this.fullReturn[currentIndex+1]
        }
      }
      else{
        this.$router.push('/')
      }
  },
  methods:{
    switchCat(nnew){
      if(this.comicInfo.series != "noseries"){
        this.cat = nnew
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

#comicNav
  padding: 0 0 .5em 0
  height: 3.5em
  position: fixed
  bottom: 0
  left: 0
  margin: 0 auto
  font-size: 1em
  z-index: 555
  display: block
  right: 0
  background-color: rgba(0, 0, 0, .75)
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  font-family: Yantramanav
  .arrow
    font-size: 4em
    color: $neonBlue 
    @include textGlow($neonBlue, 1px)
    margin: 0 .25em
  #leftArrow
    display: flex
    align-items: center
    color: white
    position: absolute
    top: 0
    max-width: 30%
    cursor: pointer
  #rightArrow
    @extend #leftArrow
    right: 0
    justify-content: flex-end
    .nameContent
      text-align: right
  #currentArch
    color: $neonGreen
    font-size: 1.5em
    cursor: pointer
    display: block
    margin: 0 auto
    max-width: 40%
    text-align: center
    text-transform: uppercase
  .nameContent
    margin-bottom: .5em
  &.desktop
    &::before
      width: .5em
      content: ' '
      position: absolute
      top: 0em
      height: 4em
      left: -.5em
      background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.75))
    &::after
      width: .5em
      content: ' '
      position: absolute
      top: 0em
      height: 4em
      right: -.5em
      background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.75))
  &.mobile
    top: 0
    width: 100%
    position: relative
#navBox.desktop
  bottom: 3.2em
  padding: .5em 0 0 0
  width: 100%
  font-size: 1.25em
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#comicPage
  position: relative
  min-height: 100vh
  #theComic
    padding: 1em 1em 7em 1em
    h1
      font-size: 3em
      text-align: center
      color: $neonRed
      font-family: Montserrat
      @include textGlow($neonRed, 1px)
    h2
      font-size: 2em
      text-align: center
      margin-bottom: .5em
      color: $neonBlue
      font-family: Montserrat
      @include textGlow($neonBlue, 1px)
    .comicPages
      img
        max-width: 100%
        margin: 0 auto 1em auto
        display: block
        min-height: 500px

#city
    background-image: url('/assets/global/homepage/rochester.png')
    background-position: bottom
    background-repeat: repeat-x
    background-attachment: fixed
    background-size: 100% auto
    position: absolute
    bottom: 0
    opacity: .6
    z-index: -5
    height: 100%
    width: 100%
    filter: brightness(0.5)
#cityOfStars
    filter: brightness(0.5)
    z-index: -7
    position: absolute
    width: 100%
    height: 100%
    top: 0px
    left: 0px
    background-image: url(/assets/global/homepage/starsbg.jpg)
    margin: 0
    padding: 0
    background-attachment: fixed
    background-repeat: no-repeat
    opacity: .3
#cityBlues
  background: -webkit-radial-gradient(bottom, #121729, #020306 60%)
  margin: 0
  padding: 0
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  height: 100%
  width: 100%
  z-index: -8
  position: absolute
  top: 0
</style>
