<template>
    <div id="aboutUs" :style="fontSize">
        <div id="descBox">
            <span>Gang Fight is a media brand based in the United States of America.
            We make content not because we seek any sort of financial gain, 
            but because mankind inherited a genetic craving to create from the force that birthed it.</span>
            <span>In our quest to quench this thirst we hope to create content that feels authentic and unique. 
            A lot of what we create was created with a very specific type of person in mind, but we hope anyone can find beauty in the niche.</span>
        </div>
        <img id="posterOne" src="/assets/global/about/poster2.gif"/>
        <img id="posterTwo" src="/assets/global/about/poster3.gif"/>
        <img id="posterThree" src="/assets/global/about/poster4.gif"/>
        <img id="catStat" src="/assets/global/about/cat.gif"/>
    </div>
</template>

<script>
export default {
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

#aboutUs
    background-image: url("/assets/global/about/sketch.jpg")
    background-size: 100% 100%
    .aboutText
        background-color: rgba(black, .8)
        color: $neonRed
        padding: 1em
        display: inline-block
        margin: 1em
    #catStat
        position: absolute
        right: 12em
        top: 4em
        width: 21em
    #descBox
        position: absolute    
        background-color: red
        width: 21em
        left: 13.5em
        padding: 1em
        top: 7em
        transform: rotate(-1deg)
        font-size: 1.75em
        font-family: Yantramanav
        span
            display: block
            &:first-child
                margin-bottom: .25em
    #poster
        position: absolute
        transform: skewY(-21deg)
        width: 12em
    #posterOne
        @extend #poster
        left: 5em
    #posterTwo   
        @extend #poster 
        left: -8em
        top: 11em
    #posterThree
        @extend #poster    
        left: 5em
        top: 19em
</style>