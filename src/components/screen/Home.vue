<template>
    <div id="homeBlock">
        <h1>Gang Fight</h1>
        <div id="gridBlock">
        <span>Latest Tracks:</span>
        <div id="latestGrid">
        <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
        <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
        <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
        <img src="http://gang-fight.com/projects/thumbs/xeno.jpg">
        </div></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
#homeBlock
    display: flex
    flex-direction: column
    justify-content: center
    h1
        text-align: center
        font-size: 3em
    #gridBlock
        width: 80%
        margin: 0 auto
        span
            margin-left: 1%
            color: red
        #latestGrid
            line-height: 0
            img
                display: inline-block
                width: 48%
                height: auto
                margin: 1%
</style>
