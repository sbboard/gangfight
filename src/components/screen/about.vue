<template>
    <div id="aboutUs" :style="fontSize">
        <div id="descBox">
            <span>Gang Fight is a media brand based in the United States of America.
            We make content not because we seek any sort of financial gain, 
            but because mankind inherited a genetic craving to create from the force that birthed it.</span>
            <span>In our quest to quench this thirst we hope to create content that feels authentic and unique. 
            A lot of what we create was created with a very specific type of person in mind, but we hope anyone can find beauty in the niche.</span>
        </div>
        <a href="https://twitter.com/gyangufaito" class="socMedia">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/gangfight" class="socMedia">
            <i class="fab fa-facebook-f"></i></a>
        <a href="#" class="socMedia">
            <i class="fas fa-envelope"></i></a>
        <img id="posterOne" src="/assets/global/about/poster2.gif"/>
        <img id="posterTwo" src="/assets/global/about/poster3.gif"/>
        <img id="posterThree" src="/assets/global/about/poster4.gif"/>

        <img id="windowSketch" src="/assets/global/about/sketchWindow.png"/>
        <div id="windowTint"></div>
        <div id="windowStreakOne"></div>
        <div id="windowStreakTwo"></div>
        <!-- outside -->
        <img id="rochesterThree" src="/assets/global/homepage/rochester.png"/>
        <img id="rochester" src="/assets/global/homepage/rochester.png"/>
        <img id="rochesterTwo" src="/assets/global/homepage/rochester.png"/>
        <img id="stars" src="/assets/global/homepage/starsbg.jpg"/>
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
        color: $neonBlue
        background-color: rgba(black,.8)
        width: 21em
        left: 13.5em
        padding: 1em
        top: 7em
        transform: rotate(-1deg)
        font-size: 1.75em
        font-family: Yantramanav
        z-index: 500
        @include boxGlow($neonBlue)
        span
            display: block
            &:first-child
                margin-bottom: .25em
    #poster
        position: absolute
        transform: skewY(-21deg)
        width: 12em
        z-index: 500
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
    #rochester    
        position: absolute
        width: 203em
        z-index: 1
        margin: 0 auto
        left: 31em
        top: 4em
        filter: brightness(.8)
    #rochesterTwo    
        left: -35em
        width: 191em
        top: 1em
        position: absolute
        transform: scaleX(-1)
        filter: brightness(.6)
    #rochesterThree  
        position: absolute
        width: 231em
        z-index: 2
        margin: 0 auto
        left: -107em
        transform: scaleX(-1)
        top: 11em
    #windowSketch
        width: 100%
        height: 100%
        z-index: 300
        position: absolute
    #stars    
        width: 80%
        left: 6em
        z-index: -5
        position: absolute
    #windowTint    
        width: 100%
        height: 100%
        position: absolute
        background-color: white
        opacity: 0.1
        z-index: 5
    #windowStreaks
        background-color: white
        opacity: .3
        transform: rotate(-30deg)
        width: 100em
        position: absolute
        z-index: 6
        left: 5em
    #windowStreakOne
        @extend #windowStreaks
        height: 17em
        top: 10em
    #windowStreakTwo
        @extend #windowStreaks
        height: 4em
        top: 46em
    .socMedia    
        left: 8.5em
        z-index: 500
        top: 8.75em
        font-size: 4em
        background-color: rgba(black,.8)
        padding: .5em
        border-radius: 1em
        position: absolute
        width: 1em
        text-align: center
        height: 1em
        &:nth-of-type(1)
            left: 10.75em
        &:nth-of-type(2)
            left: 13em
        color: $neonBlue
        @include boxGlow($neonBlue)
        &:hover
            color: white
</style>