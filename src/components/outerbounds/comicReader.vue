<template>
    <div id="comicPage">
        {{comicInfo.title}}
        {{comicInfo.subtitle}}
        <div class="comicPages">
        <img v-for="pages in comicInfo.comicsArray" :key="pages" :src="`/assets/comics/${comicInfo.url}/${pages}`"/>
        </div>
        <navigation :class="[(this.$store.getters.getTaller == 'vh')?'navWidthHundred':'navWidthMiddle']"/>
        <div v-if="comicInfo.series !== 'noseries'">
          farLeft left {{comicInfo.series}} right farRight
        </div>
    </div>
</template>

<script>
//import axios from 'axios'
import navigation from '../../components/nav/navHome.vue'

export default {
  data(){
    return{
      comicInfo:{
              "comicsArray": ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"],
              "_id": "5cbd3a9077ebc22a4dfbbd62",
              "title": "Afro Ahab",
              "subtitle": "Quest for idk",
              "img": "afroAhab.png",
              "url": "afroAhab",
              "category": "comic",
              "date": "2016-10-30T03:52:48.000Z",
              "series": "Afro Ahab",
              "__v": 0},
      comicId: this.$route.params.id
    }
  },
  components: {
    navigation
  },
  mounted () {
      // axios
      // .get(`${this.$store.getters.getAPI}/comic/${this.comicId}`)
      // .then(response => (this.comicInfo = response.data[0]))
  }
}
</script>

<style lang="sass" scoped>
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#comicPage
  position: relative
</style>
