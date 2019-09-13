<template>
    <div id="scene" :style="fontSize">
      <div id="sketch">
      </div>
    </div>
</template>

<script>
export default {
  name: 'comicArchive',
  computed: {
      fontSize(){
          return {fontSize: '1'+this.$store.getters.getTaller}
      },
  },
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

#scene
  #sketch
    background-image: url("/assets/global/comicArch/sketch.jpg")
    background-size: 100% 100%
    position: absolute
    top: 0
    left: 0
    width: 100em
    height: 100em
</style>