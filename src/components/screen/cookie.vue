<template>
    <model-gltf 
        id="model"
        :rotation="rotation"
        @on-load="onLoad"
        src="/duck.gltf"
        :backgroundAlpha="0"
        :position="position"
        :scale="scale"
        @on-click="clicked()">
        </model-gltf>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'  

export default {
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
                x: .75,
                y: .75,
                z: .75
            },
            bgColor: '#000'
        }
    },
    components:{
        ModelGltf
    },
    methods: {
        onLoad () {
            this.rotate();
        },
        rotate () {
            this.rotation.y += 0.01;
            requestAnimationFrame( this.rotate );
        },
        clicked(){
            // eslint-disable-next-line
        }
    }
 
}
</script>


<style lang="sass" scoped>
div
    background-color: black
    img
        margin: 4em auto 0 auto
        display: block
    a  
        color: white
        text-decoration: none
        &:hover
            color: black
            background-color: white
</style>
