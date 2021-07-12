<template>
  <div id="comicPage" :key="pageKey">
    <div id="theComic">
      <div
        id="stretchOp"
        @click="
          () => {
            wideMode = !wideMode;
          }
        "
        :class="[
          this.$store.getters.getTaller == 'vh' ? 'desktop' : 'mobile',
          { wideOn: wideMode },
        ]"
      >
        <div>
          <i class="fas fa-arrows-alt-h"></i>
        </div>
      </div>
      <h1>{{ comicInfo.title }}</h1>
      <h2>{{ comicInfo.subtitle }}</h2>
      <div
        id="minOption"
        @click="menuClosed = !menuClosed"
        :class="[
          this.$store.getters.getTaller == 'vh' ? 'desktop' : 'mobile',
          { closed: menuClosed },
        ]"
      >
        <span>MENU</span><i class="fas fa-caret-down"></i>
      </div>

      <div class="comicPages">
        <img
          v-for="(pages, index) in comicInfo.comicsArray"
          :key="pages"
          :ref="'pg-' + index"
          v-lazy="`/assets/comics/${comicInfo.url}/${pages}`"
          @click="pageJump(index)"
          :class="{ fullWidth: wideMode }"
        />
      </div>

      <div
        id="comicNav"
        :class="[
          this.$store.getters.getTaller == 'vh' ? 'desktop' : 'mobile',
          { closed: menuClosed },
        ]"
      >
        <a
          v-if="priorComic.title != ''"
          id="leftArrow"
          :href="`/comicReader/${priorComic._id}/${cat[0]}${cat[1]}`"
        >
          <span class="arrow"><i class="fas fa-angle-left"></i></span>
          <span class="nameContent">{{ priorComic.title }}</span>
        </a>
        <template v-if="comicInfo.series != 'noseries'">
          <template v-if="archiveAll == false">
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
        <template v-if="archiveAll == true">
          <select @change="switchPage">
            <option
              v-for="comics in fullReturn"
              :key="comics._id"
              :data-id="comics._id"
              :selected="comicInfo.title == comics.title"
            >
              {{ comics.title }}
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
              {{ comics.title }}
            </option>
          </select>
        </template>
        <a
          v-if="nextComic.title != ''"
          id="rightArrow"
          :href="`/comicReader/${nextComic._id}/${cat[0]}${cat[1]}`"
        >
          <span class="nameContent">{{ nextComic.title }}</span>
          <span class="arrow"><i class="fas fa-angle-right"></i></span>
        </a>
      </div>

      <navigation
        :class="[
          this.$store.getters.getTaller == 'vh'
            ? 'navWidthHundred'
            : 'navWidthMiddle',
          { closed: menuClosed },
        ]"
      />
    </div>
    <div id="city"></div>
    <div id="cityLights"></div>
    <div id="cityOfStars"></div>
    <div id="cityBlues"></div>
  </div>
</template>

