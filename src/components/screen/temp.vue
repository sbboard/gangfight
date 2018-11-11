<template>
<div>
    <vgl-renderer antialias style="height: 100vh;">
      <vgl-scene>
        <vgl-box-geometry name="box"></vgl-box-geometry>
        <vgl-texture src="/9volt.jpg" name="texture"></vgl-texture>
        <vgl-mesh-standard-material name="std" map="texture"></vgl-mesh-standard-material>
        <vgl-mesh geometry="box" material="std" :rotation="`0 0 ${y}`"></vgl-mesh>
        <vgl-ambient-light color="#23F893"></vgl-ambient-light>
        <vgl-directional-light position="1 1 -1"></vgl-directional-light>
      </vgl-scene>
    <vgl-perspective-camera orbit-position="4;"></vgl-perspective-camera>
  </vgl-renderer>
</div>
</template>

<script>

export default {
    data(){
        return{
        y: 50,
        model: "/assets/3d/Duck.gtlf"
        }
    },
    methods:{
        animate: function() {
            requestAnimationFrame(this.animate);
            this.y -= 0.01;
        }
    },
    mounted() {
      this.animate()
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
