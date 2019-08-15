import Vuex from 'vuex';
import Vue from 'vue';
import suppliers from './modules/suppliers';
import products from './modules/products';
import customers from './modules/customers';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        suppliers,
        products,
        customers
    }
});