<script>
import navigation from "../../components/nav/navHome.vue";

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
      pageKey: 0,
      fullReturn: JSON.parse(
        JSON.stringify(this.$store.getters.getArchive)
      ).filter((e) => e.comicsArray.length > 0 && e.comicsArray[0] != ""),
      comicId: this.$route.params.id,
      cat: [0, 0],
      nextComic: { _id: "", title: "" },
      priorComic: { _id: "", title: "" },
      cursorStyle: "",
      menuClosed: true,
      archiveAll: true,
      wideMode: true,
    };
  },
  components: {
    navigation,
  },
  mounted() {
    if (typeof this.$route.params.cat !== "undefined") {
      this.cat = this.$route.params.cat.split("");
      this.cat[0] = parseInt(this.cat[0]);
      this.cat[1] = parseInt(this.cat[1]);
    }
    if (this.cat[0] == 0) {
      this.archiveAll = true;
      this.getIndexes(this.fullReturn);
    } else {
      this.archiveAll = false;
      this.getIndexes(this.fullReturn);
    }
    if (this.cat[1] == 0) {
      this.menuClosed = true;
    } else {
      this.menuClosed = false;
    }
    if (this.comicInfo.series != "noseries") {
      this.cursorStyle = "pointer";
    }
  },
  methods: {
    switchCat() {
      if (this.comicInfo.series != "noseries") {
        this.archiveAll = !this.archiveAll;
        if (this.archiveAll == false) {
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
    pageJump(page) {
      if (page < this.comicInfo.comicsArray.length - 1) {
        let marginTop = window
          .getComputedStyle(this.$refs[`pg-${page}`][0], null)
          .getPropertyValue("margin-top");
        let scrollLength =
          this.$refs[`pg-${page}`][0].clientHeight +
          this.$refs[`pg-${page}`][0].offsetTop +
          parseInt(marginTop);
        window.scrollTo(0, scrollLength);
      }
    },
    getIndexes(archive) {
      let currentIndex = archive
        .map(function (e) {
          return e._id;
        })
        .indexOf(this.comicId);
      if (archive.length > 0 && currentIndex > -1) {
        this.comicInfo = archive[currentIndex];
        if (currentIndex != 0) {
          let newArray = archive.slice();
          this.nextComic.title = newArray[currentIndex - 1].title;
          this.nextComic._id = newArray[currentIndex - 1]._id;
        } else {
          this.nextComic.title = "";
        }
        if (currentIndex == archive.length - 1) {
          this.priorComic.title = "";
        } else {
          let newArray = archive.slice();
          this.priorComic.title = newArray[currentIndex + 1].title;
          this.priorComic._id = newArray[currentIndex + 1]._id;
        }
      } else {
        this.$router.push("/");
      }
    },
    switchPage(e) {
      let newRoute = `/comicReader/${e.target.selectedOptions[0].dataset.id}/${this.cat[0]}${this.cat[1]}?`;
      window.location.href = newRoute;
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
  },
  watch: {
    menuClosed() {
      if (this.menuClosed == true) {
        this.cat[1] = 0;
      } else {
        this.cat[1] = 1;
      }
    },
    archiveAll() {
      if (this.archiveAll == true) {
        this.cat[0] = 0;
      } else {
        this.cat[0] = 1;
      }
    },
    comicInfo() {
      if (this.archiveAll == false) {
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
  padding: 0 0 .5em 0
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
  background-color: rgba(0, 0, 0, .75)
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
    margin: 0 auto 1em 0
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
#navBox.desktop
  bottom: 3.2em
  padding: .5em 0 0 0
  width: 100%
  font-size: 1.25em
  transition: bottom .2s
  &.closed
    bottom: -2.5em
.navWidthMiddle
  width: 100%
.navWidthHundred
  width: calc(100vh - 1em)
#comicPage
  position: relative
  min-height: 100vh
  #theComic
    padding: 1em 1em 3em 1em
    h1
      font-size: 3em
      text-align: center
      color: $neonBlue
      font-family: Montserrat
      @include textGlow($neonBlue, 1px)
    h2
      font-size: 2.5em
      text-align: center
      margin-bottom: .5em
      color: $neonBlue
      font-family: Montserrat
      @include textGlow($neonBlue, 1px)
    .comicPages
      img
        max-width: 100%
        margin: 0 auto 0 auto
        margin-top: 1em
        display: block
        max-height: 100vh
        cursor: pointer
        transition: max-height .2s
        &:last-of-type
          cursor: initial
        &.fullWidth
          max-height: 200vh
          transition: max-height .4s
      img[lazy=loading]
        height: 300px
        margin: calc(50vh - 150px) auto
        opacity: .5
        border-radius: 10px
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
  height: 1em
  position: fixed
  font-size: 2.5em
  bottom: 7.15rem
  right: .5em
  margin: 0 auto
  z-index: 555
  display: flex
  align-items: center
  justify-content: space-between
  font-family: Yantramanav
  color: $neonBlue
  transition: bottom .2s
  @include textGlow($neonBlue, 1px)
  cursor: pointer
  &.mobile
    display: none
  &.closed
    bottom: 0rem
    i
      transform: rotateX(0deg)
  i
    margin: 0 auto
    display: block
    transition: transform .25s
    transform: rotateX(180deg)
  span
    font-size: 1.25rem
    margin-right: .5em
#archName
  user-select: none
</style>