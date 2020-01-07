<template>
    <div id="scene" :style="fontSize">
        <div v-if="currentPage == 0" class="rightArrow dead"><i class="fas fa-arrow-right"></i></div>
        <div v-else @click="changeNav(-1)" class="rightArrow"><i class="fas fa-arrow-right"></i></div>
        <div v-if="currentPage >= (theArchive.length/4)-1" class="leftArrow dead"><i class="fas fa-arrow-left"></i></div>
        <div v-else @click="changeNav(1)" class="leftArrow"><i class="fas fa-arrow-left"></i></div>

        <div id="picayunes">
            <div id="picaOne" v-if="typeof picayunes[picaOne] != 'undefined'">
                <a :href="'/projects/' + picayunes[picaOne]">
                <img :src="'/assets/global/comicArch/picayunes/'+ picayunes[picaOne] + '.png'"/>
                </a>
            </div>
            <div id="picaTwo" v-if="typeof picayunes[picaTwo] != 'undefined'">
                <a :href="'/projects/' + picayunes[picaTwo]">
                <img :src="'/assets/global/comicArch/picayunes/'+ picayunes[picaTwo] + '.png'"/>
                </a>
            </div>
        </div>

        <div id="shopOwner">
            <img class="eye" id="ownerEye" src="/assets/global/comicArch/ownerEyeC.png"/>
            <img class="body" src="/assets/global/comicArch/ownerBodyCS.png"/>
        </div>
        <div id="wheel">
            <div id="outerRim"></div>
            <div id="onePole"></div>
            <div id="twoPole"></div>
            <div id="threePole"></div>
            <div id="innerCircle"></div>
        </div>  
        <div id="handle">
            <div id="topHandle"></div>
            <div id="rightHandle"></div>
            <div id="handleCurve"></div>
        </div>
        <div id="stoolGroup">
            <div id="stoolOne">
                <div class="seat"></div>
                <div class="pole"></div>
            </div>
            <div id="stoolTwo">
                <div class="seat"></div>
                <div class="pole"></div>
            </div>
        </div>
    <div id="leftPart">
        <div id="roof"></div>
        <div id="roofPole"></div>
    </div>
    <div id="tableTop"></div>
    <div id="tableFront"></div>
    <div id="poleLeft"></div>
    <div id="poleRight"></div>
    <div id="lantern" v-if="typeof picayunes[picaTwo] === 'undefined'">
        <h3>拉</h3>
        <h4>麺</h4>
        <img src="/assets/global/comicArch/lantern.png">
    </div>
    <div id="shadowTheHedgehog">
        <div class="topShadow"></div>
        <div class="farLeft"></div>
        <div class="midOne"></div>
        <div class="midThree"></div>
        <div class="midFive"></div>
        <div class="farRight"></div>
        <div class="lightFlicker"></div>
    </div>
    <div id="rowOfLights">
        <div class="lightOne"></div>
        <div class="lightTwo"></div>
        <div class="lightThree"></div>
        <div class="lightFour"></div>
    </div>
    <div id="blackFilter">
    </div>
      <div id="menu">     
        <div class="contentBoxes" v-for="(item, id) in theArchive.slice(currentPage*4, currentPage*4+4)" :key="`${id}`">
              <div class="boxWrap">
                  <p class="boxDate">{{item.updatedDate}}</p>
                  <p class="titleName">
                      <span class="titleText">{{item.title}}</span>
                      <span class="subtitle" v-if="item.subtitle != ''">{{item.subtitle}}</span>
                  </p>
                  <a :href="item.url" v-if="item.comicsArray.length < 1 || item.comicsArray[0] == ''">
                      <img :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                  </a>
                  <a v-else :href="'/comicReader/'+item._id">
                      <img :src="'/assets/contentImages/'+item.img" :alt="item.title"/>
                  </a>
              </div>
      </div>
      </div>
      <div id="comixSign">
        <h1>コミック</h1>
        <h2>{{currentPage+1}}/{{totalPages.totalPages}}</h2>
      </div>
      <div id="backboard"></div>
      <img id="posterOne" src="/assets/global/comicArch/oil.gif"/>
      <img id="posterTwo" src="/assets/global/comicArch/gf.gif"/>
      <div id="woodBack"></div>
      <div id="tinRoof"></div>
      <div id="glowbg"></div>
      <div id="citybg"></div>
      <div id="backwall"></div>
      <div id="rightwall"></div>
    </div>
