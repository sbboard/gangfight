<template>
    <div>
        <template v-if="this.puzzleWorks()">
            <div id="puzzle">
                <div id="TopLaw">
                    <div class="cube corner"></div>
                    <div class="law cube" v-for="(item, index) in puzzleArray[puzzle].x" :key="`${index}`">
                        <span v-for="(item, id) in puzzleArray[puzzle].x[index]" :key="`${id}`">
                            {{puzzleArray[puzzle].x[index][id]}}
                        </span>
                    </div>
                </div>
                <div class="row" v-for="(item, index) in puzzleArray[puzzle].y" :key="`${index}`">
                    <div class="law cube sideLaw">
                        <span v-for="(item, id) in puzzleArray[puzzle].y[index]" :key="`${id}`">
                            {{puzzleArray[puzzle].y[index][id]}}
                        </span>
                    </div>
                    <!-- LOOP -->
                    <div v-for="(item, id) in puzzleArray[puzzle].x" :key="`${id}`"
                        :id="index+'V'+id" 
                        @click="clickCube(index+'V'+id)" 
                        class='cube picCube'
                        :class="{
                            x : Xcubes.includes(index+'V'+id),
                            black : selectedCubes.includes(index+'V'+id),
                            blank : !selectedCubes.includes(index+'V'+id) && !Xcubes.includes(index+'V'+id)
                            }">
                    </div>
                </div>  
            </div>
        </template>
        <div id="result">{{result}}</div>
        <button id="checkBtn" @click="finished()">
            Check Answer
        </button>
        <button id="reset" @click="resetPuzz()">
            Reset
        </button>
    </div>
</template>

<script>
import puzzleArray from './puzzles.js'

export default {
    data(){
        return{
            puzzleArray: puzzleArray,
            puzzle: 0,
            result: "",
            puzzleHTML: "",
            selectedCubes: [],
            Xcubes: []
        }
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
            if(this.Xcubes.includes(cube)){
                this.Xcubes.splice(this.Xcubes.indexOf(cube),1)
                this.selectedCubes.push(cube)
            }
            else if(this.selectedCubes.includes(cube)){
                this.selectedCubes.splice(this.Xcubes.indexOf(cube),1)
            }
            else{
                this.Xcubes.push(cube)
            }
        },
        resetPuzz(){
            let cubeList = document.getElementsByClassName("picCube")
            for(let b = 0; b < cubeList.length; b++){
                if(cubeList[b].classList[2] != "blank")
                    cubeList[b].classList.remove(cubeList[b].classList[2])
                cubeList[b].classList.add("blank")
            }
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
                this.result = "nice job"
            }
            else{
                this.result = "try again!"
            }
        }
    },
}
</script>

<style lang="sass" scoped>
#puzzle
  width: fit-content

.cube
  border: 1px solid #efefef
  display: inline-block
  width: 25px
  height: 25px
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

.law
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
    min-height: 25px
    height: inherit
    background-image: linear-gradient(to bottom, #ff000000 , cyan)

.sideLaw
    justify-content: flex-end
    align-items: center
    flex-direction: inherit
    background-image: linear-gradient(to right, #ff000000 , cyan)
    width: inherit

.sideLaw span
  margin-left: .5em

.corner
  opacity: 0

.picCube
  cursor: pointer

.x
  background-color: red

.black
  background-color: grey
</style>