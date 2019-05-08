import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shop: null,
		cart: {},
	},

	mutations: {
		enterShop(state, shop) {
			state.shop = shop;
		},

		addCart(state, item) {
			let { name, price } = item;
			
			if (name in state.cart) state.cart[name].quantity++;
			else state.cart[name] = { quantity: 1, price, };
		},
		removeCart(state, name) {
			if (name in state.cart) state.cart[name].quantity--;
			if (state.cart[name].quantity === 0) delete state.cart[name];
		},
		exitMenu(state) {
			state.shop = null;
			state.cart = {};
		},
	},
});