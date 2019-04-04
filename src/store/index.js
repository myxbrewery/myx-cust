import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shop: null,
	},

	mutations: {
		enterShop(state, shop) {
			state.shop = shop;
		},
	},
});