<template>
    <div :style="fontSize">
        <div id="gameBox">

        </div>
        <div id="statBox"></div>
        <div id="textBox"></div>
        <div id="blackBlock"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
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
    background-color: red
    width: 100vw
    opacity: .5
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