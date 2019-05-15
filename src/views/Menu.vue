<template>
	<div id="menu">
		<NavBar :back="true" @back="navDialog = true" />
		<SectionTitle
			header1="Stall menu"
			header2="Order" />

		<FoodBar v-if="shop" class="elevation-1" style="height: 7.5%"
			:icon="shop.icon"
			:name="shop.name"
			:halal="shop.halal"
			:open="shop.open" />
		<FoodItem v-for="item in menu"
			:key="item.id"
			:item="item"
			@customizeFood="customize(item)" />

		<v-btn block dark
			class="btn"
			color="red accent-1"
			@click="handleCheckout">
			Checkout
		</v-btn>

		<v-snackbar
			v-model="snackbar"
			:top="true"
			:timeout="1500" >
				Cannot checkout empty cart
			<v-icon color="white">remove_shopping_cart</v-icon>
		</v-snackbar>

		<NavDialog
			:navDialog="navDialog"
			@closeDialog="closeNavDialog"
			@goBack="goBack" />

		<CustomizeDialog
			:foodDialog="foodDialog"
			:foodItem="foodItem"
			@closeDialog="closeCustomizeDialog" />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SectionTitle from '@/components/SectionTitle';
import FoodBar from '@/components/FoodBar';
import FoodItem from '@/components/menu/FoodItem';
import NavDialog from '@/components/menu/NavDialog';
import CustomizeDialog from '@/components/menu/CustomizeDialog';

export default {
	name: 'Menu',
	components: {
		NavBar,
		SectionTitle,
		FoodBar,
		FoodItem,
		NavDialog,
		CustomizeDialog,
	},

	data() {
		let shop = this.$route.params.shop || this.$store.state.shop;

		return {
			shop,
			menu: [],
			snackbar: false,  // cannot checkout empty cart
			navDialog: false,  // going back will empty your cart
			foodDialog: false,  // customize FoodItem
			foodItem: {},  // item to be customized
		};
	},

	created() {
		if (!this.shop) this.$router.push('browse');
	},

	mounted() {
		if (!this.shop) return;
		
		let root = this.$store.state.serverRoot;
		let { location, id } = this.shop;
		let url = `${root}/stallmenu/${location}/${id}`;
		fetch(url)
		.then(response => response.json())
		.then(json => { this.menu = json })
	},

	methods: {
		handleCheckout() {
			let cart = this.$store.state.cart;
			let numItems = cart.length;
			if (numItems > 0) this.$router.push('checkout');
			else this.snackbar = true;
		},

		closeNavDialog() {
			this.navDialog = false;
		},
		goBack() {
			this.closeNavDialog();

			this.$store.commit('exitMenu');
			this.$router.push('browse');
		},

		customize(item) {
			this.foodItem = item;
			this.foodDialog = true;
		},
		closeCustomizeDialog() {
			this.foodItem = {};
			this.foodDialog = false;
		},
	},
};
</script>

<style scoped>
#menu {
	height: 100%;
	position: relative;
}

#food-bar {
	margin-bottom: 4px;
}

.v-snack {
	font-size: 1.25rem;
	text-align: center;
}
</style>