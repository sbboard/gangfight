<template>
    <div>
        <div id="dayMode" v-if="hour<17||hour>5">
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
            What's up it's me -- Dracula. Thanks for visiting my club tonight. Feel free to browse my collection of worthwhile media while you're here.
        </div>
    </div>
</template>

<script>
export default {
    name: '404',
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
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

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
