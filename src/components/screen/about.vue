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
        <div class="ex1">
            <div class="cube">
                <div class="side right"></div>
                <div class="side left"></div>
                <!--<div class="side top"></div>-->
                <div class="side bottom"></div>
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


.ex1
    perspective: 86em
    justify-content: center
    width: 100em
    top: -17em
    display: flex
    height: 100em
    perspective-origin: 50% 59.35%
    position: absolute
    z-index: 500
    align-items: center

.cube 
    font-size: 4em
    width: 2em
    transform-style: preserve-3d
    transform: rotateX(-3deg) rotateY(0deg) translateZ(19.75em)

.side
    position: absolute
    width: 2em
    height: 2em
    background: rgba(100,100,100,0.5)
    border: 1px solid red
    text-align: center

.front
    transform: translateZ(1em)
.top
    transform: rotateX(90deg) translateZ(1em)
.right
    transform: rotateY(90deg) translateZ(1em)
    height: 3em
    top: -1em
.left
    transform: rotateY(-90deg) translateZ(1em)
    height: 3em
    top: -1em
.bottom
    transform: rotateX(-90deg) translateZ(1em)
.back
    transform: rotateY(-180deg) translateZ(1em)

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
    #floorWrap
        perspective: 57em
        position: absolute
        bottom: -28em
        z-index: 500
        #floorComplete
            background-color: red
            opacity: .5
            height: 100em
            width: 100em
            transform: rotateX(53deg) scale(1)
            #glowFloor
                height: 50em
                width: 100%
                background: linear-gradient(to bottom, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0))
    #rightWallWrap
        perspective: 57em
        position: absolute
        right: -28em
        z-index: 500
        #rightWallComplete
            background-color: blue
            height: 100em
            width: 100em
            transform: rotateY(53deg) scale(1)
            #wallGlowRight
                width: 100%
                height: 100%
                background: linear-gradient(to right, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 90%)
                z-index: 600
                position: absolute
    #leftWallWrap
        perspective: 100em
        position: absolute
        left: 0
        top: 0
        z-index: 500
        #leftWallComplete
            background-color: #141521
            top: 0em
            left: -4em
            position: absolute
            width: 29em
            height: 65.2em
            transform: rotateY(37deg)
            #wallGlowLeft
                width: 100%
                height: 100%
                background: linear-gradient(to left, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 90%)
                z-index: 600
                position: absolute
            #poster
                position: absolute
                width: 14em
            #posterOne
                @extend #poster
                right: 1.5em
            #posterTwo   
                @extend #poster 
                right: 17em
                top: 11em
            #posterThree
                @extend #poster  
                right: 1.5em
                top: 20.5em
            #posterFour
                @extend #poster 
                right: 17em
                top: -10em
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
            #wallGlow
                z-index: 450
                background-color: initial
            #leftWallGlow
                @extend #leftWall
                @extend #wallGlow
                background-image: linear-gradient(to left, rgba(191, 37, 159, 0.6), rgba(191, 37, 159, 0) 90%)
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