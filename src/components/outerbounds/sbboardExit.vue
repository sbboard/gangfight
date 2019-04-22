<template>
    <div id="forward">
        <h1>Before You Check Out SBboard!</h1>
        <img src="/assets/global/sbboard/dk.jpg" alt=""/>
        <p>Hey just a heads up I think it's worth a slight forward, SBboard was a really great project. Creating multiple comics a week for a few years straight was a great
            excercise for all of us, and it helped everyone involved develop into the artist they are today. That being said, we've grown a lot as people since SBboard
            and the works on this archive are not longer accurately reflective of who we are as people. Nothing on the website is outright malicious. Homophobic slurs.
            Horny on main.
            That being said, I hope you can still find enjoyment from the SBboard Archive. We had a lot of fun making these stories, and there's actually some real bangers
            in there still. Hope you enjoy checking it out.</p>
        <span id="quoteAtt">- Buff</span>
        <a id="goLink" href="/archive/sbboard/gang-fight.com/wp/">Let's Go</a>
        
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
    </div>
</template>

<script>
import navigation from '../../components/nav/navHome.vue'
export default {
  data(){
  },
  components: {
    navigation
  },
    
}
</script>

<style lang="sass">
#forward
    width: 100%
    display: block
    margin: 0 auto
    max-width: 1000px
    background-color: red
    padding: 1em
    h1
        font-size: 2.5em
        font-weight: 800
        margin: 0 auto
        display: block
        text-align: center
    img
        max-width: 50%
        margin: 1em auto
        display: block
    #quoteAtt
        font-style: italic
        display: block
        width: calc(100% - 3em)
        text-align: right
        padding-right: 3em
    #goLink
        font-size: 3em
        margin: 0 auto
        display: block
        width: fit-content


.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
</style>
