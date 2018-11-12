<template>
    <model-gltf 
        id="model"
        :rotation="rotation"
        @on-load="onLoad"
        src="/BarramundiFish.gltf"
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
                x: 1,
                y: 1,
                z: 1
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
            this.rotation.y += 0.05;
            requestAnimationFrame( this.rotate );
        },
        clicked(){
            // eslint-disable-next-line
            console.log("clicked")
        }
    }
 
}
</script>


<style lang="sass" scoped>
div
    background-color: black
    background-image: repeating-linear-gradient(0deg,transparent,transparent 70px,#CCC 70px,#CCC 71px),repeating-linear-gradient(-90deg,transparent,transparent 70px,#CCC 70px,#CCC 71px);
    background-size: 71px 71px;
    background-attachment: fixed;
    background-position: center; 
</style>
