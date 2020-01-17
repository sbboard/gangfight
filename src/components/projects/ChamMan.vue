<template>
    <div id="bigPic" :style="fontSize">
        <div id="gameBox">
            <img class="char left main"  :class="(mainLeft=='')?'offscreen':''" :src="`/projects/chameleonMan/CHAR/${mainLeft}.png`"/>
            <img class="char left secondary"  :class="(secLeft=='')?'offscreen':''" :src="`/projects/chameleonMan/CHAR/${secLeft}.png`"/>
            <img class="char right main"  :class="(mainRight=='')?'offscreen':''" :src="`/projects/chameleonMan/CHAR/${mainRight}.png`"/>
            <img class="char right secondary"  :class="(secRight=='')?'offscreen':''" :src="`/projects/chameleonMan/CHAR/${secRight}.png`"/>
            <!--<div id="chameleonMan" class="char left">
                <img :src="currentFace.eyes"/>
                <img :src="currentFace.nose"/>
                <img :src="currentFace.mouth"/>
            </div>-->
            <img id="bg" :src="`/projects/chameleonMan/CG/${currentCG}.png`"/>
        </div>
        <div id="statBox">
            {{fame}}
            {{cop}}
        </div>
        <div id="textBox">
            <div id="textBoxWrap">
                <div id="maskBox"></div>
                <div id="actualText" :class="{ promptGo: !textTyping }" @click="advance()">
                    {{nameTranslate(script[currentAct][currentScene].text[currentLine][0])}}<template v-if="script[currentAct][currentScene].text[currentLine][0] != ''">:</template>
                    {{printText(script[currentAct][currentScene].text[currentLine])}}
                    {{textOut}}
                    <div id="promptText" v-if="!textTyping">{{prompt}}</div>
                </div>
            </div>
        </div>
        <div id="blackBlock"></div>
    </div>
</template>

<script>
import script from '../../ChamManScript.js'
let looper

