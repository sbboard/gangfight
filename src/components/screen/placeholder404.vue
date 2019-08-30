<template>
    <div :style="fontSize">
        <div id="dayMode" v-if="hour<17&&hour>5&&hour>30">
            <div class="fourText">
                <h1>404</h1>
                <h2>come back when it's darker</h2>
            </div>
            <iframe class="efron" :src="'https://www.youtube.com/embed/videoseries?list=PLa20yDzXOyGg9KigaXG3YsijSPLqHSw1C&amp;controls=0&amp;showinfo=0&amp;autoplay=1&mute=1&loop=1&index='+randoNum" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div id="cityLights"></div>
            <div id="cityOfStars"></div>
            <div id="cityBlues"></div>
        </div>
        <div id="nightMode" v-else>
            <div id="logo">404 DRAKULA'S CULTURE CLUB</div>
            <div id="speechBubble" class="active">
                <div id="innerMouth"></div>
                <div id="speechProg"></div><div id="blackBox">█</div>
                <div id="speechText" class="hidden">What's up it's me -- Drakula. Thanks for visiting my club tonight. Feel free to browse my collection of worthwhile media while you're here.</div>
                <div id="tailBorder"></div>
            </div>
            <div id="dracula">
                <div id="mouth"></div>
                <img src="/assets/global/404/draculaa.png" alt="Dracula - The King of Darkness"/>
            </div>
            <div id="gallery">
                <div id="boxRipple"></div>
                <div id="innerBox">
                    <ul v-if="selected==''">
                        <li v-for="(items,id) in sortByYear(cat)" :key="`${id}`" @click="changeSelected(items)">
                            {{items.name}}
                        </li>
                    </ul>
                    <div id="mediaDisplay" v-else>
                        <h1>{{selected.name}}</h1>
                        <h2>{{selected.creator}}</h2>
                        <h3>{{selected.year}}</h3>
                        <img class="mediaPic" :src="selected.pic"/>
                        <p>{{selected.desc}}</p>
                    </div>
                </div>
                <div id="topRow"> 
                    <!--this is a secret row-->
                    <img src="/assets/global/404/pmsprite.png">
                    <img src="/assets/global/404/pmsprite.png">
                    <img src="/assets/global/404/pmsprite.png">
                </div>
                <div id="iconsRow">
                    <img @click="changeCat('video')" src="/assets/global/404/vhs.png">
                    <img @click="changeCat('music')" src="/assets/global/404/audioSec.png">
                    <img @click="changeCat('game')" src="/assets/global/404/gbb.png">
                    <img @click="changeCat('')" src="/assets/global/404/pmsprite.png">
                </div>
            </div>
            <div id="horizon"></div>
            <div id="blackness"></div>
            <img id="moon" src="/assets/global/404/moon.png"/>
            <div id="sky"></div>
        </div>
    </div>
</template>

<script>
import media from '../../mediaRec.json'

