<template>
<div id="navBox" :class="[(this.$store.getters.getTaller == 'vh')?'desktop':'mobile',{open: navOpen}]" @click="clickNav()">
    <span class="button"><i class="fas fa-bars"></i></span>
    <nav>
        <router-link to="/" class="redLink">Gang Fight</router-link>
        <router-link to="/about" class="redLink">About Us</router-link>
        <router-link to="/comic" class="blueLink">Comics</router-link>
        <router-link to="/project" class="blueLink">Projects</router-link>
    </nav>
</div>
</template>

<script>
export default {
    name: "navigation",
    data(){
        return{
            navOpen: false
        }
    },
    methods:{
        clickNav(){
            this.navOpen = !this.navOpen
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

$transBlack: rgba(black,.8)
#navBox
    position: fixed
    bottom: 0
    z-index: 9999999
    background-color: $transBlack
    font-family: Yantramanav
    text-transform: uppercase
    .linkFormat
        text-decoration: none
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
#navBox.mobile
    color: $neonRed
    font-size: 3em
    position: absolute
    bottom: .25em
    right: .25em
    width: 1em
    padding: .5em
    height: 1em
    border: 1px solid $neonRed
    cursor: pointer
    transition: height .25s, width .25s
    nav
        font-size: 0em
        opacity: 0
        transition: opacity 0s, font-size 0s
        transition-delay: 0s
        font-weight: 100
    .button     
        position: absolute
        top: 0
        right: 0
        padding: .5em
        cursor: pointer
#navBox.mobile.open
    height: calc(100% - .5em)
    width: calc(100% - .5em)
    padding: 0
    border-top-left-radius: 0
    display: flex
    justify-content: center
    align-items: center
    cursor: inherit
    nav
        display: flex
        flex-direction: column
        align-content: center
        justify-content: center
        opacity: 1
        font-size: 1em
        transition: opacity 0s, font-size 0s
        transition-delay: .25s
        font-family: Craft
        a
            text-align: center
            margin: .5em 0
    .button
        border-bottom: 1px solid $neonRed
        width: calc(100% - 1em)
        text-align: right
        display: inline-block
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
