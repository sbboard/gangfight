<template>
  <div id="comicPage">
    <div id="theComic" :class="[versionClass]">
      <h1>{{ comicInfo.title }}</h1>
      <h2>{{ comicInfo.subtitle }}</h2>

      <template v-if="comicInfo.audio">
        <audio
          @play="isPlaying = true"
          @timeupdate="loopAudio"
          ref="audioElement"
          autoplay
          :src="comicInfo.audio"
          type="audio/mpeg"
        ></audio>
        <h2 class="music" v-if="comicInfo.musician">
          Audio by {{ comicInfo.musician }}
          <span
            @click="isPlaying = !isPlaying"
            :class="{ isPlaying: !isPlaying }"
            >{{ isPlaying ? "STOP" : "PLAY" }}</span
          >
        </h2>
      </template>

      <div class="comicPages">
        <img
          v-for="(pages, index) in pagesToLoad"
          :key="index"
          :id="'pg-' + index"
          :ref="'pg-' + index"
          :src="`/assets/comics/${comicInfo.url}/${comicInfo.comicsArray[index]}`"
          @click="pageJump(index)"
          @load="
            () => {
              if (pagesToLoad < comicInfo.comicsArray.length) {
                pagesToLoad++;
              } else {
                finishedLoading = true;
              }
            }
          "
        />
      </div>

      <h3 @click="jumpToTop()" :class="versionClass">
        <i class="fas fa-caret-up"></i> Jump To Top
        <i class="fas fa-caret-up"></i>
      </h3>

      <div id="minOption" :class="[versionClass, { closed: menuClosed }]">
        <router-link to="/" class="redLink"
          ><i class="fas fa-caret-left"></i> BACK TO GANG FIGHT</router-link
        >
        <span @click="menuClosed = !menuClosed"
          >MENU <i class="fas fa-caret-up"></i
        ></span>
      </div>

      <div id="comicNav" :class="[versionClass, { closed: menuClosed }]">
        <a
          v-if="priorComic.title != ''"
          id="leftArrow"
          :href="`/comicReader/${priorComic._id}/${cat[0]}${cat[1]}`"
        >
          <span class="arrow"><i class="fas fa-angle-left"></i></span>
          <span class="nameContent"
            >{{ priorComic.title }}
            <template v-if="priorComic.subtitle"
              >: {{ priorComic.subtitle }}
            </template></span
          >
        </a>
        <template v-if="comicInfo.series != 'noseries'">
          <template v-if="!archiveAll">
            <div
              id="currentArch"
              @click="switchCat()"
              :style="{ cursor: cursorStyle }"
            >
              <div id="archInstruct">current series:</div>
              <div id="archName">{{ comicInfo.series }}</div>
            </div>
          </template>
          <template v-else>
            <div
              id="currentArch"
              @click="switchCat()"
              :style="{ cursor: cursorStyle }"
            >
              <div id="archInstruct">current series:</div>
              <div id="archName">all comics</div>
            </div>
          </template>
        </template>

        <template v-if="archiveAll">
          <select @change="switchPage">
            <option
              v-for="comics in fullReturn"
              :key="comics._id"
              :data-id="comics._id"
              :selected="comicInfo.title == comics.title"
            >
              {{ comics.title }}
              <template v-if="comics.subtitle"
                >: {{ comics.subtitle }}
              </template>
            </option>
          </select>
        </template>
        <template v-else>
          <select @change="switchPage">
            <option
              v-for="comics in seriesReturn"
              :key="comics._id"
              :data-id="comics._id"
              :selected="comicInfo.title == comics.title"
            >
              {{ comics.title
              }}<template v-if="comics.subtitle"
                >: {{ comics.subtitle }}</template
              >
            </option>
          </select>
        </template>
        <a
          v-if="nextComic.title != ''"
          id="rightArrow"
          :href="`/comicReader/${nextComic._id}/${cat[0]}${cat[1]}`"
        >
          <span class="nameContent"
            >{{ nextComic.title }}
            <template v-if="nextComic.subtitle"
              >: {{ nextComic.subtitle }}
            </template>
          </span>
          <span class="arrow"><i class="fas fa-angle-right"></i></span>
        </a>
      </div>
    </div>
    <div id="cityLights"></div>
    <div id="cityOfStars"></div>
    <div id="cityBlues"></div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.comicInfo.title,
    };
  },
  data() {
    return {
      comicInfo: {
        comicsArray: [],
        _id: "",
        title: "",
        subtitle: "",
        img: "",
        url: "",
        category: "",
        date: "",
        series: "noseries",
      },
      fullReturn: JSON.parse(
        JSON.stringify(this.$store.getters.getArchive)
      ).filter((e) => e.comicsArray.length > 0 && e.comicsArray[0] != ""),
      comicId: this.$route.params.id,
      cat: [0, 0],
      nextComic: { _id: "", title: "", subtitle: "" },
      priorComic: { _id: "", title: "", subtitle: "" },
      cursorStyle: "",
      menuClosed: true,
      archiveAll: true,
      isPlaying: false,
      currentPage: 0,
      endLaunched: false,
      pagesToLoad: 1,
      finishedLoading: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScreen);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScreen);
  },
  mounted() {
    this.getIndexes(this.fullReturn);
    if (typeof this.$route.params.cat != "undefined") {
      this.cat = this.$route.params.cat.split("");
      this.cat[0] = parseInt(this.cat[0]);
      this.cat[1] = parseInt(this.cat[1]);
      this.archiveAll = this.cat[0] == 0;
      this.menuClosed = this.cat[1] == 0;
    } else {
      this.archiveAll = this.comicInfo.series == "noseries";
      this.menuClosed = this.comicInfo.series == "noseries";
    }

    if (this.comicInfo.series != "noseries") {
      this.cursorStyle = "pointer";
    }
  },
  methods: {
    jumpToTop() {
      const scrollingElement = document.scrollingElement || document.body;
      scrollingElement.scrollTop = 0;
    },
    loopAudio() {
      const buffer = 0.5;
      const audioEl = this.$refs.audioElement;
      if (audioEl.currentTime > audioEl.duration - buffer) {
        audioEl.currentTime = 0;
        audioEl.play();
      }
    },
    switchCat() {
      if (this.comicInfo.series != "noseries") {
        this.archiveAll = !this.archiveAll;
        if (!this.archiveAll) {
          let seriesArray = this.fullReturn.filter(
            (e) => e.series.toLowerCase() == this.comicInfo.series.toLowerCase()
          );
          this.getIndexes(seriesArray);
        } else {
          this.getIndexes(this.fullReturn);
        }
      } else {
        this.cursorStyle = "inherit";
      }
    },
    onScreen() {
      const numOfPages = this.comicInfo.comicsArray.length - 1;
      const pagesOnScreen = Array.from(document.querySelectorAll("img")).filter(
        (el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) return el;
        }
      );
      this.currentPage = pagesOnScreen[0].id.replace("pg-", "");
      if (
        this.currentPage == numOfPages &&
        !this.endLaunched &&
        this.finishedLoading
      ) {
        if (this.menuClosed) this.menuClosed = false;
        this.endLaunched = true;
      } else if (this.currentPage != numOfPages && this.endLaunched) {
        this.endLaunched = false;
      }
    },
    pageJump(page) {
      if (page < this.comicInfo.comicsArray.length - 1) {
        const marginTop = window
          .getComputedStyle(this.$refs[`pg-${page}`][0], null)
          .getPropertyValue("margin-top");
        const scrollLength =
          this.$refs[`pg-${page}`][0].clientHeight +
          this.$refs[`pg-${page}`][0].offsetTop +
          parseInt(marginTop);
        window.scrollTo(0, scrollLength);
      }
    },
    getIndexes(archive) {
      let currentIndex = archive
        .map((e) => {
          return e._id;
        })
        .indexOf(this.comicId);
      if (archive.length > 0 && currentIndex > -1) {
        this.comicInfo = archive[currentIndex];
        if (currentIndex != 0) {
          const newArray = archive.slice();
          this.nextComic.title = newArray[currentIndex - 1].title;
          this.nextComic.subtitle = newArray[currentIndex - 1].subtitle;
          this.nextComic._id = newArray[currentIndex - 1]._id;
        } else {
          this.nextComic.title = "";
        }
        if (currentIndex == archive.length - 1) {
          this.priorComic.title = "";
        } else {
          const newArray = archive.slice();
          this.priorComic.title = newArray[currentIndex + 1].title;
          this.priorComic.subtitle = newArray[currentIndex + 1].subtitle;
          this.priorComic._id = newArray[currentIndex + 1]._id;
        }
      } else {
        this.$router.push("/");
      }
    },
    switchPage(e) {
      window.location.href = `/comicReader/${e.target.selectedOptions[0].dataset.id}/${this.cat[0]}${this.cat[1]}?`;
    },
  },
  computed: {
    seriesReturn() {
      let seriesReturn = JSON.parse(JSON.stringify(this.fullReturn)).filter(
        (e) =>
          e.comicsArray.length > 0 &&
          e.comicsArray[0] != "" &&
          e.series == this.comicInfo.series
      );
      return seriesReturn;
    },
    versionClass() {
      return this.$store.getters.getTaller == "vh" ? "desktop" : "mobile";
    },
  },
  watch: {
    menuClosed() {
      this.cat[1] = this.menuClosed ? 0 : 1;
    },
    isPlaying() {
      if (this.isPlaying) this.$refs.audioElement.play();
      else this.$refs.audioElement.pause();
    },
    archiveAll() {
      this.cat[0] = this.archiveAll ? 0 : 1;
    },
    comicInfo() {
      if (!this.archiveAll) {
        let seriesArray = this.fullReturn.filter(
          (e) => e.series.toLowerCase() == this.comicInfo.series.toLowerCase()
        );
        this.getIndexes(seriesArray);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

#stretchOp
  color: $neonBlue
  @include textGlow($neonBlue, 1px)
  border: 3px solid $neonBlue
  @include boxGlow($neonBlue)
  font-size: 2rem
  position: fixed
  top: 20px
  right: 20px
  line-height: 0.1
  padding: .5rem
  border-radius: .15em
  cursor: pointer
  &.mobile
    display: none
  i
    transform: rotate(90deg)
    transition: transform .2s
  &.wideOn
    i
      transform: rotate(0deg)

#comicNav
  padding: 1em 0
  height: 3.5em
  position: fixed
  bottom: 0em
  left: 0
  margin: 0 auto
  font-size: 1em
  z-index: 555
  display: block
  flex-direction: column
  right: 0
  background: linear-gradient(180deg, black, rgba(0, 0, 0, 0.8))
  width: 100%
  display: flex
  justify-content: center
  font-family: Yantramanav
  transition: bottom .2s
  &.closed
    bottom: -7.1em
  select
    display: block
    width: fit-content
    margin: 0 auto
    max-width: 40vw
  .arrow
    font-size: 3em
    color: $neonBlue
    @include textGlow($neonBlue, 1px)
    margin: 0 .25em
  #leftArrow
    display: flex
    align-items: center
    color: white
    position: absolute
    top: 0
    bottom: 0
    width: 30%
    cursor: pointer
    text-decoration: none
    &:hover
      text-decoration: underline
    .nameContent
      word-break: break-word
      width: 17vw
  #rightArrow
    @extend #leftArrow
    right: 0
    justify-content: flex-end
    .nameContent
      text-align: right
  #currentArch
    color: $neonGreen
    font-size: 1.25em
    display: block
    margin: 0 auto
    width: fit-content
    text-align: center
    text-transform: uppercase
  .nameContent
    margin-bottom: .25em
    text-decoration: none
  &.desktop
    &::before
      width: .5em
      content: ' '
      position: absolute
      top: 0em
      height: 4em
      left: -.5em
      background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.75))
    &::after
      width: .5em
      content: ' '
      position: absolute
      top: 0em
      height: 4em
      right: -.5em
      background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.75))
  &.mobile
    top: 0
    width: 100%
    position: relative
    margin: 0 auto 10vh 0
    background-color: initial
    .nameContent
      margin: 0 .5em .25em .5em
    .arrow
      font-size: 2em
      margin: 0
    #archName
      font-size: .8em
    #archInstruct
      font-size: 0.3em
  &.closed
    bottom: -5.5em
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#comicPage
  position: relative
  min-height: 100vh
  #theComic
    padding: 1em 1em 3em 1em
    &.mobile
      padding: 1em 1em 1.5em 1em
    h1
      font-size: 5vmin
      text-align: center
      color: $neonBlue
      font-family: Montserrat
      @include textGlow($neonBlue, 1px)
    h3
      color: $neonRed
      font-family: Montserrat
      @include textGlow($neonRed, 1px)
      margin: 4vh 0 1em 0
      text-align: center
      cursor: pointer
      &:last-of-type
        margin: 1em 0 5em 0
      &.mobile
        margin-bottom: 1em
    h2
      font-size: 4vmin
      text-align: center
      margin-bottom: .5em
      color: $neonBlue
      font-family: Montserrat
      @include textGlow($neonBlue, 1px)
      &.music
        font-size: 1.25em
        color: $neonYellow
        margin-bottom: 4vmin
        text-transform: lowercase
        user-select: none
        @include textGlow($neonYellow, 1px)
        span
          border: 1px solid $neonYellow
          @include textGlow($neonYellow, 1px)
          width: 3em
          padding: 0.25em 0.5em
          justify-content: center
          text-align: center
          font-size: .75em
          display: inline-flex
          text-transform: uppercase
          cursor: pointer
          margin-left: 0.5em
          &.isPlaying
            color: black
            background-color: $neonYellow
    .comicPages
      img
        max-width: 100%
        margin: 4vh auto 0 auto
        display: block
        max-height: 100vh
        image-rendering: -webkit-optimize-contrast
        cursor: pointer
        transition: opacity .5s
        &:first-of-type
          margin-top: 0
        &:last-of-type
          cursor: initial
        &.fullWidth
          max-height: 200vh
