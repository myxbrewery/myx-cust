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
			id: 123912323,
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