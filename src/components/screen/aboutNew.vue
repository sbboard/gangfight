<template>
    <div id="aboutUs" :style="fontSize">
        <div id="screenWall">
            <div class="screenWrap">
            <div class="screen">
                <img src="/assets/global/newAbout/screens/2.jpg"/>
                <img src="/assets/global/newAbout/screens/3.png"/>
            </div></div>
            <div class="screenWrap">
            <div class="screen">
                <img src="/assets/global/newAbout/screens/4.jpg"/>
                <img src="/assets/global/newAbout/screens/5.jpg"/>
                <img src="/assets/global/newAbout/screens/6.jpg"/>
            </div></div>
            <div class="screenWrap">
            <div class="screen">
                <img src="/assets/global/newAbout/screens/1.jpg"/>
                <img src="/assets/global/newAbout/screens/7.jpg"/>
                <img src="/assets/global/newAbout/screens/8.jpg"/>
            </div></div>
            <div class="screenWrap">
            <div class="screen">
                <img src="/assets/global/newAbout/screens/9.jpg"/>
                <img src="/assets/global/newAbout/screens/10.jpg"/>
                <img src="/assets/global/newAbout/screens/11.jpg"/>
            </div></div>
            <div class="screenWrap">
            <div class="screen">
                <img src="/assets/global/newAbout/screens/12.jpg"/>
                <img src="/assets/global/newAbout/screens/13.jpg"/>
                <img src="/assets/global/newAbout/screens/14.jpg"/>
            </div></div>
        </div>
        <div id="topLight"></div>
        <div id="bottomLight"></div>
        <div id="walls">
            <div class="top"></div>
            <div class="right"></div>
            <div class="bottom"></div>
            <div class="left"></div>
        </div>
        <div id="sketch"></div>

        <!-- action stuff -->
        <div id="descBox">
            <span>Gang Fight is a digital media brand based in the United States of America.
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
        <a href="#" class="socMedia" @click="spawnpop('email')">
        <i class="fas fa-envelope"></i></a>

        <!-- window -->
        <div id="window">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        }
    },
    methods: {
        
    },
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

#screenWall
    z-index: 900
    position: absolute
    top: -6em
    height: 100em
    width: 100em
    .screenWrap
        transform: rotate(53deg)
        .screen
            display: block
            position: absolute
            width: 80em
            height: 19em
            transform: perspective(55em) rotateY(45deg)
            top: 6em
            left: 4em
            text-align: right
            z-index: 900
            img
                height: 19em
                width: 24em
                margin-left: 1.5em
                display: inline-block
                filter: sepia(0.85) hue-rotate(170deg) brightness(1.5)
                @include boxGlow($neonBlue)
                opacity: .85
        &:nth-child(2)
            transform: rotate(31deg)
            .screen
                transform: perspective(55em) rotateY(45deg)
                top: 23em
                left: -5em
        &:nth-child(3)
            transform: rotate(8deg)
            .screen
                transform: perspective(55em) rotateY(45deg)
                top: 35em
                left: -21em
        &:nth-child(4)
            transform: rotate(-15deg)
            .screen
                transform: perspective(55em) rotateY(45deg)
                top: 40em
                left: -40em
        &:nth-child(5)
            transform: rotate(-38deg)
            .screen
                transform: perspective(55em) rotateY(45deg)
                top: 37em
                left: -60em

#aboutUs
    #sketch
        width: 100%
        height: 100%
        background-image: url(/assets/global/newAbout/sketch.jpg)
        background-size: 140% 140%
        background-position: -18em -20em
        z-index: 0
        //opacity: 0
    #descBox
        position: absolute    
        color: $neonBlue
        background-color: rgba(black,.8)
        width: 21em
        left: 19.5em
        padding: 1em
        top: 17em
        transform: rotate(-1deg)
        font-size: 1.75em
        font-family: Yantramanav
        z-index: 500
        @include boxGlow($neonBlue)
        span
            display: block
            &:first-child
                margin-bottom: .25em
    .socMedia    
        left: 10.25em
        z-index: 700
        top: 16.35em
        font-size: 3.35em
        background-color: rgba(black,.8)
        padding: .5em
        border-radius: 1em
        position: absolute
        width: 1em
        text-align: center
        height: 1em
        &:nth-of-type(1)
            left: 12.5em
        &:nth-of-type(2)
            left: 14.75em
        color: $neonBlue
        @include boxGlow($neonBlue)
        &:hover
            color: white
    #walls
        opacity: 1
        z-index: 100
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        .wallType
            background-color: black
            position: absolute
        .top
            @extend .wallType
            top: 0
            width: 100%
            height: 9em
        .right
            @extend .wallType
            right: 0
            height: 100%
            width: 21em
        .bottom
            @extend .wallType
            bottom: 0
            width: 100%
            height: 33em
        .left
            @extend .wallType
            left: 0
            height: 100%
            width: 23em
    #light
        background-image: linear-gradient(to right, transparentize($neonBlue,.25) , rgba(0,0,0,0))
        width: 18.5em
        position: absolute
        z-index: 890
    #topLight
        @extend #light
        height: 9em
        left: 48em
        top: .85em
        transform: perspective(1em) rotateX(177deg)
    #bottomLight
        @extend #light
        height: 33em
        transform: perspective(10px) rotateX(6.25deg)
        left: 36.49em
        bottom: 10.1em
    #window
        //opacity: 0
        #windowTint    
            width: 100%
            height: 100%
            position: absolute
            background-color: white
            opacity: 0.1
            z-index: 75
            left: 0
            top: 0
        #windowStreaks
            background-color: white
            opacity: .3
            transform: rotate(-30deg)
            width: 100em
            position: absolute
            z-index: 76
            left: 5em
        #windowStreakOne
            @extend #windowStreaks
            height: 17em
            top: 17em
        #windowStreakTwo
            @extend #windowStreaks
            height: 4em
            top: 40em
        #rochesterThree  
            position: absolute
            width: 200em
            z-index: 51
            margin: 0 auto
            left: -96em
            transform: scaleX(-1)
            top: 23em
        #rochester    
            position: absolute
            width: 170em
            z-index: 50
            margin: 0 auto
            left: -24em
            top: 19em
            filter: brightness(.8)
        #rochesterTwo    
            left: 5em
            width: 140em
            top: 15em
            position: absolute
            transform: scaleX(-1)
            filter: brightness(.6)
            z-index: 49
        #stars    
            width: 100%
            left: 6em
            height: 100%
            z-index: 1
            left: 0
            top: 0
            position: absolute
        #catStat
            position: absolute
            right: 14em
            top: 4em
            width: 22em
            z-index: 49
</style>