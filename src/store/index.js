
import Vue from "vue";
import Vuex from "vuex";
import change from "./module/change.js"
import username from './module/username'
import changePic from './module/picture'
import homeTag from './module/homeTag'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    change,
    username,
    changePic,
    homeTag
  }
});
