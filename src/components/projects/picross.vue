<template>
    <div id="picrossProj" :style="fontSize"
    @mousedown="penActive = true"
    @mouseup="penActive = false">
        <h1>Picross</h1>
        <div id="puzzleMode" v-if="this.puzzle > -1 && this.puzzleWorks()">
            <div id="puzzle" :style="{paddingRight: ((39 / largestArray) * leftLength)+'em'}">
                <div id="TopLaw">
                    <div class="cube corner"></div>
                    <div class="law cube" v-for="(item, index) in puzzleArray[puzzle].x" :key="`${index}`"
                        :style="{
                            minHeight: (39 / largestArray) + 'em',
                            minWidth: (39 / largestArray) + 'em'
                            }"
                        :class="{
                            highlighty : currentHoverY == index
                            }">
                        <span v-for="(item, id) in puzzleArray[puzzle].x[index]" :key="`${id}`"
                        :style="{
                            fontSize: (39 / largestArray) + 'em'
                            }">
                            {{puzzleArray[puzzle].x[index][id]}}
                        </span>
                    </div>
                </div>
                <div class="row" v-for="(item, index) in puzzleArray[puzzle].y" :key="`${index}`">
                    <div class="law cube sideLaw"
                        :style="{
                            minHeight: (39 / largestArray) + 'em'
                            }"
                        :class="{
                            highlightx : currentHoverX == index
                            }">
                        <span v-for="(item, id) in leftLength" :key="`${id}`"
                        :style="{
                            fontSize: (39 / largestArray) + 'em'
                            }">
                            {{puzzleArray[puzzle].y[index][(leftLength-1)-id]}}
                        </span>
                    </div>
                    <!-- LOOP -->
                    <div v-for="(item, id) in puzzleArray[puzzle].x" :key="`${id}`"
                        :id="index+'V'+id" 
                        @click="clickCube(index+'V'+id)" 
                        @mouseover="function(){
                            currentHoverX = index;
                            currentHoverY = id;
                            penPaint(index+'V'+id)
                        }"
                        @mousedown="penActive = true;penPaint(index+'V'+id)"
                        @mouseleave="function(){
                            currentHoverX = -1;
                            currentHoverY = -1;
                        }"
                        class='cube picCube'
                        :class="{
                            x : Xcubes.includes(index+'V'+id),
                            black : selectedCubes.includes(index+'V'+id),
                            blank : !selectedCubes.includes(index+'V'+id) && !Xcubes.includes(index+'V'+id),
                            highlightx : currentHoverX == index,
                            highlighty : currentHoverY == id,
                            hover: currentHoverY == id && currentHoverX == index
                            }"
                        :style="{
                            width: (39 / largestArray) + 'em',
                            height: (39 / largestArray) + 'em'
                            }">
                    </div>
                </div>  
            </div>
            <div id="modeBar">
                <h4>INPUT MODE:</h4> 
                <template v-if="currentMode">
                    <span @click="currentMode = !currentMode">PEN</span>
                    <span @click="pen = 'blank'">BLANK</span>
                    <span @click="pen = 'x'">X</span>
                    <span @click="pen = 'black'">BLACK</span>
                </template>
                <template v-else>
                    <span @click="currentMode = !currentMode">CLICK</span>
                </template>
            </div>
            <div id="result">{{result}}</div>
            <div id="btnBar">
                <button id="checkBtn" @click="finished()">
                    Check Answer
                </button>
                <button id="reset" @click="resetPuzz()">
                    Reset
                </button>
                <button id="menuBtn" @click="puzzle = -1;resetPuzz();largestArray = 0;leftLength = 0">
                    Quit
                </button>
            </div>
        </div>
        <div v-else id="menuMode" >
            <span v-for="(item, id) in puzzleArray" :key="`${id}`" @click="puzzle = id;resetPuzz()">Puzzle {{id+1}}: {{item.name}}</span>
        </div>
      <div id="city"></div>
      <div id="cityLights"></div>
      <div id="cityOfStars"></div>
      <div id="cityBlues"></div>
    </div>
</template>

<script>
import puzzleArray from './puzzles.js'

