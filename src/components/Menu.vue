<template>
	<div id="menu">
		<SearchBar />
		<SectionTitle
			header1="Stall menu"
			header2="Order" />
		<div class="myx-container">
			<FoodBar class="elevation-1"
				:icon="shop.icon"
				:title="shop.title"
				:price="shop.price"
				:halal="shop.halal" />
			<div class="scrollable">
				<FoodItem v-for="(item, index) in menu"
					:key="index"
					:name="item.name"
					:text="item.text"
					:thumbnail="item.thumbnail"
					:price="item.price" />
			</div>

			<v-btn block
				class="btn"
				color="red accent-1"
				@click="handleCheckout">
				Checkout
			</v-btn>

			<v-snackbar
				class="snackbar"
				v-model="snackbar"
				:top="true"
				:timeout="1500" >
				Cannot checkout empty cart
				<v-icon color="white">remove_shopping_cart</v-icon>
			</v-snackbar>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import FoodBar from '@/components/reusable/FoodBar';
import FoodItem from '@/components/reusable/FoodItem';

import menu from '@/data/menu.json';

export default {
	name: 'Menu',
	components: {
		SearchBar,
		SectionTitle,
		FoodBar,
		FoodItem,
	},

	data() {
		let shop = this.$route.params.shop || this.$store.state.shop;
		if (!shop) this.$router.push('browse');

		return {
			shop,
			menu,
			snackbar: false,
		};
	},

	methods: {
		handleCheckout() {
			let cart = this.$store.state.cart;
			let numItems = Object.keys(cart).length;
			if (numItems > 0) this.$router.push('checkout');
			else this.snackbar = true;
		}
	}
};
</script>

<style scoped>
#menu {
	min-height: 100%;
	background-color: #efefef;
	position: relative;
}

#food-bar {
	margin-bottom: 4px;
}

.scrollable {
	height: 62.5vh;
	overflow-x: hidden;
	overflow-y: scroll;
}

.snackbar {
	font-size: 1.25rem;
	text-align: center;
}
</style>