<template>
    <div id="homeBlock">
        <div id="gridBlock" :style="fontSize">
            <span class="latestTracks">Latest Tracks:</span>
            <div id="latestGrid">
                <!-- begin -->
                <div class="contentBoxes" :style="blockSize">
                    <p class="boxDate">03 . 15 . 18 </p>
                    <p class="titleName">
                        <span class="titleText">Xenoblade Chronicles 2 Team Planner</span>
                    </p>
                    <a href="http://gang-fight.com/projects/xenoblade/">
                        <img :style="blockSize" src="http://www.gang-fight.com/projects/thumbs/xeno.jpg" alt="Xenoblade Chronicles 2"/>
                    </a>
                </div>
                <div class="contentBoxes" :style="blockSize">
                    <p class="boxDate">03 . 15 . 18 </p>
                    <p class="titleName">
                        <span class="titleText">Xenoblade Chronicles 2 Team Planner</span>
                    </p>
                    <a href="http://gang-fight.com/projects/xenoblade/">
                        <img :style="blockSize" src="http://www.gang-fight.com/projects/thumbs/xeno.jpg" alt="Xenoblade Chronicles 2"/>
                    </a>
                </div>
                <div class="contentBoxes" :style="blockSize">
                    <p class="boxDate">03 . 15 . 18 </p>
                    <p class="titleName">
                        <span class="titleText">Xenoblade Chronicles 2 Team Planner</span>
                    </p>
                    <a href="http://gang-fight.com/projects/xenoblade/">
                        <img :style="blockSize" src="http://www.gang-fight.com/projects/thumbs/xeno.jpg" alt="Xenoblade Chronicles 2"/>
                    </a>
                </div>
                <div class="contentBoxes" :style="blockSize">
                    <p class="boxDate">03 . 15 . 18 </p>
                    <p class="titleName">
                        <span class="titleText">Xenoblade Chronicles 2 Team Planner</span>
                    </p>
                    <a href="http://gang-fight.com/projects/xenoblade/">
                        <img :style="blockSize" src="http://www.gang-fight.com/projects/thumbs/xeno.jpg" alt="Xenoblade Chronicles 2"/>
                    </a>
                </div>
                <!-- end -->
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

export default {
    data(){
        return{

        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/4`,        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true"
          }})
        .then(response => (console.log(response.data)))
    },
    computed: {
        blockSize(){
            return {width: '37'+this.$store.getters.getTaller,height: '37'+this.$store.getters.getTaller}
        },
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

#homeBlock
    display: flex
    flex-direction: column
    justify-content: center
    #city
        background-image: url('http://gang-fight.com/img/site/home/megapix2.png')
        background-position: bottom
        background-repeat: repeat-x
        background-size: 100% auto
        position: absolute
        z-index: -5
        height: 100%
        width: 100%
    #cityLights
        position: absolute
        z-index: -6
        height: 40%
        width: 100%
        position: absolute
        bottom: 0
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(81,82,241,0.1) 30%, rgba(255,0,129,0.9))
    #cityOfStars
        position: absolute
        z-index: -7
        width: 100%
        position: absolute
        bottom: 0px
        left: 0px
        height: 100%
        background-image: url(http://www.gang-fight.com/img/site/home/bg.jpg);
        margin: 0
        padding: 0
        background-size: cover
        background-attachment: fixed
        background-repeat: no-repeat
        background-position: center
        animation: starglow 10s infinite
    #cityBlues
        background: -webkit-radial-gradient(bottom, #121729, #020306 60%);
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
    #gridBlock
        width: 80%
        margin: 0 auto
        line-height: normal
        letter-spacing: 1.5px
        font-family: Yantramanav
        font-size: 16px
        .latestTracks
            margin-left: 3%
            color: $neonWhite
            font-size: 2.5em
            text-transform: lowercase
        #latestGrid
            line-height: 0
            font-size: 1.75em
            text-align: center
.contentBoxes
    display: inline-block
    position: relative
    overflow: hidden
    line-height: normal
    margin: .5vh
    font-size: 1em
    .boxDate
        position: absolute
        bottom: 0
        margin: 0
        padding: 5px 5px 0 5px
        right: 0
        background-color: rgba(0,0,0,0.75)
        pointer-events: none
        z-index: 5
        color: #3ca9ff
        text-decoration: none
    .titleName
        position: absolute
        text-transform: uppercase
        margin: 15px 0 0 15px
        text-align: left
        z-index: 6
        pointer-events: none
        display: none
        .titleText
            background-color: black
            padding: 0 3px 0 3px
            color: #F4225A
            text-decoration: none
    &:hover
        .titleName
            display: inline-block
        img
            filter: brightness(.5)
@keyframes starglow
    0%
        opacity:.2
    50%
        opacity:.3
    100%
        opacity:.2
</style>
