<template>
    <div id="loginPage">
        <div id="modelContain">
            <model-gltf 
                id="model"
                :rotation="rotation"
                @on-load="onLoad"
                src="/3dModel/hard4.gltf"
                :backgroundAlpha="0"
                :scale="scale"
                :controllable="true"
                :lights="lights"
                @on-click="clicked">
            </model-gltf>
        </div>
        <div id="optionBox">
            <a href="#">//RECIEVE YOUR FORTUNE</a> &bull; <a href="#">//CONTINUE AS GUEST</a>
        </div>
    </div>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'

export default {
    components:{
        ModelGltf
    },
    data(){
        return{
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: {
                x: .5,
                y: .5,
                z: .5
            },
            lights:[ 
                     { 
                         type: 'HemisphereLight', 
                         position: { x: 1, y: 1, z: 1 }, 
                         skyColor: 0xffffff, 
                         groundColor: 0xffffff, 
                         intensity: 1.5 
                     }, 
                     { 
                         type: 'DirectionalLight', 
                         position: { x: 1, y: 1, z: 1 }, 
                         color: 0xffffff, 
                         intensity: 1.5
                     } 
                 ] 
        }
    },
    methods: {
        onLoad () {
            this.rotate();
        },
        rotate () {
            this.rotation.y += 0.03;
            requestAnimationFrame( this.rotate );
        },
        clicked(event){
            // eslint-disable-next-line
            console.log(event)
        }
    }
 
}
</script>

<style lang="sass" scoped>
#loginPage
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
#modelContain
    height: 60vh
    margin-top: 10vh
    cursor: pointer
    background-color: black
    background-image: repeating-linear-gradient(0deg,transparent,transparent 70px,#CCC 70px,#CCC 71px),repeating-linear-gradient(-90deg,transparent,transparent 70px,#CCC 70px,#CCC 71px)
    background-size: 71px 71px
    background-attachment: fixed
    background-position: center
</style>
