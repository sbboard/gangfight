<template>
    <div>{{ $route.params.id }}
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
    </div>
</template>

<script>
import navigation from '../../components/nav/navHome.vue'
export default {
  components: {
    navigation
  },
}
</script>

<style lang="sass" scoped>
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
</style>
