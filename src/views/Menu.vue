<template>
	<div id="menu">
		<NavBar :back="true" @back="dialog = true" />
		<SectionTitle
			header1="Stall menu"
			header2="Order" />

		<FoodBar class="elevation-1" style="height: 7.5%"
			:icon="shop.icon"
			:name="shop.name"
			:halal="shop.halal"
			:open="shop.open" />
		<FoodItem v-for="item in menu"
			:key="item.id"
			:name="item.name"
			:image_url="item.image_url"
			:price="parseFloat(item.school_price)" />

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

		<v-dialog v-model="dialog">
			<v-card>
				<v-card-title>Leaving?</v-card-title>
				<v-card-text>We do not support purchases from multiple stores. Going back will reset your cart.</v-card-text>
				<v-card-text>Are you sure you want to leave?</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn color="green darken-1" flat @click="dialog = false">Stay here</v-btn>
					<v-btn color="red darken-1" flat @click="goBack">Go back</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SectionTitle from '@/components/SectionTitle';
import FoodBar from '@/components/FoodBar';
import FoodItem from '@/components/FoodItem';

export default {
	name: 'Menu',
	components: {
		NavBar,
		SectionTitle,
		FoodBar,
		FoodItem,
	},

	data() {
		let shop = this.$route.params.shop || this.$store.state.shop;
		if (!shop) this.$router.push('browse');

		return {
			shop,
			menu: [],
			snackbar: false,  // cannot checkout empty cart
			dialog: false,  // going back will empty your cart
		};
	},

	mounted() {
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
			let numItems = Object.keys(cart).length;
			if (numItems > 0) this.$router.push('checkout');
			else this.snackbar = true;
		},

		goBack() {
			this.dialog = false;

			this.$store.commit('exitMenu');
			this.$router.push('browse');
		},
	}
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

.v-card__title {
	font-size: 2rem;
}

.v-card__text {
	padding-top: 0px;

	text-align: left;
	font-size: 1.25rem;
}

</style>