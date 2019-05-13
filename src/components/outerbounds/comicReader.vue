<template>
    <div id="comicPage">
      <div id="theComic">
        <h1>{{comicInfo.title}}</h1>
        <h2>{{comicInfo.subtitle}}</h2>
        <div class="comicPages">
          <img v-for="pages in comicInfo.comicsArray" :key="pages" v-lazy="`/assets/comics/${comicInfo.url}/${pages}`"/>
        </div>
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
        <div v-if="comicInfo.series !== 'noseries'">
          farLeft left {{comicInfo.series}} right farRight
        </div>
      </div>
      <div id="city"></div>
      <div id="cityLights"></div>
      <div id="cityOfStars"></div>
      <div id="cityBlues"></div>
    </div>
</template>

<script>
import axios from 'axios'
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
      comicId: this.$route.params.id
    }
  },
  components: {
    navigation
  },
  mounted () {
       axios
       .get(`${this.$store.getters.getAPI}/comic/${this.comicId}`)
        .then((response) => {
           if(response.data.length > 0){
            this.comicInfo = response.data[0]
           }
           else{
             this.$router.push('/')
           }
       })
       .catch(() => this.$router.push('/'))
  }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#comicPage
  position: relative
  min-height: 100vh
  #theComic
    padding: 1em 1em 7vh 1em
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
#cityOfStars
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
