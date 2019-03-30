<template>
<div id="navBox" :class="[(this.$store.getters.getTaller == 'vh')?'desktop':'mobile']">
    <span class="button" onclick="clickNav()">M</span>
    <nav>
        <a href="#" class="redLink">Gang Fight</a>
        <a href="#" class="redLink">About Us</a>
        <a href="#" class="blueLink">Comics</a>
        <a href="#" class="blueLink">Projects</a>
    </nav>
</div>
</template>

<script>
export default {
    name: "navigation",
    data(){
        return{

        }
    },
    methods:{
        clickNav(){
            // eslint-disable-next-line
            console.log("boom")
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

$transBlack: rgba(black,.8)
#navBox
    position: fixed
    bottom: 0
    z-index: 10
    background-color: $transBlack
    font-family: Montserrat
    text-transform: uppercase
    .linkFormat
        text-decoration: none
        font-weight: 600
    .redLink
        @extend .linkFormat
        color: $neonRed
        &:hover
            color: $lightNeonRed
    .blueLink
        @extend .linkFormat
        color: $neonBlue
        &:hover
            color: $lightNeonBlue
    .button
        cursor: pointer
#navBox.mobile
    color: $neonRed
    font-size: 3em
    position: fixed
    bottom: 0
    right: 0
    border-top-left-radius: .5em
    width: fit-content
    nav
        display: none
    .button
        padding: .5em
#navBox.mobile.open
    height: 100%
    width: 100%
    padding: 0
    border-top-left-radius: 0
    display: flex
    justify-content: center
    align-items: center
    .button    
        position: fixed
        top: 0
        right: 0
    nav
        display: flex
        flex-direction: column
        align-content: center
        justify-content: center
        a
            text-align: center
            margin: .5em 0
#navBox.desktop
    padding: .5em 0
    color: $neonBlue
    display: flex    
    flex-direction: inherit
    justify-content: space-evenly
    nav
        justify-content: space-evenly
        width: 100%
        display: flex
        padding: .5em 0
    .button
        display: none
</style>
