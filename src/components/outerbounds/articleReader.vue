<template>
    <div id="articlePage">
      <div id="article">
        
        <h1>Fillter Title</h1>

        <div id="text">
            The 1990s were undoubtedly the golden age of kids' meals.
<br/>
The standard kids' meal started with a burger (or chicken nuggets), fries, and a soda: simple and dependable. This was the era before the apple slices and milk, the "healthy" children's options that exist today. The experience was just blissful, highly caloric, mass-produced delight, in all its saturated-fat and high-fructose glory. And the crown jewel of the kids' meal, of course—sometimes the first course, and rarely the last—was the toy that came with the meal.
<br/>
Some of the most iconic toys of the 90s—Teenage Mutant Ninja Turtles, Tamagotchi, Disney characters—showed up on greasy trays across the country. But, perhaps the biggest frenzy arrived with a series of Pokémon collectibles from Burger King at the turn of the millennium. Pokémania hit a fever pitch in 1999, and the frenzy had a body count.
<br/>
<img src="https://video-images.vice.com/_uncategorized/1501173109510-16467833335_8a790bb1d7_o.jpeg?resize=1050:*" class="left"/>
<br/>
TIME magazine helped introduce the Japanese-imported phenomenon known as Pokémon to the mainstream with its November 22 cover story. At the very center of the page—a space normally occupied by heads of state, religious leaders, and business magnates—a Poliwhirl leaped out at the reader.
<br/>
"For many kids it's now an addiction: cards, video games, toys, a new movie. Is it bad for them?" TIME asked.
<h2>The buzz</h2>
It felt a tad out of touch, sure, with just enough fear-mongering to lead a few parents to pause on their next trip to Toys"R"Us. Nonetheless, there was a kernel of foreshadowing in TIME's query.
<br/>
THE 1999 TIME COVER ANNOUNCING POKÉMANIA.
The question of safety, at that point, was on a psychological level: How would Pokémon affect the brains, attitudes, and behaviors of children? Would a "gotta catch 'em all" obsession be totally consuming, or even damaging?
<br/>
<img src="https://video-images.vice.com/_uncategorized/1501173109510-16467833335_8a790bb1d7_o.jpeg?resize=1050:*" class="right"/>
<br/>
While parents, journalists, and psychologists were mulling the attitudinal implications of the fad, a far more banal Pokédanger was emerging. On December 11, 1999, 13-month-old Kira Alexis Murphy suffocated to death in Northern California. A Pokémon toy from a Burger King kids meal was believed to be the cause.
<br/>
The company had begun a massive Pokémon promotion in connection with Pokémon: The First Movie, which debuted in North America on November 10 of that year, one month before Kira's death. The 56-day promotion, one of the largest in history, was intended to run from early November to the end of December. The kids' meal prize during that two-month period was one of 57 different Pokémon toys. Making the promotion all the more exciting was the fact that the toys were encapsulated within the immediately familiar red and white orb of a Pokéball—the fictional vessel used to catch Pokémon. Kids got to experience the three-dimensional fantasy of opening up a Pokéball to see what they'd captured. Burger King had plans to distribute over 25 million toys in this clever format for free with any kids' meal purchase.
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
      comicInfo:{"comicsArray":[],
      "_id":"",
      "title":"",
      "subtitle":"",
      "img":"",
      "url":"",
      "category":"",
      "date":"",
      "series":"noseries"},
      fullReturn: JSON.parse(JSON.stringify(this.$store.getters.getArchive)).filter(e => e.comicsArray.length > 0 && e.comicsArray[0] != ""),
      comicId: this.$route.params.id,
      cat: 0,
      nextComic:{"_id":"","title":""},
      priorComic:{"_id":"","title":""},
      cursorStyle:""
    }
  },
  components: {
    navigation
  },
  mounted () {
    //   if(typeof this.$route.params.cat !== 'undefined'){
    //     this.cat = this.$route.params.cat
    //   }
    //   else{
    //     this.cat = 0
    //   }
    //   this.getIndexes(this.fullReturn)
    //   this.switchCat(this.cat)
  },
  methods:{
    getIndexes(archive){
      let currentIndex = archive.map(function(e) { return e._id; }).indexOf(this.comicId)
      if(archive.length > 0 && currentIndex > -1){
        this.comicInfo = archive[currentIndex]
        if(currentIndex != 0){
          this.nextComic = archive[currentIndex-1]
        }
        if(currentIndex < archive.length-1){
          this.priorComic = archive[currentIndex+1]
        }
      }
      else{
        this.$router.push('/')
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
    width: 30%
    cursor: pointer
    .nameContent
      word-break: break-word
  #rightArrow
    @extend #leftArrow
    right: 0
    justify-content: flex-end
    .nameContent
      text-align: right
  #currentArch
    color: $neonGreen
    font-size: 1.5em
    display: block
    margin: 0 auto
    width: fit-content
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
    margin: 0 auto 1em 0
    .arrow
      font-size: 3em
      margin: 0
#navBox.desktop
  bottom: 0
  padding: .5em 0 0 0
  width: 100%
  font-size: 1.25em
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#articlePage
  position: relative
  min-height: 100vh
  #article
    padding: 1em 1em 2em 1em
    max-width: 1000px
    height: calc(100vh - 3em)
    width: calc(100% - 2em)
    background-color: rgba(black,.75)
    margin: 0 auto
    color: white
    #text
        margin-top: 2em
        padding-bottom: 2em
        h2
            margin: .8em 0
            font-size: 1.5em
            font-weight: 800
            text-transform: capitalize
            display: block
        br
            height: 1em
            display: block
            content: ""
            height: 1em
        img
            display: block
            max-width: 80%
            margin: 1em auto
            &.left
                max-width: 40%
                float: left
                margin: 1em
            &.right
                max-width: 40%
                float: right
                margin: 1em
    h1
      font-size: 3em
      text-align: center
      color: $neonRed
      font-family: Montserrat
      @include textGlow($neonRed, 1px)
    .comicPages
      img
        max-width: 100%
        margin: 0 auto 1em auto
        display: block
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
