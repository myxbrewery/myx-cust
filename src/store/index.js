import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// const serverHost = '18.138.9.151';  // ec2 instance
const serverHost = '10.12.254.221';  // local server

export default new Vuex.Store({
	state: {
		serverRoot: `http://${serverHost}:11235`,
		socketServer: `ws://${serverHost}:11236`,
		customer: {
			id: null,
			token: null,
			type: 'school',
		},
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
		userLogin(state, customer) {
			state.customer = customer;
		},

		enterShop(state, shop) {
			state.shop = shop;
		},

		addCart(state, item) {
			state.cart.push(item);
		},
		removeCart(state, item) {
			let index = state.cart.indexOf(item);
			if (index > -1) state.cart.splice(index, 1);
		},
		resetCart(state) {
			state.cart = [];
		},

		exitMenu(state) {
			state.shop = null;
			state.cart = [];
		},
	},
});