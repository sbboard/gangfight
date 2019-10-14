<template>
    <div id="arch" :style="[blockSize, fontSize]">
        <div id="pageTab">
            <div class="leftTab">L</div>
            <div class="middleText">MIDDLE</div>
            <div class="rightTab">R</div>
        </div>
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
            <div class="gameArt"></div>
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
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            theArchive: [1,2,3,4,5,6]
        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/category/project`)
        .then(response => (this.theArchive = response.data))
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
#arch
    background-image: url("/assets/global/projectArch/sketch.jpg")
    width: 100%
    height: 100%
    background-size: 90% 90%
    background-position: top center
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
        &:nth-of-type(4)
            left: 98em
            top: 12em
        &:nth-of-type(5)
            left: 95em
            top: 37em
        &:nth-of-type(6)
            left: 92em
            top: 62em
</style>
