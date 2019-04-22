<template>
    <div>
        {{comicInfo.title}}
        {{comicInfo.subtitle}}
        <div class="comicPages">
        <img v-for="pages in comicInfo.comicsArray" :key="pages" :src="pages"/>
        </div>
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
        <div v-if="comicInfo.series !== 'noseries'">
          farLeft left {{comicInfo.series}} right farRight
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import navigation from '../../components/nav/navHome.vue'

export default {
  data(){
    return{
      comicInfo: [],
      comicId: this.$route.params.id
    }
  },
  components: {
    navigation
  },
  mounted () {
      axios
      .get(`${this.$store.getters.getAPI}/comic/${this.comicId}`)
      .then(response => (this.comicInfo = response.data[0]))
  }
}
</script>

<style lang="sass" scoped>
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
</style>
