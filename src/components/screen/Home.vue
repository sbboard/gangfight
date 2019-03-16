<template>
    <div id="homeBlock">
        <div id="gridBlock">
            <span>Latest Tracks:</span>
            <div id="latestGrid">
                <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
                <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
                <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
                <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
            </div>
        </div>
        <div id="city"></div>
        <div id="cityLights"></div>
        <div id="cityOfStars"></div>
    </div>
</template>

<script>
export default {
    
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
        width: 100%;
        position: fixed;
        bottom: 0px;
        left: 0px;
        height: 100%;
        background-image: url(/img/site/home/bg.jpg);
        margin: 0 !important;
        padding: 0 !important;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-attachment: fixed;
        min-height: 60%;
        min-width: 40%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        background-position: center;
        margin-left: auto;
        margin-right: auto;
        animation: starglow 10s infinite;
        z-index: -4;
    h1
        text-align: center
        font-size: 3em
    #gridBlock
        width: 80%
        margin: 0 auto
        span
            margin-left: 1%
            color: $neonBlue
            font-size: 2.5vh
            font-family: Montserrat
            font-weight: 800
        #latestGrid
            line-height: 0
            img
                display: inline-block
                width: 48%
                height: auto
                margin: 1%
@keyframes starglow
    0%
        opacity:.1
    50%
        opacity:.15
    100%
        opacity:.1
</style>
