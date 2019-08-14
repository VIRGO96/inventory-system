import Vuex from 'vuex';
import Vue from 'vue';
import suppliers from './modules/suppliers';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        suppliers
    }
});