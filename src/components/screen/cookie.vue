<template>
    <model-gltf 
        id="model"
        :rotation="rotation"
        @on-load="onLoad"
        src="/hard4.gltf"
        :backgroundAlpha="0"
        :position="position"
        :scale="scale"
        :controllable="false"
        :lights="lights"
        @on-click="clicked">
        </model-gltf>
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
div
    background-color: black
    background-image: repeating-linear-gradient(0deg,transparent,transparent 70px,#CCC 70px,#CCC 71px),repeating-linear-gradient(-90deg,transparent,transparent 70px,#CCC 70px,#CCC 71px);
    background-size: 71px 71px;
    background-attachment: fixed;
    background-position: center; 
</style>
