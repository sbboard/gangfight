import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var pageList = require('./pageDescriptions.json');

export const store = new Vuex.Store({
    state:{
        currentPage: "Home",
        pageDescrip: "Welcome to Gang Fight. We've been waiting for you. Now we can begin.",
        fortune: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    getters:{
        getPage: state=> {
            return state.currentPage
        },
        getPageDescription: state=> {
            return state.pageDescrip
        },
        getFortune: state=> {
            return state.fortune
        }
    },
    mutations: {
        changePage(state,n){
            state.currentPage = n
            state.pageDescrip = pageList[n].description
        },
        changeFortune(state,n){
            state.fortune = n
        }
    }
});