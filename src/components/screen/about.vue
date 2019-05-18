<template>
    <div id="aboutUs" :style="fontSize">
        <div id="lanternBox">
            <img id="wire" src="/assets/global/about/wire.gif"/>
            <img class="lantern" src="/assets/global/about/lant1.png"/>
            <img class="lantern" src="/assets/global/about/lant2.png"/>
            <img class="lantern" src="/assets/global/about/lant3.png"/>
            <img class="lantern" src="/assets/global/about/lant4.png"/>
            <img class="lantern" src="/assets/global/about/lant5.png"/>
            <img class="lantern" src="/assets/global/about/lant6.png"/>
            <img class="lantern" src="/assets/global/about/lant7.png"/>
        </div>
        <div id="lanternReflect">
            <img class="lantern" src="/assets/global/about/lant1.png"/>
            <img class="lantern" src="/assets/global/about/lant2.png"/>
            <img class="lantern" src="/assets/global/about/lant3.png"/>
            <img class="lantern" src="/assets/global/about/lant4.png"/>
            <img class="lantern" src="/assets/global/about/lant5.png"/>
            <img class="lantern" src="/assets/global/about/lant6.png"/>
            <img class="lantern" src="/assets/global/about/lant7.png"/>
        </div>
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
        <img id="posterOne" src="/assets/global/about/poster5.gif"/>
        <img id="posterTwo" src="/assets/global/about/poster6.gif"/>
        <img id="posterThree" src="/assets/global/about/poster1.gif"/>
        <img id="posterFour" src="/assets/global/about/poster9.gif"/>
        <div id="leftWallGlow"></div>
        <div id="rightWallGlow"></div>
        <div id="leftWall"></div>
        <div id="rightWall"></div>
        <div id="floor"></div>

        <img id="windowSketch" src="/assets/global/about/sketch.jpg"/>
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
        top: 11em
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
        z-index: 425
    #posterOne
        @extend #poster
        left: 7em
    #posterTwo   
        @extend #poster 
        left: -6em
        top: 15em
    #posterThree
        @extend #poster    
        left: 7em
        top: 18em
    #posterFour
        @extend #poster    
        left: -6em
        top: -3em
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
        z-index: 800
        position: absolute
        opacity: 0
        pointer-events: none
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
        top: 10.5em
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
    #floor    
        width: 100%
        position: absolute
        bottom: 0
        z-index: 400
        height: 40em
        background-image: linear-gradient(#791f6b, #211e40 40%)
    #wall
        background-color: #14131f
        width: 20em
        position: absolute
        z-index: 401
        top: -16.35em
        height: 85em
    #leftWall
        @extend #wall
        left: 0    
        transform: skewY(-41deg)
    #rightWall
        @extend #wall
        right: -0.05em
        transform: skewY(41deg)
    #wallGlow
        z-index: 450
        background-color: initial
    #leftWallGlow
        @extend #leftWall
        @extend #wallGlow
        background-image: linear-gradient(to left, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 90%)
    #rightWallGlow
        @extend #rightWall
        @extend #wallGlow
        background-image: linear-gradient(to right, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 90%)
    #lanternBox
        position: absolute
        top: 0em
        left: 0
        right: 0
        #wire
            position: absolute
            z-index: 600
            left: 0
            right: 0
            width: 65em
            margin: 0 auto
            pointer-events: none
        .lantern
            z-index: 601
            position: absolute
            width: 6em
            pointer-events: none
            &:nth-of-type(2)
                left: 18em
                top: 1em
            &:nth-of-type(3)
                left: 27.5em
                top: 2.5em
            &:nth-of-type(4)
                left: 37em
                top: 4em
            &:nth-of-type(5)
                left: 47em
                top: 4em
            &:nth-of-type(6)
                left: 56.5em
                top: 3em
            &:nth-of-type(7)
                left: 66em
                top: 2em
            &:nth-of-type(8)
                left: 76em
                top: .5em
    #lanternReflect
        @extend #lanternBox
        top: 1em
        z-index: 100
        opacity: .5
        .lantern
            &:nth-of-type(2)
                left: 15em
            &:nth-of-type(3)
                left: 25.5em
            &:nth-of-type(4)
                left: 36em
            &:nth-of-type(6)
                left: 57.5em
            &:nth-of-type(7)
                left: 68em
            &:nth-of-type(8)
                left: 79em
</style>