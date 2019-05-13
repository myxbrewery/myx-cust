import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// serverRoot: 'http://18.138.9.151:11235',
		serverRoot: 'http://10.12.254.221:11235',
		shop: null,
		cart: [],
	},

	getters: {
		getFoodQuantityByName: (state) => (name) => {
			let qty = 0;
			for (let obj of state.cart) {
				if (obj.name === name) qty++;
			}
			return qty;
		},
	},

	mutations: {
		enterShop(state, shop) {
			state.shop = shop;
		},

		addCart(state, item) {
			state.cart.push(item);
		},

		exitMenu(state) {
			state.shop = null;
			state.cart = [];
		},
	},
});