export default {
    name: 'DraculaCultureClub',
    data(){
        return{
            randoNum: 0,
            hour: 0,
            mediaGallery: media.media,
            selected: "",
            cat: ""
        }
    },
    created(){
        let today = new Date();
        this.hour = today.getHours()
        //generate rando Nos for YouTube Vid
        this.randoNum = Math.floor(Math.random() * 10) + 1
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    methods:{
        sortByYear(category){
            let newGall = []
            for(let i=0;i<this.mediaGallery.length;i++){
                if(this.mediaGallery[i].category.includes(category)){
                    newGall.push(this.mediaGallery[i])
                }
            }
            newGall.sort(function(a,b){
                return b.year - a.year;
            })
            return newGall
        },
        changeCat(category){
            this.cat = category
            this.selected = ""
        },
        changeSelected(select){
            this.selected = select
        }
    },
    mounted(){
        const talk = document.getElementById("speechText").textContent;
        let bubble = document.getElementById("speechBubble")
        let speechProg = document.getElementById("speechProg")
        let mouth = document.getElementById("mouth")
        let blackBox = document.getElementById("blackBox")
        let innerMouth = document.getElementById("innerMouth")
        let i = 0
        let normSpeech = 150

        function speechEngine() {
        let timeStop = normSpeech

        function myLoop() {
            setTimeout(function() {
            speechProg.innerHTML += talk[i]
            if (mouth.classList.contains("open")) {
                mouth.classList.remove("open");
                innerMouth.classList.remove("open");
            } else {
                mouth.classList.add("open");
                innerMouth.classList.add("open");
            }
            if (talk[i] == "?" || talk[i] == "!" || talk[i] == "." || talk[i] == "-") {
                timeStop = normSpeech * 2
                mouth.classList.remove("open");
                innerMouth.classList.remove("open");
            }
            else if(talk[i] == " "){
                mouth.classList.remove("open");
                innerMouth.classList.remove("open");
                timeStop = normSpeech
            }
            else {
                timeStop = normSpeech
            }
            i++;
            if (i < talk.length) {
                myLoop();
            }
            else{
                mouth.classList.remove("open");
                    bubble.classList.remove("active")
                blackBox.classList.add("hidden");
            }
            }, timeStop)
        }
        myLoop()
        }

        function bubbleClick(){
        if(bubble.classList.contains("active")){
            bubble.classList.remove("active")
            let textbox = document.getElementById("speechText")
            i = talk.length-1
            mouth.classList.remove("open")
            speechProg.classList.add("hidden");
            textbox.classList.remove("hidden");
            bubble.classList.remove("active")
            blackBox.classList.add("hidden");
        }
        else{
            bubble.classList.add("hidden")
        }
        }

        document.getElementById("speechBubble").addEventListener("click", bubbleClick);
        speechEngine()

    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

#mediaDisplay
    color: $neonBlue
    padding: .5em
    h1
        text-align: center
        font-size: 1.5em
        color: $neonRed
    h2
        text-align: center
        font-size: 1.25em
    h3
        text-align: center
        font-size: 1.25em
    .mediaPic
        margin: .5em auto
        width: 50%
        height: auto
        text-align: center
        display: block
#boxRipple
    background-image: url("/assets/global/404/ripple.png")
    height: 4em
    width: 100%
    bottom: 12.77em
    background-repeat: no-repeat
    position: absolute
    pointer-events: none
    z-index: 2
    background-size: 100% 100%
    display: none
#gallery    
    position: absolute
    bottom: 5.75em
    left: 53em
    width: 41em
    padding: 1em 1em
    transform: skewY(-6deg)
    font-family: VCR
    color: $neonGreen
    #topRow
        display: flex
        justify-content: space-evenly
        align-items: center
        pointer-events: none
        opacity: 0
        img
            max-height: 10em
            margin: 2em 0 0 0
    #iconsRow
        @extend #topRow
        position: absolute
        z-index: 3
        bottom: 7em
        width: 100%
        opacity: 1
        img
            pointer-events: all
            cursor: pointer
            transform: skewY(10deg)    
            width: 8em
            height: 10em
            &:hover
                animation: dip .5s alternate infinite
    #innerBox        
        display: block
        overflow: auto
        max-height: 33.5em
        font-size: 2em
        margin: 0 auto
        padding-bottom: 1.75em
        @include boxGlow($neonGreen)
        border: 1px solid $neonGreen
        &::-webkit-scrollbar 
            width: .75em
        &::-webkit-scrollbar-track
            background: $lightNeonGreen
        &::-webkit-scrollbar-thumb
            background: $neonGreen
        &::-webkit-scrollbar-thumb:hover
            background: darken($neonGreen,20)
        ul
            li
                padding: .25em .5em
                cursor: pointer
                background-color: rgba(0,0,0,.7)
                &:hover
                    background-color: $neonBlue
                    color: black
#logo
    color: $neonRed
    width: 18em
    display: block
    font-size: 5em
    left: 0
    right: 0
    margin: 0 auto
    text-align: center
    position: absolute
    top: .25em
    font-family: VCR
    background-color: rgba(0,0,0,.7)
    border: 1px solid $neonRed
    @include boxGlow($neonRed)
#horizon
    background-image: url(/assets/global/homepage/rochester.png)
    width: 100%
    z-index: -1
    background-repeat: repeat-x
    background-size: 84%
    position: absolute
    top: 17em
    filter: brightness(0)
    height: 36em
#blackness    
    position: absolute
    width: 100%
    height: 80em
    display: block
    background-color: black
    top: 36em
    z-index: -1
#moon    
    position: absolute
    top: 2em
    width: 54em
    margin: 0 auto
    display: block
    z-index: -2
    right: 0
    left: 0
    filter: brightness(1.1) sepia(1)
#sky
    width: 100%
    height: 40em
    position: absolute
    top: 0
    background-image: linear-gradient(#350000, #ff0076)
    z-index: -3
#tailBorder
    position: absolute
    top: 12em
    z-index: 0
    left: -.125em
    &:after    
        content: ''
        position: absolute
        bottom: 0
        left: 24em
        width: 0
        height: 0
        border: 3.5em solid transparent
        border-top-color: $neonBlue
        border-bottom: 0
        border-left: 0
        margin-left: -5.125em
        margin-bottom: -3.5em
#speechBubble
    cursor: pointer
    //background-color: transparentize($neonBlue,.1)
    //color: white
    width: 45em
    border-radius: .5em
    top: 13em
    left: 5em
    z-index: 4
    position: absolute
    padding: 1em
    color: $neonBlue
    background-color: black
    border: 1px solid $neonBlue
    @include boxGlow($neonBlue)
    &:after    
        content: ''
        position: absolute
        bottom: 0
        left: 24em
        width: 0
        height: 0
        border: 3em solid transparent
        border-top-color: black
        border-bottom: 0
        border-left: 0
        margin-left: -5em
        margin-bottom: -3em
    #innerMouth
        width: 8em
        height: 10em
        background-image: url("/assets/global/404/iconClosedD2.png")
        background-size: auto 100%
        background-repeat: no-repeat
        float: left
        margin-right: 1em
    #innerMouth.open
        background-image: url("/assets/global/404/iconOpenD2.png")
        background-repeat: no-repeat
    .hidden
        display: none
    &.hidden
        display: none
    #speechProg
        display: inline
        font-size: 2em
        font-family: Yantramanav
    #speechProg.hidden
        display: none
    #blackBox
        display: inline
        font-size: 2em
    #blackBox.hidden
        display: none
    #speechText
        @extend #speechProg
#dracula
    position: absolute
    width: 51em
    left: 2.5em
    animation: dracHover 2.5s alternate infinite
    img
        width: 100%
    #mouth
        background-image: url(/assets/global/404/closedMouthSketch2.png)
        width: 6.35em
        position: absolute
        background-repeat: no-repeat
        height: 9em
        top: 32em
        left: 10em
        background-size: 100% auto
    #mouth.open
        background-image: url("/assets/global/404/openMouthSketch2.png")
@keyframes dracHover
    0%
        bottom: 8em
    100%
        bottom: 13em
@keyframes dip
    0%
        margin-top: 2em
    100%
        margin-top: 0
#dayMode
    height: 100%
    width: 100%
.fourText
    height: 100%
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    z-index: 10
    position: absolute
    flex-direction: column
    h1
        font-family: Montserrat
        color: $neonRed
        font-size: 4em
    h2
        font-size: 2em
        font-family: Montserrat
        color: $neonRed
        text-align: center
        width: 7em
iframe
    width: 100%
    height: 100%
    opacity: .5
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
</style>
