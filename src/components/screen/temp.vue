<template>
    <div>
    <cookie style="height: 60%; margin-top: 10%; width:100%; cursor:pointer"/>
    <div id="optionBox">
        <a href="#">//RECIEVE YOUR FORTUNE</a> &bull <a href="#">//CONTINUE AS GUEST</a>
    </div>
    </div>
</template>

<script>
import cookie from './cookie.vue'
export default {
    components:{
        cookie
    }
}
</script>

<style lang="sass" scoped>
div
    background-color: black
    a
        font-family: "Courier New", Courier, monospace
        color: white
        text-decoration: none
        padding: 0 .5em
        font-size: 1.5em
        &:hover
            background-color: white
            color: black
#optionBox
    display: block
    margin: 2em auto 0 auto
    width: fit-content
</style>
