<template>
<div id="navBox" :class="[(this.$store.getters.getTaller == 'vh')?'desktop':'mobile',{open: navOpen}]">
    <span class="button" @click="clickNav('button')">
        <i :class="[(navOpen)?'far fa-times-circle':'fas fa-bars']"></i>
    </span>
    <nav @click="clickNav('link')">
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
        clickNav(source){
            if(source == "button")
                this.navOpen = !this.navOpen
            else if(source == "link")
                this.navOpen = false
        }
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        }
    }
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

#navBox
    position: absolute
    bottom: 1em
    z-index: 9999999
    background-image: linear-gradient(rgba(black,1), rgba(black,.75))
    font-family: Yantramanav
    text-transform: uppercase
    border: 1px solid $neonRed
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
#navBox.mobile
    color: $neonRed
    position: absolute
    right: 1vh
    bottom: 1vh
    height: 10vh
    width: 9.6vh
    cursor: pointer
    transition: height .25s, width .25s, padding .25s
    nav
        font-size: 0vh
        opacity: 0
        transition: opacity 0s, font-size 0s
        transition-delay: 0s
        font-weight: 100
    .button     
        text-align: center
        position: absolute
        top: 0
        right: 0
        padding: 1.75vh
        padding-bottom: 0
        cursor: pointer
        font-size: 7vh
#navBox.mobile.open
    height: calc(100% - 2vh)
    width: calc(100% - 2vh)
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
        font-size: 8vw
        transition: opacity 0s, font-size 0s
        transition-delay: .25s
        font-family: Craft
        a
            text-align: center
            margin: .5em 0
    .button
        border-bottom: 1px solid $neonRed
        width: calc(100% - 3.5vh)
        text-align: right
        display: inline-block
        padding-bottom: 1.5vh
#navBox.desktop
    font-size: 2vh
    padding: .5em 0
    color: $neonBlue
    display: flex    
    flex-direction: inherit
    justify-content: space-evenly
    position: absolute
    bottom: .5em
    nav
        justify-content: space-evenly
        width: 100%
        display: flex
        padding: .5em 0
    .button
        display: none
</style>
