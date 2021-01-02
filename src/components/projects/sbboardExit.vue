<template>
    <div id="forward" :style="fontSize">
      <div class="thiccBoy">
        <img src="/assets/global/sbboard/sbboardCast.png" alt="crew"/>
        <h1>Before You Check Out SBboard!</h1>
        <!--<img src="/assets/global/sbboard/dk.jpg" alt=""/>-->
        <span class="aboutText">From 2011 to 2015 SBboard was a digital comic anthology. A group of teenage e-buddies took turns updating the site weekly so (when everything went right) there was a new comic every day of the week. Creating multiple comics a week for a few years straight was a great exercise for all of us, and it helped everyone involved develop into the artist they are today. It was the heart of our group for a long time, and it gave a couple of stupid, lost 18 year olds purpose.</span>
        <span class="aboutText">That being said, we've grown a lot as people since SBboard and the works in this archive are not longer reflective of who we are as people. A lot of the strips are about being seventeen, sexually frustrated, and depressed; because when you’re a teenager sometimes those are the most recurring and relatable thoughts flowing through your head. There’s also a lot of weird subtext in a lot of the upload descriptions about being mad at your friends for not updating a comic anthology on time. Some of the humor we used back then is in poor taste and sometimes offensive. Nothing in the archive is outright malicious, but definitely ignorant.</span>
        <span class="aboutText">Despite its flaws I still really cherish this collection of amateur comics, and I think it’s worth flipping through even today in 20XX. We had a lot of fun making these stories, and there's actually some real bangers in there still. Hope you enjoy checking it out.</span>
        <span id="quoteAtt">- SBboard Team</span>
        <a id="goLink" href="/archive/sbboard/gang-fight.com/wp/">Let's Go</a>
      </div>
        <div id="cityOfStars"></div>
        <div id="cityBlues"></div>
    </div>
</template>

<script>
export default {
  metaInfo: {
      title:"SBboard Portal"
  },
    computed: {
        fontSize(){
            return {fontSize: '1.75'+this.$store.getters.getTaller}
        },
    },
}
</script>

<style lang="sass">
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
#forward
  width: 100%
  display: block
.thiccBoy
    width: 75%
    margin: 0 auto
    display: block
    font-family: Montserrat
    color: white
    img
      margin: 1em auto 0 auto
      display: block
      height: 10vh
      opacity: .8
    h1
        font-size: 2.5em
        display: block
        text-align: center
        color: $neonBlue
        font-family: Montserrat
        @include textGlow($neonBlue, 1px)
    #quoteAtt
        font-style: italic
        display: block
        width: calc(100% - 2em)
        text-align: right
        color: white
    #goLink
        font-size: 3em
        margin: 0 auto .3em auto
        display: block
        width: fit-content
        color: $neonRed
        font-family: Montserrat
        @include textGlow($neonRed, 1px)
        text-decoration: none
        &:hover
          text-decoration: underline
    .aboutText
      margin: 1em 0
      display: block
      color: white
      font-family: Yantramanav
.bottomSect
  display: block
  h2
    font-weight: 800
    margin-bottom: .5em
    font-size: 1.25em
  .attr
    display: block
    margin: 0 auto .25em auto
    font-family: Yantramanav
    .guy
      color: white
      font-weight: 800
      margin-right: .25em
    .link
      color: white
      font-style: italic
      a
        color: $neonBlue
        font-style: normal
        text-decoration: none
        &:hover
          text-decoration: underline
  .btm
    display: block
    margin: 1em auto 0 auto
    font-family: Yantramanav
    color: white
#cityOfStars
  position: absolute
  z-index: -7
  width: 100%
  position: absolute
  bottom: 0px
  left: 0px
  height: 100%
  width: 100%
  background-image: url(/assets/global/homepage/starsbg.jpg);
  margin: 0
  padding: 0
  background-size: cover
  background-attachment: fixed
  background-repeat: no-repeat
  background-position: center
  opacity: .3
#cityBlues
  background: -webkit-radial-gradient(bottom, #121729, #020306 60%)
  margin: 0
  padding: 0
  background-size: cover
  background-attachment: fixed
  background-repeat: no-repeat
  background-position: center
  height: 100%
  width: 100%
  z-index: -8
  position: absolute
  top: 0
</style>
