<template>
    <div id="bigPic" :style="fontSize">
        <div id="gameBox">
            <!--<img :src="`/projects/chameleonMan/CG/${cg[0][0]}.png`"/>-->
        </div>
        <div id="statBox">
            {{fame}}
            {{cop}}
        </div>
        <div id="textBox"></div>
        <div id="blackBlock"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fame: 5,
            cop: 50,
            eye: [],
            nose: [],
            mouth: [],
            currentFace: {
                "eyes":0,
                "nose":0,
                "mouth":0
                }
        }
    },
    methods: {
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
}
</script>

<style lang="sass" scoped>
#bigPic
    background-color: black
    #blackBlock
        background-color: black
        position: absolute
        bottom: 0
        height: 10em
        width: 100vw
    #gameBox
        position: absolute
        top: 0
        height: 50em
        width: 100vw
        img
            width: 100em
            height: 100%
            image-rendering: auto
            image-rendering: crisp-edges
            image-rendering: pixelated
    #textBox
        width: 100vw
        background-color: blue
        height: 25em
        position: absolute
        bottom: 10em
        opacity: .5
    #statBox
        height: 15em
        background-color: green
        bottom: 35em
        width: 100vw
        position: absolute
        opacity: .5
</style>