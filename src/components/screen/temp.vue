<template>
    <div>
    <cookie id="cookie"/>
    Okay dude
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
#cookie
    width: 50vh
    height: 50vh
    overflow: none
</style>
