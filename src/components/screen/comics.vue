<template>
    <div id="arch" :style="[blockSize, fontSize]"> 
        <div class="contentBoxes" :style="blockSize" v-for="(item, id) in theArchive" :key="`${id}`">
            <div class="boxWrap">
                <p class="boxDate">{{item.date}}</p>
                <p class="titleName">
                    <span class="titleText">{{item.title}}</span>
                </p>
                <a :href="item.url||'http://www.google.com'">
                    <img :style="blockSize" :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            theArchive: []
        }
    },
    mounted () {
        axios
        .get(`${this.$store.getters.getAPI}/comics`)
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
    background-color: black
    width: 100%
    height: 100%
    line-height: 0
    .contentBoxes
        display: inline-block
        font-family: VCR
        position: relative
        overflow: hidden
        line-height: normal
        font-size: 2em
        color: white
        font-weight: 100
        background-image: url("/assets/global/homepage/pixel.png")
        animation: screenGlow 10s infinite
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
@keyframes screenGlow
    0%
        opacity: .9
    50%
        opacity: 1
    100%
        opacity: .9
</style>
