import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fortune: "Challenge yourself to enjoy the exclusive flavors of Gang Fight.",
        assets: "default",
        isTaller: "vw",
        GFAPI: process.env.VUE_APP_API,
        date: [],
        archive: JSON.parse(process.env.VUE_APP_ARCH)
    },
    getters:{
        getFortune: state=> {
            return state.fortune
        },
        assetFolder: state=> {
            return state.assets
        },
        getTaller: state=> {
            return state.isTaller
        },
        getAPI: state=>{
            return state.GFAPI
        },
        getDate: state=>{
            return state.date
        },
        getArchive: state=>{
            return state.archive
        }
    },
    mutations: {
        changeFortune(state,n){
            state.fortune = n
        },
        setArchive(state,n){
            state.archive = n
        },
        setTaller(state,n){
            state.isTaller = n
        },
        setAsset(state,n){
            //valentines
            state.date = n
            if(n[1]==2 && n[0] < 16){
                state.assets = "2valentines"
                state.fortune = "Kiss your friends using Gang Fight's alluring sounds."
            }
            //halloween
            else if(n[1]==10){
                state.assets = "10halloween"
                state.fortune = "Spook the spirits by rubbing Gang Fight in your hair."
            }
            //christmas
            else if(n[1]==12 && n[0] < 31){
                state.assets = "12christmas"
                state.fortune = "Gift your friends the erotic sight of Gang Fight."
            }
            //new years
            else if(n[1]==12 && n[0] == 31){
                state.assets = "1newYears"
                state.fortune = "Starting off the new year correctly with a motivating Gang Fight."
            }
            //summer gang fight
            else if(n[1] >= 5 && n[1] <= 8){
                state.assets = "8summer"
                state.fortune = "Survive impending heat death - rub Gang Fight on your skin."
            }
            else{
                state.assets = "0default"
                state.fortune = "Challenge yourself to enjoy the exclusive flavors of Gang Fight."
            }
        }
    }
});