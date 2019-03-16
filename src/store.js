import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        assets: "default",
        isTaller: "vw"
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
                state.assets = "valentines"
            }
            //halloween
            else if(n[1]==10){
                state.assets = "halloween"
            }
            //christmas
            else if(n[1]==12 && n[0] < 31){
                state.assets = "christmas"
            }
            //new years
            else if(n[1]==12 && n[0] == 31){
                state.assets = "newYears"
            }
            //summer gang fight
            else if(n[1] >= 5 && n[1] <= 8){
                state.assets = "summer"
            }
            else{
                state.assets = "default"
            }
        }
    }
});