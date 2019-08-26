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
            <div id="logo">404: DRAKULA'S CULTURE CLUB</div>
            <div id="speechBubble" class="active">
            <div id="innerMouth"></div>
            <div id="speechProg"></div><div id="blackBox">█</div>
            <div id="speechText" class="hidden">What's up it's me -- Drakula. Thanks for visiting my club tonight. Feel free to browse my collection of worthwhile media while you're here.</div>
            </div>
            <div id="dracula">
                <div id="mouth"></div>
                <img src="/assets/global/404/draculaSketch.png" alt="Dracula - The King of Darkness"/>
            </div>
            <div id="gallery">
                <div id="topRow">X X X X</div>
                <div id="innerBox">
                    x
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
export default {
    name: 'DraculaCultureClub',
    data(){
        return{
            randoNum: 0,
            hour: 0
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

#gallery    
    position: absolute
    top: 21em
    left: 54em
    width: 41em
    height: 69em
    background-color: blue
    #topRow
        height: 6em
        display: flex
        justify-content: space-around
        align-items: center
    #innerBox    
        background-color: red
        height: 62em
        width: 39em
        display: block
        margin: 0 auto
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
    top: 3em
    font-family: VCR
    background-color: rgba(0,0,0,.7)
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

#speechBubble
    cursor: pointer
    background-color: transparentize($neonRed,.1)
    width: 45em
    top: 21em
    left: 5em
    border-radius: .5em
    z-index: 4
    position: absolute
    padding: 1em
    &:after    
        content: ''
        position: absolute
        bottom: 0
        left: 24em
        width: 0
        height: 0
        border: 3em solid transparent
        border-top-color: transparentize($neonRed,.1)
        border-bottom: 0
        border-left: 0
        margin-left: -5em
        margin-bottom: -3em
    #innerMouth
        width: 8em
        height: 10em
        background-image: url("/assets/global/404/iconClosedD.png")
        background-size: auto 100%
        background-repeat: no-repeat
        float: left
        margin-right: 1em
    #innerMouth.open
        background-image: url("/assets/global/404/iconOpenD.png")
        background-repeat: no-repeat
    .hidden
        display: none
    &.hidden
        display: none
    #speechProg
        display: inline
        font-size: 2em
        font-family: Yantramanav
        color: white
    #speechProg.hidden
        display: none
    #blackBox
        display: inline
        font-size: 2em
        color: white
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
        background-image: url(/assets/global/404/closedMouthSketch.png)
        width: 7.35em
        position: absolute
        background-repeat: no-repeat
        height: 9em
        top: 31.5em
        left: 9.5em
        background-size: 100% auto
    #mouth.open
        background-image: url("/assets/global/404/openMouthSketch.png")
@keyframes dracHover
    0%
        bottom: 8em
    100%
        bottom: 13em
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