</template>

<script>
export default {
  name: 'comicArchive',
    data(){
        return{
            currentPage: 0,
            theArchive: [],
            picayunes: ["how","whattime","newEnter","asl","reflect"],
            picaOne: 0,
            picaTwo: 0,
            intervalid2:'',
        }
    },
    mounted() {
        this.theArchive = JSON.parse(JSON.stringify(this.$store.getters.getArchive.filter(e => e.category == "comic")))
        //blink animation for ramen shop owner
        const images = ["/assets/global/comicArch/ownerEyeC.png","/assets/global/comicArch/ownerEyeClosedC.png"]
        this.intervalid2 = setInterval(function(){
            document.getElementById("ownerEye").src = images[1]; 
            setTimeout(function(){ 
                document.getElementById("ownerEye").src = images[0]; 
            }, 300);
            setTimeout(function(){ 
                document.getElementById("ownerEye").src = images[1]; 
            }, 600);
            setTimeout(function(){ 
                document.getElementById("ownerEye").src = images[0]; 
            }, 900);
        },6000);

        //set picayunes
        const chances = 20
        const totalYunes = this.picayunes.length * chances
        this.picaOne = Math.floor(Math.random() * totalYunes)
        this.picaTwo = Math.floor(Math.random() * totalYunes)
        if(this.picaOne == this.picaTwo){
            this.picaOne = 999
            this.picaTwo = 999
        }
    },
    methods: {
        formatDate(isoDate){
            let d = new Date(isoDate)
            let month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1
            let date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
            let year = d.getFullYear().toString().substring(2)
            let dString = `${month}:${date}:${year}`
            return dString
        },
        changeNav(num){
            this.currentPage += num
        }
    },
    computed: {
        blockSize(){
            return {width: '25'+this.$store.getters.getTaller,height: '25'+this.$store.getters.getTaller}
        },
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
        totalPages(){
            return {totalPages: Math.floor(this.theArchive.length/5 + 1)}
        },
    },
    watch: {
        theArchive(){
            for(let i=0;i<this.theArchive.length;i++){
                this.theArchive[i].updatedDate = this.formatDate(this.theArchive[i].updatedDate)
            }
        }
    },
    beforeDestroy () {
       clearInterval(this.intervalid2)
    },
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"
@import "../../css/fontawesome/css/all.css"

$roofTint: #04c7b3
$woodTint: #8f3d64
$bannerTint: $neonRed
$metalColor: #c964ff

#scene.middleViewHigh
    transform: scale(1.15) translateY(2em)

#picayunes
    width: 100%
    #picatemp
        display: inline-block
        bottom: 20em
        position: absolute
        z-index: 850
        img
            display: inline-block
            width: 22em
            filter: blur(1px)
            image-rendering: pixelated
    #picaOne
        @extend #picatemp
        right: 33.5em
    #picaTwo
        @extend #picatemp  
        right: 12.5em

#shopOwner    
    position: absolute
    top: 40em
    left: 20em
    z-index: 1
    //sepia(.5) hue-rotate(-163deg)
    img
        position: absolute   
    .eye
        z-index: 2
        width: 5em
        top: 9.5em
        left: 7.5em
    .body 
        width: 19em
#postTemp
    position: absolute
    filter: sepia(1)
    opacity: .45
    image-rendering: optimizeSpeed
    image-rendering: -moz-crisp-edges
    image-rendering: -o-crisp-edges
    image-rendering: -webkit-optimize-contrast
    image-rendering: pixelated
    image-rendering: optimize-contrast
    -ms-interpolation-mode: nearest-neighbor
#posterOne
    @extend #postTemp
    top: 40em
    width: 30em
    right: 44em
    transform: rotateZ(-1deg)
#posterTwo
    @extend #postTemp
    top: 39em
    right: 25em
    width: 17em
    transform: rotateZ(1deg)
.arrowTemplate
    font-size: 10em
    position: absolute
    left: 0
    top: 0
    cursor: pointer
    z-index: 900
    top: 2.9em
    color: $lightNeonBlue
    @include textGlow($neonBlue, 1px)
.leftArrow
    @extend .arrowTemplate    
    left: .75em
    transform: rotateZ(15deg)
.rightArrow
    @extend .arrowTemplate 
    left: 8.36em
    transform: rotateZ(-15deg)
.dead
    cursor: inherit
    color: grey
    text-shadow: none
#wheel
    position: absolute
    bottom: -10em
    right: 1em
    z-index: 403
    #outerRim
        width: 29em
        height: 29em
        border-radius: 28em
        border: 4em solid darken($woodTint, 0%)
        z-index: 173
        position: relative
    #onePole
        position: absolute
        top: 17.5em
        left: 2em
        background-color: darken($woodTint, 5%)
        width: 33em
        height: 3em
    #twoPole    
        position: absolute
        top: 17.5em
        left: 2em
        background-color: darken($woodTint, 5%)
        width: 33em
        height: 3em
        transform: rotateZ(60deg)
    #threePole
        position: absolute
        top: 17.5em
        left: 2em
        background-color: darken($woodTint, 5%)
        width: 33em
        height: 3em
        transform: rotateZ(120deg)
    #innerCircle  
        position: absolute
        top: 14em
        left: 14em
        background-color: darken($woodTint, 0%)
        width: 10em
        height: 10em
        border-radius: 10em
#handle
    #handleParts
        position: absolute
        top: 1em
        right: 1em
        background-color: darken($woodTint, 0%)
        height: 1em
        width: 1em
    #topHandle
        @extend #handleParts
        top: 41em
        left: 88em
        height: 7em
        width: 9em
        border-top-right-radius: 3em
        transform: skewY(39deg)
    #rightHandle
        @extend #handleParts
        top: 47em
        right: 3.1em
        height: 26em
        width: 5.5em
    #handleCurve
        @extend #handleParts
        border-top: 1em solid darken($woodTint, 10%)
        border-right: 1em solid darken($woodTint, 10%)
        border-radius: 2em
        right: 8em
        height: 29em
        width: 4em
        background-color: inherit
        top: 45em
        transform: skewY(39deg)
#leftPart
    #roof    
        width: 12em
        position: absolute
        height: 2em
        left: 1em
        transform: rotateZ(-28deg)
        top: 22em
        background-color: $roofTint
    #roofPole    
        width: 1.5em
        position: absolute
        height: 48em
        top: 24em
        z-index: -1
        left: 5em
        background-color: darken($woodTint, 15%)
#signHooks    
    width: 28em
    height: 8em
    top: 37em
    left: 19em
    position: absolute
    #hook
        width: .5em
        height: 8em
        background-color: black
        position: absolute
    #leftHook
        @extend #hook
        left: 0
    #rightHook
        @extend #hook
        right: 0
#backwall
    background-color: darken($woodTint, 25%)
    position: absolute
    top: 37em
    left: 0
    right: 0
    margin: 0 auto
    width: 52em
    z-index: -1
    height: 36em
#rightwall
    background-color: darken($bannerTint, 10%)
    position: absolute
    top: 37em
    right: 16em
    width: 8em
    z-index: -1
    height: 36em
#hangingSign
    width: 30em
    height: 11em
    position: absolute
    top: 40em
    left: 18em
    background-color: darken($woodTint, 0%)
    display: flex
    align-items: center
    justify-content: center
    h2
        font-size: 5em
        font-family: calig
#stoolGroup
    position: absolute
    bottom: 0
    height: 21em
    width: 53em
    left: 47em
    z-index: 600
    .seat
        height: 5em
        width: 17em
        border-radius: 1em
        background-color: $roofTint
    .pole
        width: 4em
        height: 16em
        margin: 0 auto
        background-color: $metalColor
    #stoolOne
        display: inline-block
        height: 100%
    #stoolTwo
        @extend #stoolOne
        margin-left: 4em
#poleLeft
    background-color: darken($woodTint, 10%)
    width: 4em
    top: 37em
    left: 12em
    height: 35em
    position: absolute
#poleRight
    @extend #poleLeft
    left: initial
    right: 12em
#tableTop
    width: 94em
    top: 71em
    background-color: darken($woodTint, 5%)
    position: absolute
    height: 4em
    margin: 0 auto
    left: 0
    right: 0
    z-index: 400
#tableFront
    position: absolute
    bottom: 0
    background-color: darken($woodTint, 20%)
    left: 0
    right: 0
    margin: 0 auto
    width: 89em
    height: 26em
#lantern    
    position: absolute
    width: 16em
    top: 39em
    right: 14em
    pointer-events: none
    z-index: 50
    h3    
        font-size: 7em
        z-index: 300
        position: absolute
        top: 1em
        left: 0
        right: 0
        margin: 0 auto
        text-align: center
        font-family: topLogo
    h4
        @extend h3
        top: 2em
    img
        width: 100%    
        filter: hue-rotate(300deg)
#scene
    width: 100%
    height: 100%
    line-height: 0
    transition: transform .5s
    #woodBack
        position: absolute
        top: 7.5em
        left: 0
        width: 78em
        right: 0
        height: 30em
        margin: 0 auto
        background-color: darken($woodTint, 0%)
    #tinRoof
        position: absolute
        top: 7.5em
        left: 0
        width: 80em
        right: 0
        z-index: 80
        margin: 0 auto
        border-bottom: 2.5em solid $roofTint
        border-left: 1.5em solid transparent
        border-right: 1.5em solid transparent
    #rowOfLights
        z-index: 499
        position: relative
        .lightOne    
            width: 10em
            height: 4em
            position: absolute
            left: 20.75em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            top: 7em
            background-color: $metalColor
        .lightTwo
            width: 10em
            left: 34.25em
            height: 4em
            position: absolute
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            top: 7em
            background-color: $metalColor
        .lightThree
            width: 10em
            height: 4em
            position: absolute
            right: 34.25em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            background-color: $metalColor
            top: 7em
        .lightFour  
            width: 10em
            height: 4em
            position: absolute
            right: 20.75em
            border-top-left-radius: 10em
            border-top-right-radius: 10em
            background-color: $metalColor
            top: 7em
    #shadowTheHedgehog
        opacity: .75
        position: relative
        z-index: 500
        pointer-events: none
        .shadow
            background-color: black
            position: absolute
            display: block
            transform: rotateZ(45deg)
            filter: blur(2.75em)
        .topShadow
            background-color: black
            position: absolute
            display: block
            top: 0
            width: 100em
            height: 11em
            filter: blur(1em)
        .farLeft
            @extend .shadow
            width: 52em
            height: 47em
            left: -35.5em
            top: -18em
        .midOne
            @extend .shadow    
            width: 10em
            left: 27.5em
            top: 1.5em
            height: 10em
        .midThree
            @extend .shadow     
            width: 25em
            left: 0
            right: 0
            margin: 0 auto
            top: -12.5em
            height: 25em
        .midFive
            @extend .shadow
            width: 10em
            right: 27.5em
            top: 1.5em
            height: 10em
        .farRight
            @extend .shadow
            width: 46em
            height: 45em
            right: -32.75em
            top: -12em
        .lightFlicker
            width: 91em
            height: 54em
            background-color: black
            position: absolute
            top: -3em
            right: -61.5em
            -webkit-transform: rotateZ(45deg)
            transform: rotateZ(45deg)
            opacity: 0
            //animation: lightShake 10s steps(5, start) infinite alternate-reverse
    #logo
        position: absolute
        z-index: 999
        bottom: 0
        color: $neonRed
        width: 25em
        height: 21em
        left: 8em
        display: block
        pointer-events: none
        h1
            font-size: 7em
            display: block
            height: 1em
            text-transform: uppercase
            font-family: Alien
    #blackFilter
        position: absolute
        bottom: 0
        z-index: 900
        width: 100em
        pointer-events: none
        height: 50em
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1) 90%)
    #backboard
      background-color: $bannerTint
      @include boxGlow($bannerTint)
      height: 27em
      position: absolute
      z-index: 50
      top: 9em
      margin: 0 auto
      right: 0
      left: 0
      width: 73em
    #comixSign
        width: fit-content
        display: block
        position: absolute
        z-index: 100
        left: 0
        margin: 0 auto
        right: 0
        top: 33em
        display: flex
        h1
            font-size: 4em
            font-family: calig
            @include textGlow($neonPink, 1px)
            color: white
        h2
            @include textGlow($neonPink, 1px)
            color: white
            font-family: VCR    
            font-size: 2em
            line-height: 1
    #bg
      background-size: 100% 100%
      position: absolute
      top: 0
      left: 0
      width: 100em
      height: 100em
    #citybg
        @extend #bg
        background-image: url("/assets/global/comicArch/bgidk3.jpg")
        image-rendering: optimizeSpeed
        image-rendering: -moz-crisp-edges
        image-rendering: -o-crisp-edges
        image-rendering: -webkit-optimize-contrast
        image-rendering: pixelated
        image-rendering: optimize-contrast
        -ms-interpolation-mode: nearest-neighbor
        z-index: -202    
        filter: brightness(0.5)
    #glowbg
        @extend #bg
        background-image: linear-gradient(to bottom, $neonPink, black)
        z-index: -200
        opacity: .3
    #menu
        width: 70em
        position: absolute
        top: 13em
        left: 0
        height: 17.5em
        right: 0
        margin: 0 auto
        display: flex
        flex-direction: row-reverse
        z-index: 100
        text-align: right
        .contentBoxes
            display: inline-block
            font-family: VCR
            position: relative
            overflow: hidden
            line-height: normal
            color: white
            font-weight: 100
            animation: screenGlow 10s infinite
            width: 17.5em
            height: 17.5em
            .boxWrap
                &:hover
                    filter: contrast(2)
                img
                    width: 100%
                .boxDate
                    bottom: 0
                    margin: 0
                    width: fit-content
                    left: 0
                    padding: 0 3px 0 3px
                    right: 0
                    font-size: 2em
                    background-color: rgba(0,0,0,.75)
                    pointer-events: none
                    z-index: 5
                    text-decoration: none
                    margin: .25em auto
                    position: absolute
            .titleName
                position: absolute
                text-transform: uppercase
                text-align: center
                z-index: 6
                left: 0
                right: 0
                width: fit-content
                pointer-events: none
                margin: .5em auto
                display: inline-block
                .titleText
                    background-color: rgba(0,0,0,.75)
                    text-decoration: none
                    font-size: 3em
                .subtitle
                    background-color: rgba(0,0,0,.75)
                    text-decoration: none
                    font-size: 1.5em
                    display: block
@keyframes screenGlow
    0%
        opacity: .9
    50%
        opacity: 1
    100%
        opacity: .9
@keyframes lightShake
    0%
        opacity: 0
    99%
        opacity: 0
    100%
        opacity: 1
</style>