#city
  background-image: url('/assets/global/homepage/rochester.png')
  background-position: bottom
  background-repeat: repeat-x
  background-attachment: fixed
  background-size: 100% auto
  position: absolute
  bottom: 0
  opacity: .6
  z-index: -5
  height: 100%
  width: 100%
  filter: brightness(0.5)
#cityOfStars
  filter: brightness(0.5)
  z-index: -7
  position: absolute
  background-size: cover
  width: 100%
  height: 100%
  top: 0px
  left: 0px
  background-image: url(/assets/global/homepage/starsbg.jpg)
  margin: 0
  padding: 0
  background-attachment: fixed
  background-repeat: no-repeat
  opacity: .3
#cityBlues
  background: -webkit-radial-gradient(bottom, #121729, #020306 60%)
  margin: 0
  padding: 0
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  background-attachment: fixed
  height: 100%
  width: 100%
  z-index: -8
  position: absolute
  top: 0
#archInstruct
  font-size: 0.5em
  user-select: none
#minOption
  position: fixed
  font-size: 1.25rem
  bottom: 5.75rem
  padding: 0 1.5rem
  margin: 0 auto
  z-index: 555
  left: 0
  width: calc(100vw - 4rem)
  display: flex
  justify-content: space-between
  font-family: Yantramanav
  transition: bottom .2s
  @include textGlow($neonBlue, 1px)
  color: $neonBlue
  &.mobile
    display: none
  &.closed
    bottom: .5rem
    span i
      transform: rotateX(0deg)
  i
    margin: 0 auto
    display: inline-block
    transition: transform .25s
    transform: rotateX(180deg)
  span, .redLink
    margin-right: .5em
    cursor: pointer
  .redLink
    margin-right: 0
    text-decoration: none
    color: $neonBlue
    &:hover
      text-decoration: underline
#archName
  user-select: none
</style>