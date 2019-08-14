import Vuex from 'vuex';
import Vue from 'vue';
import suppliers from './modules/suppliers';
import products from './modules/products';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        suppliers,
        products
    }
});