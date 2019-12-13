<template>
    <div id="arch" :style="[blockSize, fontSize]">
        <div id="pageTab" v-if="theArchive.length > postsPerPage">
            <div class="leftTab" :class="{'dead': currentPage == 0}" @click="changeNav(-1)"><i class="fas fa-arrow-circle-left"></i></div>
            <div class="middleText">創造的な作品 {{currentPage+1}}/{{totalPages.totalPages}}</div>
            <div class="rightTab" :class="{'dead': currentPage == totalPages.totalPages-1}" @click="changeNav(1)"><i class="fas fa-arrow-circle-right"></i></div>
        </div>
        <div id="opensign">
            <h2>OPEN</h2>
        </div>
        <div id="opensignTwo">
            <h2>OPEN</h2>
        </div>
        <img id="pollo" src="/assets/global/projectArch/pollo.png"/>
        <div id="streakOne"></div>
        <div id="streakTwo"></div>
        <div id="streakThree"></div>
        <img class="poster" id="posterOne" src="/assets/global/projectArch/poster1.jpg"/>
        <img class="poster" id="posterTwo" src="/assets/global/projectArch/poster2.jpg"/>
        <img class="poster" id="posterThree" src="/assets/global/projectArch/poster3.jpg"/>
        <img class="poster" id="posterFour" src="/assets/global/projectArch/poster4.jpg"/>
        <img class="poster" id="posterFive" src="/assets/global/projectArch/poster5.jpg"/>
        <div id="shelf"></div>
        <div id="gameLibrary">
            <div class="leftCol">
                <img class="gamerbox topRow" src="/assets/global/projectArch/gamebox/L1.jpg"/>
                <img class="gamerbox midRow" src="/assets/global/projectArch/gamebox/L2.jpg"/>
                <img class="gamerbox bottomRow" src="/assets/global/projectArch/gamebox/L3.jpg"/>
            </div>
            <div class="midCol">
                <img class="gamerbox topRow" src="/assets/global/projectArch/gamebox/M1.jpg"/>
                <img class="gamerbox midRow" src="/assets/global/projectArch/gamebox/R2.jpg"/>
                <img class="gamerbox bottomRow" src="/assets/global/projectArch/gamebox/M3.jpg"/>
            </div>
            <div class="rightCol">
                <img class="gamerbox midRow" src="/assets/global/projectArch/gamebox/R1.jpg"/>
                <img class="gamerbox topRow" src="/assets/global/projectArch/gamebox/R3.jpg"/>
                <img class="gamerbox bottomRow" src="/assets/global/projectArch/gamebox/M2.jpg"/>            </div>
            <div class="bench StopRow"></div>
            <div class="bench SmidRow"></div>
            <div class="bench SbottomRow"></div>
        </div>
        <div id="deskTop"></div>
        <div id="desk"></div>
        <div id="owner">
            <img id="mouth" src="/assets/global/projectArch/mouth-loop8.gif"/>
            <img id="girl" src="/assets/global/projectArch/shopowner0.png"/>
        </div>
        <a :href="item.url" class="gamePackage" v-for="(item, id) in theArchive.slice(currentPage*postsPerPage, currentPage*postsPerPage+postsPerPage)" :key="`${id}`">
            <div class="hook"></div>
            <div class="topPackage"></div>
            <h1>{{item.title}}</h1>
            <div id="priceSticker"><h2 v-html="item.updatedDate"></h2></div>
            <div class="gameboy">
                <div class="tall"></div>
                <div class="wide"></div>
            </div>
            <div class="greybar"></div>
            <div class="gameArt">
                <img :src="'/assets/contentImages/'+item.img" :alt="item.title"></div>
        </a>
        <div id="fakes">
            <div class="fakePackage">
                <div class="hook"></div>
                <div class="topPackage"></div>
                <div class="gameboy">
                    <div class="tall"></div>
                    <div class="wide"></div>
                </div>
                <div class="greybar"></div>
                <div class="gameArt">
                    <img :src="'/assets/global/projectArch/gameboy/' + gameFour + '.jpg'"/></div>
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
                    <img :src="'/assets/global/projectArch/gameboy/' + gameFour + '.jpg'"/></div>
            </div>
            <div class="fakePackage">
                <div class="hook"></div>
                <div class="topPackage"></div>
                <div class="gameboy">
                    <div class="tall"></div>
                    <div class="wide"></div>
                </div>
                <div class="greybar"></div>
                <div class="gameArt"></div>
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
export default {
    data(){
        return{
            theArchive: this.$store.getters.getArchive.filter(e => e.category == "project"),
            gameOne: 0,
            gameTwo: 1,
            gameThree: 2,
            gameFour: 3,
            currentPage: 0,
            postsPerPage: 6
        }
    },
    mounted () {
        this.gameOne = Math.floor(Math.random() * 10) + 1
        this.gameTwo = Math.floor(Math.random() * 10) + 1
        this.gameThree = Math.floor(Math.random() * 10) + 1
        this.gameFour = Math.floor(Math.random() * 10) + 1
    },
    methods: {
        formatDate(isoDate){
            let d = new Date(isoDate)
            let month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1
            let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            let year = d.getFullYear().toString().substring(2)
            let dString = `${month}/${date}<h3>20${year}</h3>`
            return dString
        },
        changeNav(num){
            this.currentPage += num
            this.gameOne = Math.floor(Math.random() * 10) + 1
            this.gameTwo = Math.floor(Math.random() * 10) + 1
            this.gameThree = Math.floor(Math.random() * 10) + 1
            this.gameFour = Math.floor(Math.random() * 10) + 1
        }
    },
    computed: {
        blockSize(){
            return {width: '25'+this.$store.getters.getTaller,height: '25'+this.$store.getters.getTaller}
        },
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
        totalPages(){
            let pagetotal = Math.floor(this.theArchive.length/this.postsPerPage)
            if(this.theArchive.length%this.postsPerPage!=0){
                pagetotal += 1
            }
            return {totalPages: pagetotal}
        },
    },
    watch: {
        theArchive(){
            for(let i=0;i<this.theArchive.length;i++){
                this.theArchive[i].updatedDate = this.formatDate(this.theArchive[i].updatedDate)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"


#arch.middleViewHigh
    transform: rotate(-6deg) scale(1.16) translateY(2em) translateX(-14em)
    .fakePackage
        filter: blur(.15em) drop-shadow(2px 4px 6px black)
    #owner
        transform: rotate(0deg) translateX(15em) translateY(0em) scale(.95)
    #shelf
        filter: drop-shadow(-1em 5em 6em black)
    .gamePackage
        h1
            -webkit-text-stroke-width: .5px
#owner
    position: absolute
    top: 14em
    left: 7em
    z-index: -11
    transform: rotate(-4deg)
    transition: transform .5s
    #girl
        width: 24.4em
    #mouth
        width: 10em
        position: absolute
        left: 11em
        top: 15em
#deskTop
    background-color: #eed415
    position: absolute
    z-index: -10
    left: -1em
    transform: skewY(-11deg)
    top: 48em
    width: 59em
    height: 3em
.dead
    visibility: hidden
#pollo
    position: absolute
    bottom: 9em
    left: -12em
    width: 42em
    opacity: .6
    transform: rotate(8deg)
    z-index: -1
    filter: hue-rotate(329deg)
    image-rendering: auto
    image-rendering: crisp-edges
    image-rendering: pixelated
#arch
    width: 100%
    height: 100%
    background-size: 90% 90%
    background-position: top center
    transition: transform .5s
    #gameLibrary
        position: absolute
        z-index: -12
        .gamerbox
            position: absolute
            width: 8em
            height: auto
            transform: rotate(-13deg)
            z-index: 100
            filter: sepia(.5) hue-rotate(103deg)
        .topRow
            top: 54em
        .midRow
            top: 69em
        .bottomRow
            top: 84em   
        .leftCol
            left: 33em
            position: absolute
        .midCol
            left: 43em
            position: absolute
            top: -2em
        .rightCol
            left: 53em
            position: absolute
            top: -4em
        .bench
            background-color: #389192
            width: 30em
            height: 1em
            position: absolute
            transform: rotate(-13deg)
            z-index: 101
        .StopRow
            top: 63em
            left: 32em
        .SmidRow
            top: 77.75em
            left: 33em
        .SbottomRow
            top: 93em
            left: 33.1em  
    #glass
        width: 100%
        height: 100%
        position: absolute
        background-color: white
        opacity: 0.1
        z-index: -899
    #streak
        background-color: white
        opacity: .3
        -webkit-transform: rotate(-30deg)
        transform: rotate(-39deg)
        width: 150em
        position: absolute
        z-index: -799
        left: -41em
    #streakOne
        @extend #streak
        height: 17em
        top: 0em
    #streakTwo
        @extend #streak
        height: 3em
        top: 21em
    #streakThree
        @extend #streak
        height: 7em
        top: 37em
    .poster
        position: absolute
        height: auto    
        width: 10em
        z-index: -12
        transform: rotate3d(-6, 195, -5, 154deg)
        filter: sepia(.5) hue-rotate(180deg)
    #posterOne
        left: 35em
        top: 4em
    #posterTwo
        left: -6em
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
        filter: blur(3px)
        position: absolute
        z-index: -900
        #city
            width: 172em
            position: absolute
            left: -17em
            z-index: -500
            top: -4em
        #blackbox
            width: 61em
            height: 29em
            z-index: -7
            background-image: linear-gradient(rgba(255, 0, 0, 0) -27%, black 36%)
            position: absolute
            top: 26em
            left: -1em
        #stars
            position: absolute
            z-index: -700
            left: -21em
            height: auto
            top: 0
            width: 100em
    #opensign
        position: absolute
        width: fit-content
        border: 1em double $lightNeonBlue
        border-radius: 4em
        z-index: -15
        left: -3em
        top: -2em
        position: absolute
        transform: rotate3d(-6, 195, -5, 154deg)
        @include boxGlow($neonBlue)
        pointer-events: none
        h2
            font-size: 10em
            margin: .1em
            font-family: Yantramanav
            color: $lightNeonBlue
            @include textGlow($neonBlue, 1px)
    #opensignTwo
        @extend #opensign
        left: -4em
        top: -3em
        opacity: .5
        z-index: -16
    #pageTab
        position: absolute
        left: 44em
        bottom: 12em
        width: 41em
        height: 4em
        -webkit-transform: rotate(7deg)
        transform: rotate(7deg)
        font-family: Montserrat
        z-index: 502
        display: flex
        justify-content: space-between
        align-items: center
        border: 1em double $lightNeonYellow
        @include boxGlow($neonYellow)
        color: $lightNeonYellow
        @include textGlow($neonYellow, 1px)
        background-color: rgba(0,0,0,.75)
        .middleText
            display: block
            font-size: 3em
        .leftTab
            @extend .middleText
            margin-left: .3em
            cursor: pointer
        .rightTab
            @extend .middleText
            margin-right: .3em
            cursor: pointer
    #desk
        position: absolute
        left: 0
        bottom: -5em
        background-image: linear-gradient(#399494, #2b1335)
        width: 68em
        height: 58em
        transform: skewY(-11deg)
        z-index: -100
    #shelf
        background-image: linear-gradient(#47d2bf, #5a337d)
        width: 58em
        position: absolute
        right: -13em
        top: 0
        height: 100em
        transform: skewX(-3deg)
        z-index: -1
        filter: drop-shadow(-2em 5em 13em black)
        transition: filter
    .gamePackage
        position: absolute
        width: 20em
        transform: rotate(7deg)
        height: 23em
        background-color: rgba(255,255,255,.5)
        z-index: 1
        filter: drop-shadow(2px 4px 6px black)
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
        h1
            z-index: 450
            position: absolute
            font-size: 2.5em
            top: 2.25em
            color: black
            -webkit-text-fill-color: white
            -webkit-text-stroke-width: 1px
            -webkit-text-stroke-color: black
            width: 7em
            left: .5em
            font-family: 'Permanent Marker', cursive
            transform: rotate(-5deg)
        #priceSticker
            background-color: $neonBlue
            width: 8em
            height: 8em
            bottom: 1em
            border-radius: 4em
            display: flex
            right: 1em
            justify-content: center
            overflow: hidden
            align-items: center
            position: absolute
            z-index: 400
            h2
                color: black
                font-family: 'Permanent Marker', cursive
                font-size: 2em
                transform: rotate(13deg)
        .hook
            margin: 0 auto
            position: absolute
            z-index: 2
            background-color: #404142
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
            //background-image: linear-gradient(#fff81d, #bf8951)
            background-image: linear-gradient($neonYellow, $neonOrange)
            top: 0
            z-index: 1
        .gameboy
            position: absolute
            top: 5em
            filter: drop-shadow(2px 4px 6px black)
            .tall
                height: 14em
                width: 12em
                top: 2em
                position: absolute
                left: 3em
                background-color: #8d8d8d
            .wide
                height: 12em
                width: 14em
                top: 4em
                position: absolute
                left: 3em
                background-color: #8d8d8d
        .greybar   
            width: 12em
            height: 10em
            background-color: #c6d0d2
            position: absolute
            top: 10em
            left: 4em
        .gameArt    
            width: 10em
            height: 10em
            background-color: #338586
            position: absolute
            top: 10em
            left: 5em
            img
                width: 100%
                height: 100%
    .fakePackage
        @extend .gamePackage
        transition: filter 1s
        z-index: -1
        &:nth-of-type(1)
            left: 98em
            top: 12em
        &:nth-of-type(2)
            left: 95em
            top: 37em
        &:nth-of-type(3)
            left: 92em
            top: 62em
        &:nth-of-type(4)
            left: 55em
            top: -20em
        &:nth-of-type(5)    
            left: 78em
            top: -17em
        &:nth-of-type(6)    
            left: 101em
            top: -14em
</style>