export default {
    data(){
        return{
            fame: 5,
            cop: 50,
            currentAct: 0,
            currentScene: 0,
            currentLine: 0,
            mainLeft: "",
            secLeft: "",
            mainRight: "",
            textTyping: false,
            textIn: "",
            textOut: "",
            secRight: "",
            currentTextChar: 0,
            currentType: "",
            charactersOnStage: ["","","",""],
            eyeOptions: [],
            noseOptions: [],
            mouthOptions: [],
            currentFace: {
                "eyes":0,
                "nose":0,
                "mouth":0
            },
            usedFaceIndex: {},
            script: script,
            currentCG: "intro-title",
            prompt: "hit space or click to start",
        }
    },
    methods: {
        advance(){
            //early stop if texttyping is going
            if(this.textTyping == true){
                // this.textOut = this.textIn[1]
                // clearTimeout(looper)
                // this.textTyping = false
                // let arrayPos = this.charactersOnStage.indexOf(this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0])
                // if(arrayPos == 0){
                //     this.mainLeft = this.mainLeft.split("-o")[0]
                // }
                // else if(arrayPos == 1){
                //     this.secLeft = this.secLeft.split("-o")[0]
                // }
                // else if(arrayPos == 2){
                //     this.secRight = this.secRight.split("-o")[0]
                // }
                // else if(arrayPos == 3){
                //     this.mainRight = this.mainRight.split("-o")[0]
                // }
            }
            else{
            if(this.currentLine < this.script[this.currentAct][this.currentScene].text.length-1){
                this.currentLine++
            }
            else{
                if(typeof this.script[this.currentAct][this.currentScene].next == "number"){
                    this.currentLine = 0
                    this.currentScene = this.script[this.currentAct][this.currentScene].next
                    this.charactersOnStage = []
                    this.mainLeft = ""
                    this.mainRight = ""
                    this.secLeft = ""
                    this.secRight = ""
                }
                else if(this.script[this.currentAct][this.currentScene].next.includes("ACT")){
                    let nextAct = this.script[this.currentAct][this.currentScene].next.split("-")[1]
                    this.currentAct = nextAct
                    this.currentLine = 0
                    this.currentScene = 0
                }
                else if(this.script[this.currentAct][this.currentScene].next.includes("idle")){
                    //this.textTyping = true
                }
            }
            if(this.script[this.currentAct][this.currentScene].type == "CG"){
                this.currentCG = this.script[this.currentAct][this.currentScene].CG
            }
            else if(this.script[this.currentAct][this.currentScene].type == "scene"){
                this.currentCG = this.script[this.currentAct][this.currentScene].bg
                if(this.charactersOnStage.includes(this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0])){
                    let arrayPos = this.charactersOnStage.indexOf(this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0])
                    if(arrayPos == 0){
                        this.mainLeft = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(arrayPos == 1){
                        this.secLeft = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(arrayPos == 2){
                        this.secRight = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(arrayPos == 3){
                        this.mainRight = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                }
                else{
                    let position = this.script[this.currentAct][this.currentScene].text[this.currentLine][2]
                    if(position == "mainRight"){
                        this.charactersOnStage[3] = this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0]
                        this.mainRight = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(position == "mainLeft"){
                        this.charactersOnStage[0] = this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0]
                        this.mainLeft = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(position == "secRight"){
                        this.charactersOnStage[2] = this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0]
                        this.secRight = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                    else if(position == "secLeft"){
                        this.charactersOnStage[1] = this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0]
                        this.secLeft = this.script[this.currentAct][this.currentScene].text[this.currentLine][0]
                    }
                }
            }
            else if(this.script[this.currentAct][this.currentScene].type == "interactive"){
                //

                this.promptReady = false
            }}
        },
        nameTranslate(name){
            let nameIso = name.split("-")[0]
            switch (nameIso) {
                case "IPJR":
                    return "Agent Bijou"
                case "IP":
                    return "Agent Taro"
                case "SAL":
                    return "Sal"
                case "???":
                    return "???"
                default:
                    return ""
            }
        },
        printText(text){
            this.textIn = text
        }
    },
    computed: {
        fontSize(){
            return {fontSize: '1'+this.$store.getters.getTaller}
        },
    },
    watch: {
        textIn(){
            let currentPos = ""
            this.textOut = ""
            let arrayPos = this.charactersOnStage.indexOf(this.script[this.currentAct][this.currentScene].text[this.currentLine][0].split('-')[0])
            if(arrayPos == 0){
                currentPos = this.mainLeft
            }
            else if(arrayPos == 1){
                currentPos = this.secLeft
            }
            else if(arrayPos == 2){
                currentPos = this.secRight
            }
            else if(arrayPos == 3){
                currentPos = this.mainRight
            }
            clearTimeout(looper)
            if(this.textIn[1].length > 0){
                let i = 0
                this.textTyping = true
                let self = this
                let normSpeech = 75
                let timeStop = normSpeech

                // eslint-disable-next-line
                function myLoop() {
                    looper = setTimeout(function() {
                        self.textOut += self.textIn[1][i]
                        if (currentPos.includes("-o")) {
                            currentPos = currentPos.split("-o")[0]
                        } else {
                            currentPos = currentPos + "-o"
                        }
                        if (self.textIn[1][i] == "?" || self.textIn[1][i] == "!" || self.textIn[1][i] == "." || self.textIn[1][i] == "-") {
                            timeStop = normSpeech * 2
                            currentPos = currentPos.split("-o")[0]
                        }
                        else if(self.textIn[1][i] == " "){
                            timeStop = normSpeech
                            currentPos = currentPos.split("-o")[0]
                        }
                        else {
                            timeStop = normSpeech
                        }
                        i++
                        if(arrayPos == 0){
                            self.mainLeft = currentPos
                        }
                        else if(arrayPos == 1){
                            self.secLeft = currentPos
                        }
                        else if(arrayPos == 2){
                            self.secRight = currentPos
                        }
                        else if(arrayPos == 3){
                            self.mainRight = currentPos
                        }
                        if (i < self.textIn[1].length) {
                            myLoop();
                        }
                        else{
                            if(isNaN(self.script[self.currentAct][self.currentScene].next)&&self.script[self.currentAct][self.currentScene].next.includes("idle")){
                                //
                            }
                            else{
                                self.textTyping = false
                            }
                            currentPos = currentPos.split("-o")[0]
                            if(arrayPos == 0){
                                self.mainLeft = currentPos
                            }
                            else if(arrayPos == 1){
                                self.secLeft = currentPos
                            }
                            else if(arrayPos == 2){
                                self.secRight = currentPos
                            }
                            else if(arrayPos == 3){
                                self.mainRight = currentPos
                            }
                        }
                    }, timeStop)
                }
                myLoop()
            }
        }
    }
}
</script>

<style lang="sass" scoped>
#bigPic
    background-color: black
    position: relative
    #blackBlock
        background-color: black
        position: absolute
        bottom: 0
        height: 10em
        width: 100vw
    #gameBox
        position: relative
        top: 0
        height: 55em
        width: 100%
        #bg
            width: 100em
            height: 100%
            position: absolute
            z-index: 1
        .char
            position: absolute
            bottom: 0
            &.left
                &:not(.offscreen)
                    transition: left .5s
                &.main
                    left: 1em
                    &.offscreen
                        left: -31em
                &.secondary
                    left: 17em
                    &.offscreen
                        left: -45em
            &.right
                &:not(.offscreen)
                    transition: left .5s
                &.main
                    right: 1em
                    &.offscreen
                        right: -31em
                &.secondary
                    right: 17em
                    &.offscreen
                        right: -45em
            &.main
                z-index: 5
                width: 30em
            &.secondary
                z-index: 4
                width: 27em
            
    #textBox
        width: 100%
        background-color: blue
        height: 25em
        position: absolute
        bottom: 10em
        opacity: .5
        user-select: none
        #textBoxWrap
            position: relative
            width
            #maskBox
                height: 25em
                width: 25em
                background-color: red
                display: block
            #actualText
                width: 37em
                padding: .5em
                height: 12em
                background-color: yellow
                display: block
                position: absolute
                right: 0
                top: 0
                font-size: 2em
                #promptText
                    display: none
                &.promptGo
                    cursor: pointer
                    #promptText
                        width: 100%
                        position: absolute
                        bottom: 0
                        text-align: center
                        font-size: 1em
                        padding-bottom: .5em
                        display: block
    #statBox
        height: 10em
        background-color: green
        bottom: 35em
        width: 100%
        position: absolute
        opacity: .5
</style>