<template>
  <div id="app" v-if="loaded">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  metaInfo: {
    title: "Loading",
    titleTemplate: "Gang Fight | %s",
  },
  data() {
    return {
      windowHeight: 0,
      windowWidth: 0,
      loaded: false,
    };
  },
  methods: {
    changeSize() {
      let newView = this.windowHeight > this.windowWidth ? "vw" : "vh";
      this.$store.commit("setTaller", newView);
    },
  },
  created() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  },
  watch: {
    windowHeight: function () {
      this.changeSize();
    },
    windowWidth: function () {
      this.changeSize();
    },
  },
  mounted() {
    var self = this;
    axios
      .get(process.env.VUE_APP_API)
      .then((response) => this.$store.commit("setArchive", response.data))
      .finally(function () {
        self.loaded = true;
      });
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
      });
    });
  },
};
</script>

<style lang="sass">
html
  overflow: auto !important
  scroll-behavior: smooth
</style>
