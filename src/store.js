import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        assets: "default"
    },
    getters:{
        getFortune: state=> {
            return state.fortune
        },
        assetFolder: state=> {
            return state.assets
        }
    },
    mutations: {
        changeFortune(state,n){
            state.fortune = n
        },
        setAsset(state,n){
            //valentines
            if(n[1]==2){
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
            else{
                state.assets = "default"
            }
        }
    }
});