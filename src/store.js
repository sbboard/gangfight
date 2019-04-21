import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        assets: "default",
        isTaller: "vw",
        GFAPI: process.env.VUE_APP_API
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
        }
    },
    mutations: {
        changeFortune(state,n){
            state.fortune = n
        },
        setTaller(state,n){
            state.isTaller = n
        },
        setAsset(state,n){
            //valentines
            if(n[1]==2 && n[0] < 16){
                state.assets = "2valentines"
            }
            //halloween
            else if(n[1]==10){
                state.assets = "10halloween"
            }
            //christmas
            else if(n[1]==12 && n[0] < 31){
                state.assets = "12christmas"
            }
            //new years
            else if(n[1]==12 && n[0] == 31){
                state.assets = "1newYears"
            }
            //summer gang fight
            else if(n[1] >= 5 && n[1] <= 8){
                state.assets = "8summer"
            }
            else{
                state.assets = "0default"
            }
        }
    }
});