export default {
    data(){
        return{
            puzzleArray: puzzleArray,
            puzzle: -1,
            result: "",
            puzzleHTML: "",
            selectedCubes: [],
            Xcubes: [],
            largestArray: 0,
            leftLength: 0,
            currentHoverX: -1,
            currentHoverY: -1,
            currentMode: false,
            pen: "black",
            penActive: false
        }
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    watch:{
        puzzle(){
            if(this.puzzle > -1){
                this.largestArray = puzzleArray[this.puzzle].x.length
                for(let i = 0; i<puzzleArray[this.puzzle].y.length;i++){
                    if(this.leftLength < puzzleArray[this.puzzle].y[i].length){
                        this.leftLength = puzzleArray[this.puzzle].y[i].length
                    }
                }
            }
        },
    },
    mounted(){
        this.puzzleArray.sort((a, b) => (a.x.length > b.x.length) ? 1 : -1)
    },
    methods: {
        checkAnswer(){
            return true
        },
        testString(XString,i,Axle){
            let XStringS = XString
            let XStringNoS = XString
            XStringNoS = XStringNoS.replace(/blank/g, "");
            XStringNoS = XStringNoS.replace(/x/g, "");
            XStringNoS = XStringNoS.replace(/black/g, "1");
            XStringS = XStringS.replace(/blank/g, "0");
            XStringS = XStringS.replace(/x/g, "0");
            XStringS = XStringS.replace(/black/g, "1");
            let totalBlack = 0
            let doubleSpaces = true
            let groupCount = true
            for(let x = 0; x < puzzleArray[this.puzzle][Axle][i].length;x++){
                totalBlack += puzzleArray[this.puzzle][Axle][i][x]
            }
            if(puzzleArray[this.puzzle][Axle][i].length > 1){
                if(XStringS.lastIndexOf('1') - XStringS.indexOf('1') <= 1){
                    doubleSpaces = false
                }
            }
            else{
                let expectedString = ""
                for(let z = 0; z<puzzleArray[this.puzzle][Axle][i][0]; z++){
                    expectedString += "1"
                }
                if(XStringS.indexOf(expectedString) == -1){
                    groupCount = false
                }
            }
            if(XStringNoS.length != totalBlack || doubleSpaces == false || groupCount == false){
                return false
            }
        },
        clickCube(cube){
            if(this.currentMode == false){
                if(this.Xcubes.includes(cube)){
                    this.Xcubes.splice(this.Xcubes.indexOf(cube),1)
                    this.selectedCubes.push(cube)
                }
                else if(this.selectedCubes.includes(cube)){
                    this.selectedCubes.splice(this.selectedCubes.indexOf(cube),1)
                }
                else{
                    this.Xcubes.push(cube)
                }
            }
        },
        penPaint(cube){
            if(this.penActive == true && this.currentMode == true){
                if(this.pen == "black"){
                    if(this.Xcubes.indexOf(cube) > -1){
                        this.Xcubes.splice(this.Xcubes.indexOf(cube),1)
                    }
                    this.selectedCubes.push(cube)
                }
                else if(this.pen == "x"){
                    if(this.selectedCubes.indexOf(cube) > -1){
                        this.selectedCubes.splice(this.selectedCubes.indexOf(cube),1)
                    }
                    this.Xcubes.push(cube)
                }
                else{
                    if(this.Xcubes.indexOf(cube) > -1){
                        this.Xcubes.splice(this.Xcubes.indexOf(cube),1)
                    }
                    else if(this.selectedCubes.indexOf(cube) > -1){
                        this.selectedCubes.splice(this.selectedCubes.indexOf(cube),1)
                    }
                }
            }
        },
        resetPuzz(){
            this.Xcubes = []
            this.selectedCubes = []
            this.result = ""
        },
        puzzleWorks(){
            //check to make sure there's room for each thing
            let amountOfX = 0
            let amountOfY = 0
            for(let i = 0; i<puzzleArray[this.puzzle].x.length;i++){
                for(let h = 0;h<puzzleArray[this.puzzle].x[i].length;h++){
                    amountOfX += puzzleArray[this.puzzle].x[i][h]
                }
            }
            for(let i = 0; i<puzzleArray[this.puzzle].y.length;i++){
                for(let h = 0;h<puzzleArray[this.puzzle].y[i].length;h++){
                    amountOfY += puzzleArray[this.puzzle].y[i][h]
                }
            }
            if(puzzleArray[this.puzzle].x.length != puzzleArray[this.puzzle].y.length){
                this.result = `PUZZLE DRAW ERROR: not a square</br>X:${puzzleArray[this.puzzle].x.length} Y:${puzzleArray[this.puzzle].y.length}`
                return false
            }
            else if(amountOfX != amountOfY){
            this.result = `PUZZLE DRAW ERROR: unequal amount of squares</br>
            X:${amountOfX} Y:${amountOfY}`
            }
            else{return true}
        },
        finished(){
            let cubeList = document.getElementsByClassName("picCube")
            let valid = true
            
            ////////////////////////////////
            //check X
            //////////////////////////////////
            for(let i=0;i<puzzleArray[this.puzzle].x.length;i++){
                let ClassString = ""
                for(let j=0;j<puzzleArray[this.puzzle].y.length;j++){
                    ClassString += cubeList[`${i}V${j}`].classList[2]
                }
                if(this.testString(ClassString,i,"y") == false){
                    valid = false
                }
            }
            
            ///////////////////////////////
            //check Y
            //////////////////////////
            for(let i=0;i<puzzleArray[this.puzzle].y.length;i++){
                let ClassString = ""
                for(let j=0; j<puzzleArray[this.puzzle].x.length;j++){
                    ClassString += cubeList[`${j}V${i}`].classList[2]
                }
                if(this.testString(ClassString,i,"x") == false){
                    valid = false
                }
            }
            //////////////////////////////////////////////////////////////
            if(valid == true){
                this.result = "nice job."
            }
            else{
                this.result = "this aint it, boss."
            }
        }
    },
}
</script>

<style lang="sass" scoped>
@import "../../css/reset.css"
@import "../../css/gangColors.sass"
@import "../../css/gangFonts.sass"

$testSize: 39 / 7 + em

#modeBar
    font-family: ferriteDX
    font-size: 3em
    text-align: center
    margin-top: .5em
    background-color: black
    h4
        width: 9em
        display: inline-block
        margin-right: 1em
    span
        width: 5em
        display: inline-block
        cursor: pointer
#picrossProj
    font-family: Montserrat
    color: $neonRed
    user-select: none
    h1
        font-size: 4em
        text-align: center
        margin: 1em 0
    #btnBar
        margin: 0 auto
        text-align: center
        button
            margin: 1em .5em
            font-size: 1.5em
#menuMode
    span
        font-size: 3em
#puzzle
    width: fit-content
    margin: 0 auto

.cube
  border: 1px solid black
  display: inline-block
  margin: 0
  line-height: 1
.row
    display: flex
    margin: 0
    margin-left: auto
    line-height: 0
    width: fit-content

#TopLaw
  display: flex
  margin-left: auto
  width: fit-content
  border-top: 0px
.corner
  opacity: 0

.picCube
  cursor: pointer

.x
  background-color: red

.black
  background-color: $neonBlue
span
    display: block
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
#result
    text-align: center
    font-size: 3em
    margin-top: .5em
    height: 1em
.blank
    background-color: rgba(255,255,255,.1)
.highlightx
    border-top: 1px solid yellow
    border-bottom: 1px solid yellow
    &.blank
        background-color: rgba(255,255,255,.35)
.highlighty
    border-left: 1px solid yellow
    border-right: 1px solid yellow
    &.blank
        background-color: rgba(255,255,255,.35)
.hover
    &.blank
        background-color: rgba(255,255,255,.5)
.law
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
    min-height: $testSize
    height: inherit
    background-image: linear-gradient(to bottom, #ff000000 , $neonBlue)
    opacity: 1
    span
        width: 1em
        text-align: center
        height: 1em
.sideLaw
    justify-content: flex-end
    align-items: center
    flex-direction: inherit
    background-image: linear-gradient(to right, #ff000000 , $neonBlue)
    width: inherit
    border-left: 0px
</style>