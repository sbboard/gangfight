import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        //currentPage: "hm",
        //pageDescrip: "Welcome to Gang Fight. We've been waiting for you. Now we can begin.",
        fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    getters:{
        getFortune: state=> {
            return state.fortune
        }
    },
    mutations: {
        changeFortune(state,n){
            state.fortune = n
        }
    }
});