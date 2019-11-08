<template>
    <div id="aboutUs" :style="fontSize">
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        }
    },
    methods: {
        
    },
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
</style>