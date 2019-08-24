<template>
    <div>
        <div id="dayMode" v-if="hour<17&&hour>5">
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
            <div id="speechBubble" class="active">
            <div id="faceBox"><div id="eyes">. .</div><div id="innerMouth"></div>
            </div>
            <div id="speechProg"></div><div id="blackBox">█</div>
            <div id="speechText" class="hidden">What's up it's me -- Dracula. Thanks for visiting my club tonight. Feel free to browse my collection of worthwhile media while you're here.</div>
            </div>
            <div id="dracula">
                <div id="mouth"></div>
                <img src="/assets/global/404/draculaSketch.png" alt="Dracula - The King of Darkness"/>
            </div>
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
    mounted(){
        const talk = document.getElementById("speechText").textContent;
        let bubble = document.getElementById("speechBubble")
        let speechProg = document.getElementById("speechProg")
        let mouth = document.getElementById("mouth")
        let blackBox = document.getElementById("blackBox")
        let innerMouth = document.getElementById("innerMouth")
        let i = 0
        let normSpeech = 75

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
                timeStop = normSpeech * 4
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

#speechBubble
  border: 1px solid black
  cursor: pointer
  #faceBox
    float: left
    width: 50px
    min-height: 2em
    height: -webkit-fill-available
    display: block
    #eyes
      display: inline-block
      width: 1em
    #innerMouth::before
      content: "-"
    #innerMouth.open::before
      content: "o"
  .hidden
    display: none
  &.hidden
    display: none
  #speechProg
    display: inline
  #speechProg.hidden
    display: none
  #blackBox
    display: inline
  #blackBox.hidden
    display: none
#dracula
    position: absolute
    width: 53vw
    left: 2vw
    top: 13vh
    img
        width: 100%
        left: 4em
        top: 14em
    #mouth
        background-image: url("/assets/global/404/closedMouthSketch.png")
        width: 3.35em
        position: absolute
        background-repeat: no-repeat
        height: 3em
        top: 15.5em
        left: 4.7em
        background-size: 100% auto
    #mouth.open
        background-image: url("/assets/global/404/openMouthSketch.png")
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
