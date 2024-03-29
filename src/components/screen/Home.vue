<template>
  <div id="homeBlock">
    <div id="gridBlock" :style="fontSize">
      <span class="latestTracks">Latest Tracks:</span>
      <div id="latestGrid">
        <div
          class="contentBoxes"
          :style="blockSize"
          v-for="(item, id) in theFour"
          :key="`${id}`"
        >
          <div class="boxWrap">
            <p class="alert" v-if="checkWeek(item.date)">
              <i class="fas fa-exclamation"></i>
            </p>
            <p class="boxDate">{{ item.newDate }}</p>
            <p class="titleName">
              <span class="titleText">{{ item.title }}</span>
              <span class="subtitle" v-if="item.subtitle != ''">{{
                item.subtitle
              }}</span>
            </p>
            <a
              :href="item.url"
              v-if="item.comicsArray.length < 1 || item.comicsArray[0] == ''"
            >
              <img
                :style="blockSize"
                :src="'/assets/contentImages/' + item.img"
                :alt="item.title"
              />
            </a>
            <a v-else :href="'/comicReader/' + item._id">
              <img
                :style="blockSize"
                :src="'/assets/contentImages/' + item.img"
                :alt="item.title"
              />
            </a>
          </div>
        </div>
        <a v-if="currentNews" id="newsTicker" :href="newsTicker.url">
          <b>CURRENT:</b>
          <div id="newsWindow">
            <div id="addedText" :class="{ adjusting: !adjusted }">
              <span ref="oneStrip">{{ newsTicker.headline }}//</span>
              <span v-for="index in toFill" :key="index"
                >{{ newsTicker.headline }}//</span
              >
            </div>
          </div>
        </a>
      </div>
    </div>
    <div id="city"></div>
    <div id="cityLights"></div>
    <div id="cityOfStars"></div>
    <div id="cityBlues"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import axios from "axios";

