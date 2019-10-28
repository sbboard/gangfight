<template>
    <div id="arch" :style="[blockSize, fontSize]">
        <div id="pageTab">
            <div class="leftTab">L</div>
            <div class="middleText">MIDDLE</div>
            <div class="rightTab">R</div>
        </div>
        <div id="opensign">
            <h2>OPEN</h2>
        </div>
        <img class="poster" id="posterOne" src="/assets/global/projectArch/poster1.jpg"/>
        <img class="poster" id="posterTwo" src="/assets/global/projectArch/poster2.jpg"/>
        <img class="poster" id="posterThree" src="/assets/global/projectArch/poster3.jpg"/>
        <img class="poster" id="posterFour" src="/assets/global/projectArch/poster4.jpg"/>
        <img class="poster" id="posterFive" src="/assets/global/projectArch/poster5.jpg"/>
        <div id="shelf"></div>
        <div id="desk"></div>
        <a href="#" class="gamePackage" v-for="(item, id) in theArchive" :key="`${id}`">
            <div class="hook"></div>
            <div class="topPackage"></div>
            <div class="gameboy">
                <div class="tall"></div>
                <div class="wide"></div>
            </div>
            <div class="greybar"></div>
            <div class="gameArt"></div>
        </a>
        <div class="fakePackage">
            <div class="hook"></div>
            <div class="topPackage"></div>
            <div class="gameboy">
                <div class="tall"></div>
                <div class="wide"></div>
            </div>
            <div class="greybar"></div>
            <div class="gameArt">
                <img :src="'/assets/global/projectArch/gameboy/' + gameThree + '.jpg'"/></div>
        </div>
        <div class="fakePackage">
            <div class="hook"></div>
            <div class="topPackage"></div>
            <div class="gameboy">
                <div class="tall"></div>
                <div class="wide"></div>
            </div>
            <div class="greybar"></div>
            <div class="gameArt">
                <img :src="'/assets/global/projectArch/gameboy/' + gameTwo + '.jpg'"/></div>
        </div>
        <div class="fakePackage">
            <div class="hook"></div>
            <div class="topPackage"></div>
            <div class="gameboy">
                <div class="tall"></div>
                <div class="wide"></div>
            </div>
            <div class="greybar"></div>
            <div class="gameArt">
                <img :src="'/assets/global/projectArch/gameboy/' + gameOne + '.jpg'"/>
            </div>
        </div>
        <div id="cityscape">
            <img id="city" src="/assets/global/homepage/rochester.png"/>
            <div id="blackbox"></div>
            <img id="stars" src="/assets/global/homepage/starsbg.jpg"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            theArchive: [1,2,3,4,5,6],
            gameOne: 0,
            gameTwo: 1,
            gameThree: 2
        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/category/project`)
        .then(response => (this.theArchive = response.data))

        this.gameOne = Math.floor(Math.random() * 9) + 1
        this.gameTwo = Math.floor(Math.random() * 9) + 1
        this.gameThree = Math.floor(Math.random() * 9) + 1
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
            return {width: '25'+this.$store.getters.getTaller,height: '25'+this.$store.getters.getTaller}
        },
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    watch: {
        theArchive(){
            for(let i=0;i<this.theArchive.length;i++){
                this.theArchive[i].date = this.formatDate(this.theArchive[i].date)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
#arch
    background-image: url("/assets/global/projectArch/sketch.jpg")
    width: 100%
    height: 100%
    background-size: 90% 90%
    background-position: top center
    .poster
        position: absolute
        height: auto    
        width: 10em
        z-index: 40
        transform: rotate3d(-6, 195, -5, 154deg)
    #posterOne
        left: 35em
        top: 4em
    #posterTwo
        left: 19em
        top: 14em
    #posterThree
        top: 14em
        left: 46em
    #posterFour
        top: 35em
        left: -1em
    #posterFive
        top: 31em
        width: auto
        left: 34em
        height: 10em
    #cityscape
        //display: none
        #city
            width: 172em
            position: absolute
            left: -17em
            z-index: 3
            top: -4em
        #blackbox
            width: 61em
            height: 29em
            z-index: 10
            background-image: linear-gradient(rgba(255, 0, 0, 0) -27%, black 36%)
            position: absolute
            top: 26em
            left: -1em
        #stars
            position: absolute
            z-index: 1
            left: -21em
            height: auto
            top: 0
            width: 100em
    #opensign
        position: absolute
        width: fit-content
        border: 1em double $neonRed
        border-radius: 4em
        z-index: 100
        left: -3em
        top: -2em
        position: absolute
        transform: rotate3d(-6, 195, -5, 154deg)
        @include boxGlow($neonRed)
        h2
            font-size: 10em
            margin: .1em
            font-family: Yantramanav
            color: $neonRed
    #pageTab
        background-color: red
        position: absolute
        left: 44em
        bottom: 12em
        width: 43em
        height: 6em
        -webkit-transform: rotate(7deg)
        transform: rotate(7deg)
        z-index: 502
        display: flex
        justify-content: space-between
        align-items: center
        .leftTab
            display: block
            margin-left: 1em
        .middleText
            display: block
            font-size: 3em
        .rightTab
            display: block
            margin-right: 1em
    #desk
        position: absolute
        left: 0
        bottom: -5em
        background-color: purple
        width: 68em
        height: 58em
        transform: skewY(-11deg)
        z-index: 50
    #shelf
        background-color: pink
        width: 48em
        position: absolute
        right: -3em
        top: 0
        height: 100em
        transform: skewX(-3deg)
        z-index: 501
    .gamePackage
        position: absolute
        width: 20em
        transform: rotate(7deg)
        height: 23em
        background-color: red
        z-index: 502
        &:nth-of-type(1)
            left: 52em
            top: 6em
        &:nth-of-type(2)
            left: 75em
            top: 9em
        &:nth-of-type(3)
            left: 49em
            top: 31em
        &:nth-of-type(4)
            left: 72em
            top: 34em
        &:nth-of-type(5)
            left: 46em
            top: 56em
        &:nth-of-type(6)
            left: 69em
            top: 59em
        .hook
            margin: 0 auto
            position: absolute
            z-index: 2
            background-color: blue
            top: -1em
            left: 0
            right: 0
            width: 3em
            border-radius: 7em
            height: 3em
        .topPackage
            position: absolute
            width: 100%
            height: 4.5em
            background-color: yellow
            top: 0
            z-index: 1
        .gameboy
            position: absolute
            top: 5em
            .tall
                height: 14em
                width: 12em
                top: 2em
                position: absolute
                left: 3em
                background-color: yellow
            .wide
                height: 12em
                width: 14em
                top: 4em
                position: absolute
                left: 3em
                background-color: yellow
        .greybar   
            width: 12em
            height: 10em
            background-color: blue
            position: absolute
            top: 10em
            left: 4em
        .gameArt    
            width: 10em
            height: 10em
            background-color: green
            position: absolute
            top: 10em
            left: 5em
            img
                width: 100%
                height: 100%
    .fakePackage
        @extend .gamePackage
        &:nth-of-type(7)
            left: 98em
            top: 12em
        &:nth-of-type(5)
            left: 95em
            top: 37em
        &:nth-of-type(6)
            left: 92em
            top: 62em
</style>
