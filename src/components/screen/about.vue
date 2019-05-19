<template>
    <div id="aboutUs" :style="fontSize">
        <!-- lanterns -->
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

        <!-- TV
        <img id="tv" src="/assets/global/about/tv.gif"/>
        <div id="screenBox">
            <img id="tvScreen" src="/assets/8summer/sidebar/2.jpg"/>
        </div>
        <div id="blackback"></div> -->

        <!-- bed
        <img id="bedCat" src="/assets/global/about/bedcat2.png"/>
        <img id="bed" src="/assets/global/about/bed3.png"/> -->

        <!-- action stuff -->
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

        <!-- walls -->
        <div class="room">
            <div class="cube">
                <div class="side right">
                    <div id="wallGlowRight"></div>
                </div>
                <div class="side left">
                    <div id="wallGlowLeft"></div>
                    <img id="posterOne" src="/assets/global/about/poster7.gif"/>
                    <img id="posterTwo" src="/assets/global/about/poster5.gif"/>
                    <img id="posterThree" src="/assets/global/about/poster1.gif"/>
                    <img id="posterFour" src="/assets/global/about/poster9.gif"/>
                    <img id="posterFive" src="/assets/global/about/poster6.gif">
                    <img id="posterSix" src="/assets/global/about/poster8.gif">
                </div>
                <!--<div class="side top"></div>-->
                <div class="side bottom">
                    <div id="floorGlow"></div>
                </div>
            </div>
        </div>

        <!-- window -->
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
import { Draggable } from 'draggable-vue-directive'
export default {
    directives: {
        Draggable,
    },
    data() {
        return {
            handleId: "handle-id",
            draggableValue: {
                handle: undefined
            }
        };
    },
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


.room
    perspective: 120em
    justify-content: center
    width: 100em
    top: -46em
    left: -.2em
    display: flex
    height: 100em
    perspective-origin: 50% 69%
    position: absolute
    z-index: 500
    align-items: center
    .cube 
        width: 50em
        transform-style: preserve-3d
        transform: rotateX(0deg) rotateY(0deg) translateZ(46.75em)
        .side
            position: absolute
            width: 50em
            height: 50em
            text-align: center
            background-color: #141521
        .right
            transform: rotateY(90deg) translateZ(25em)
            #wallGlowRight
                width: 100%
                height: 100%
                background: linear-gradient(to left, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 75%)
                z-index: 600
                position: absolute
        .left
            transform: rotateY(-90deg) translateZ(25em)
            background-color: #141521
            #poster
                position: absolute
                width: 14em
                transform: scaleX(-1)
            #posterOne
                @extend #poster
                left: 3em
            #posterTwo   
                @extend #poster 
                left: 18em
                top: 10em
            #posterThree
                @extend #poster  
                left: 3em
                top: 22.5em
            #posterFour
                @extend #poster 
                left: 18em
                top: -10em
            #posterFive
                @extend #poster 
                left: 34em
            #posterSix
                @extend #poster 
                left: 34em
                top: 20em
            #wallGlowLeft
                width: 100%
                height: 100%
                background: linear-gradient(to right, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 75%)
                z-index: 600
                position: absolute
        .bottom
            transform: rotateX(-90deg) translateZ(25em)
            #floorGlow
                width: 100%
                height: 100%
                background: linear-gradient(to top, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 75%)
                z-index: 600
                position: absolute

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
        left: 6em
        z-index: 600
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
            left: 8.25em
        &:nth-of-type(2)
            left: 10.5em
        color: $neonBlue
        @include boxGlow($neonBlue)
        &:hover
            color: white
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
            width: 62em
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
    #bed
        position: absolute
        z-index: 600
        width: 51em    
        bottom: 20em
        right: -10em
        filter: brightness(.95) contrast(1.25) hue-rotate(-290deg)
    #bedShadow
        width: 34em
        transform: skewX(44deg)
        position: absolute
        z-index: 599
        height: 24em
        opacity: .5
        background-color: black
        bottom: 0
        right: -20.5em
    #bedCat
        position: absolute
        z-index: 601
        top: 47em
        right: 14.75em
        width: 10em
        filter: hue-rotate(71deg) saturate(1.5)
    #tv
        z-index: 650
        position: absolute
        top: 49em
        left: 11em
        width: 23em
    #blackback    
        z-index: 648
        position: absolute
        top: 50em
        left: 15.2em
        width: 17.5em
        height: 16em
        transform: skew(-6deg)
        background-color: black
    #screenBox    
        z-index: 649
        position: absolute
        top: 51em
        left: 19.2em
        width: 23em
        perspective: 28em
        transform: rotate(-9deg)
        #tvScreen
            width: 14.05em
            transform: rotateY(35deg) rotateX(-23deg)
</style>