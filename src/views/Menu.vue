<template>
	<div id="menu">
		<NavBar :back="true" @back="navDialog = true" />
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

		<v-dialog v-model="navDialog">
			<v-card>
				<v-card-title>Leaving?</v-card-title>
				<v-card-text>We do not support purchases from multiple stores. Going back will reset your cart.</v-card-text>
				<v-card-text>Are you sure you want to leave?</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn color="green darken-1" flat @click="navDialog = false">Stay here</v-btn>
					<v-btn color="red darken-1" flat @click="goBack">Go back</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-dialog v-model="foodDialog">
			<v-card scrollable>
				<v-card-title>{{ foodItem.name }}</v-card-title>
				<v-divider />

				<v-card-text v-if="noCustomizations" class="mt-3">
					No customizations
				</v-card-text>

				<template v-for="(item, key) in foodItem.compulsory_options">
					<v-card-text class="pa-3">
						{{ key }}
						<v-radio-group class="mt-1" hide-details>
							<v-radio v-for="(item, key) in item"
								:key="key"
								:label="`${key}: $${item.cost}`"
								:value="key" />
						</v-radio-group>
					</v-card-text>
					<v-divider />
				</template>

				<template v-for="(options, name) in foodItem.optional_options">
					<v-card-text class="pa-3">
						{{ name }}
						<v-checkbox v-for="(option, optionName) in options"
							class="mt-1" hide-details 
							:key="optionName"
							:label="`${optionName}: $${option.cost}`" />
					</v-card-text>
					<v-divider />
				</template>

				<v-card-actions>
					<v-spacer />
					<v-btn flat color="red darken-1" @click="foodDialog = false">No</v-btn>
					<v-btn flat color="green darken-1">Ok</v-btn>
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
			navDialog: false,  // going back will empty your cart
			foodDialog: false,  // customize FoodItem
			foodItem: {},  // item to be customized
		};
	},
	computed: {
		noCustomizations() {
			function isEmpty(obj) {
				return Object.keys(obj).length === 0;
			}
			if (isEmpty(this.foodItem)) return false;

			let noCompulsory = isEmpty(this.foodItem.compulsory_options);
			let noOptional = isEmpty(this.foodItem.optional_options);
			return noCompulsory && noOptional;
		},
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
			let numItems = cart.length;
			if (numItems > 0) this.$router.push('checkout');
			else this.snackbar = true;
		},

		goBack() {
			this.navDialog = false;

			this.$store.commit('exitMenu');
			this.$router.push('browse');
		},

		customize(item) {
			this.foodItem = item;
			this.foodDialog = true;
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

.v-card__title {
	font-size: 2rem;
}

.v-card__text {
	padding-top: 0px;

	text-align: left;
	font-size: 1.25rem;
}

</style>