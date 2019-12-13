<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      windowHeight: 0,
      windowWidth: 0,
    }
  },
  methods:{
    changeSize(){
      let newView = (this.windowHeight > this.windowWidth) ? "vw":"vh"
      this.$store.commit('setTaller',newView)
    },
  },
  created(){
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
  },
  watch: {
    windowHeight: function(){
      this.changeSize()
    },
    windowWidth:function(){
      this.changeSize()
    }
  },
  mounted() {
    axios
    .get(process.env.VUE_APP_API)
    .then(response => (this.$store.commit('setArchive',response.data)))
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
        this.windowWidth = window.innerWidth
      });
    })
  },
}
</script>

<style lang="sass" scoped>

</style>