export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      theFour: [
        {
          _id: "0",
          comicsArray: [],
          title: "HOLD ON",
          img: "tvload.jpg",
          url: "#",
          newDate: "01:01:0000",
          date: "2019-04-29T17:43:10.000Z",
          __v: 0,
        },
        {
          _id: "0",
          comicsArray: [],
          title: "WHAT",
          img: "tvload.jpg",
          url: "#",
          newDate: "01:01:0000",
          date: "2019-01-29T17:43:10.000Z",
          __v: 0,
        },
        {
          _id: "0",
          comicsArray: [],
          title: "UH...",
          img: "tvload.jpg",
          url: "#",
          newDate: "01:01:0000",
          date: "2019-01-29T17:43:10.000Z",
          __v: 0,
        },
        {
          _id: "0",
          comicsArray: [],
          title: "OH NO",
          img: "tvload.jpg",
          url: "#",
          newDate: "01:01:0000",
          date: "2019-01-29T17:43:10.000Z",
          __v: 0,
        },
      ],
      newsTicker: {},
      toFill: 0,
      buffer: undefined,
      currentNews: false,
      adjusted: false,
    };
  },
  mounted() {
    let that = this;
    this.theFour = this.$store.getters.getArchive.slice(0, 4);
    axios
      .get(`${process.env.VUE_APP_NEWS}#timestamp=${new Date().getTime()}`)
      .then((response) => (that.newsTicker = response.data))
      .finally(function () {
        that.toFill = Math.floor(94 / that.newsTicker.headline.length);
        if (Date.parse(that.newsTicker.expiration) >= Date.now()) {
          that.currentNews = true;
          window.addEventListener("load", that.getBuffer());
          window.addEventListener("resize", that.getBuffer);
        }
      });
  },
  methods: {
    getBuffer() {
      let that = this;
      let tempBuff;
      let bufferInterval = setInterval(function () {
        tempBuff = that.$refs.oneStrip.getBoundingClientRect().width * -1;
        if (that.buffer != tempBuff) {
          that.buffer = tempBuff;
        } else {
          clearInterval(bufferInterval);
          that.adjusted = true;
        }
      }, 100);
    },
    formatDate(isoDate) {
      let d = new Date(isoDate);
      let month =
        d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
      let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
      let year = d.getFullYear().toString().substring(2);
      return `${month}:${date}:${year}`;
    },
    checkWeek(week) {
      const wk = this.$store.getters.getDate;
      const currentWeekString = `${wk[2]}-${wk[1]}-${wk[0]}`;
      let diff = Math.floor(
        (Date.parse(currentWeekString) - Date.parse(week.split("T")[0])) / 86400000
      );
      return diff <= 30;
    },
  },
  computed: {
    blockSize() {
      return {
        width: "37" + this.$store.getters.getTaller,
        height: "37" + this.$store.getters.getTaller,
      };
    },
    fontSize() {
      return { fontSize: "1" + this.$store.getters.getTaller };
    },
  },
  watch: {
    theFour() {
      for (let i = 0; i < this.theFour.length; i++) {
        this.theFour[i].newDate = this.formatDate(this.theFour[i].date);
      }
    },
    buffer() {
      let that = this;
      gsap.killTweensOf("#addedText");
      gsap.fromTo(
        "#addedText",
        { x: 0 },
        { x: that.buffer, duration: 5, repeat: -1, ease: "none" }
      );
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

.adjusting
    opacity: 0
#newsTicker
    margin: .38em auto 0 auto
    border-top: 3px double $neonGreen
    border-bottom: 3px double $neonGreen
    line-height: 1
    height: 1em
    background-color: rgba(0,0,0,.75)
    color: $neonGreen
    padding: .25em .5em
    width: 91%
    display: flex
    text-decoration: none
    align-items: center
    justify-content: normal
    position: relative
    font-size: 1.25em
    #newsWindow
        position: relative
        width: calc(100% - 6em)
        overflow: hidden
        height: 1em
    b
        width: 6em
        font-weight: 800
#addedText
    display: block
    width: 1000%
    left: 0
    position: absolute
    text-align: left
    text-transform: uppercase
    transition: opacity 1s
    span
        display: inline-block
#homeBlock
    display: flex
    justify-content: center
    #city
        background-image: url('/assets/global/homepage/rochester.png')
        background-position: bottom
        background-repeat: repeat-x
        background-size: 100% auto
        position: absolute
        z-index: -5
        height: 100%
        width: 100%
    #cityLights
        position: absolute
        z-index: -6
        height: 40%
        width: 100%
        position: absolute
        bottom: 0
        mix-blend-mode: plus-lighter
        background: linear-gradient(to bottom, rgba(81, 82, 241, 0) 0, rgb(255, 0, 129))
    #cityOfStars
        position: absolute
        z-index: -7
        width: 100%
        bottom: 0px
        left: 0px
        height: 100%
        background-image: url(/assets/global/homepage/starsbg.jpg)
        margin: 0
        padding: 0
        background-size: cover
        background-attachment: fixed
        background-repeat: no-repeat
        background-position: center
        animation: starglow 10s infinite
    #cityBlues
        background: -webkit-radial-gradient(bottom, #121729, #020306 60%)
        margin: 0
        padding: 0
        background-size: cover
        background-attachment: fixed
        background-repeat: no-repeat
        background-position: center
        height: 100%
        width: 100%
        z-index: -8
        position: absolute
        top: 0
    #gridBlock
        width: 80%
        margin: 7em auto 0 auto
        line-height: normal
        letter-spacing: 1.5px
        font-family: Yantramanav
        font-size: 16px
        .latestTracks
            margin-left: 3%
            color: $neonWhite
            font-size: 2.5em
            text-transform: lowercase
        #latestGrid
            line-height: 0
            font-size: 1.75em
            text-align: center
.contentBoxes
    display: inline-block
    font-family: VCR
    position: relative
    overflow: hidden
    line-height: normal
    margin: .5vh
    font-size: 2em
    color: white
    font-weight: 100
    animation: screenGlow 10s infinite
    border-radius: .2em
    .boxWrap
        opacity: .75
    .boxDate
        position: absolute
        bottom: 0
        padding: 0 3px 0 3px
        right: 0
        background-color: black
        pointer-events: none
        z-index: 5
        text-decoration: none
        margin: .5em
    .alert
        color: black
        position: absolute
        bottom: 0
        padding: .1em 3px
        z-index: 5
        margin: .5em
        animation: blink linear .75s infinite alternate
        pointer-events: none
        background-color: $neonGreen
        width: .9em
        display: flex
        justify-content: center
        i
            font-size: .75em
            width: 0.35em
    .titleName
        position: absolute
        text-transform: uppercase
        text-align: left
        z-index: 6
        pointer-events: none
        margin: .5em
        display: none
        .titleText
            background-color: black
            padding: 0 3px 0 3px
            text-decoration: none
        .subtitle
            background-color: black
            padding: 0 3px 0 3px
            text-decoration: none
            font-size: .75em
            width: fit-content
    &:hover
        opacity: 1
        .titleName
            display: inline-block
        .subtitle
            display: block
        img
            filter: brightness(.5)
@keyframes starglow
    0%
        opacity: .2
    50%
        opacity: .3
    100%
        opacity: .2
@keyframes screenGlow
    0%
        opacity: .9
    50%
        opacity: 1
    100%
        opacity: .9
@keyframes blink
    0%
        opacity: 1
    49%
        opacity: 1
    50%
        opacity: 0
    51%
        opacity: 0
    100%
        opacity: 0
</style>
