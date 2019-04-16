<template>
    <div id="homeBlock">
        <div id="gridBlock" :style="fontSize">
            <span class="latestTracks">Latest Tracks:</span>
            <div id="latestGrid">
                <!-- begin -->
                <div class="contentBoxes" :style="blockSize" v-for="(item, id) in theFour" :key="`${id}`">
                <div class="boxWrap">
                <p class="boxDate">{{item.date}}</p>
                <p class="titleName">
                    <span class="titleText">{{item.title}}</span>
                </p>
                <a :href="item.url||'#'">
                    <img :style="blockSize" :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                </a>
            </div>
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
            theFour: [
                        {"_id":"0","title":"HOLD ON","img":"tvload.jpg","url":"#","date":"01:01:0000","__v":0},
                        {"_id":"0","title":"WHAT","img":"tvload.jpg","url":"#","date":"01:01:0000","__v":0},
                        {"_id":"0","title":"UH...","img":"tvload.jpg","url":"#","date":"01:01:0000","__v":0},
                        {"_id":"0","title":"OH NO","img":"tvload.jpg","url":"#","date":"01:01:0000","__v":0},
                        ]
        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/4`)
        .then(response => (this.theFour = response.data))
    },
    methods: {
        formatDate(isoDate){
            let d = new Date(isoDate)
            let month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1
            let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            let year = d.getFullYear().toString().substring(2)
            let dString = `${month}:${date}:${year}`
            return dString
        }
    },
    computed: {
        blockSize(){
            return {width: '37'+this.$store.getters.getTaller,height: '37'+this.$store.getters.getTaller}
        },
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    watch: {
        theFour(){
            for(let i=0;i<this.theFour.length;i++){
                this.theFour[i].date = this.formatDate(this.theFour[i].date)
            }
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
        background-image: url('/assets/global/homepage/rochester.png')
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
        background-image: url(/assets/global/homepage/starsbg.jpg);
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
    font-family: VCR
    position: relative
    overflow: hidden
    line-height: normal
    margin: .5vh
    font-size: 2em
    color: white
    font-weight: 100
    //background-image: url('/assets/global/homepage/pixel2.png')
    animation: screenGlow 10s infinite
    border-radius: .2em
    .boxWrap
        opacity: .75
    .boxDate
        position: absolute
        bottom: 0
        margin: 0
        padding: 0 3px 0 3px
        right: 0
        background-color: black
        pointer-events: none
        z-index: 5
        text-decoration: none
        margin: .5em
    .titleName
        position: absolute
        text-transform: uppercase
        text-align: left
        z-index: 6
        pointer-events: none
        margin: .5em
        display: none
        .titleText
            background-color: black
            padding: 0 3px 0 3px
            text-decoration: none
    &:hover
        opacity: 1
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
@keyframes screenGlow
    0%
        opacity: .9
    50%
        opacity: 1
    100%
        opacity: .9
</style>
