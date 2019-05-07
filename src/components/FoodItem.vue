<template>
	<div id="food-item">
		<div id="food-image">
			<img :src="thumbnail">
		</div>

		<div id="food-description">
			<h6><b>{{ name }}</b></h6>
			<p id="text">{{ text }}</p>

			<p id="price"><b>${{ price.toFixed(2) }}</b></p>
			<div id="btn-container">
				<v-btn outline small
					id="customize-button"
					color="red accent-2" >
					Customize
				</v-btn>
				<v-icon v-ripple @click="increment" style="border-radius: 3px">add_box</v-icon>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: 'FoodItem',
	props: ['name', 'text', 'thumbnail', 'price'],

	data() {
		return {
			quantity: 0,
		};
	},
	mounted() {
		// for unforeseen navigation into page
		let cart = this.$store.state.cart;
		if (this.name in cart) this.quantity = cart[this.name].quantity;
	},

	methods: {
		increment() {
			this.quantity++;
			this.$store.commit({
				type: 'addCart',
				name: this.name,
				price: this.price,
			});
		},
		decrement() {
			this.quantity--;
			this.$store.commit('removeCart', this.name);
		},
	},
};
</script>

<style scoped>
#food-item {
	display: flex;
	flex-direction: row;

	box-shadow: 0px 2px 2px #cccccc;
	margin-bottom: 4px;
	background-color: #ffffff;
	border-radius: 0.4vh;
}

#food-image {
	flex: 1;
	display: flex;
	align-items: center;

	margin: 8px;
}

#food-image img {
	width: 100%;
}

#food-description {
	flex: 1;
	margin: 8px;

	text-align: left;
}

#food-description #text {
	font-color: #303030;
	margin: 0;
}

#food-description #price {
	margin: 8px 0px;
}

#btn-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
}

#customize-button {
	margin: 0;
}

.v-icon.material-icons {
	margin: 0px 8px;
	font-size: 2rem;
	color: salmon;
}
</style>