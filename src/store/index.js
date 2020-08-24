import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import shopdetail from "./shopdetail";
import backshoplist from "./backshoplist";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tab,
    shopdetail,
    backshoplist
  }
});
