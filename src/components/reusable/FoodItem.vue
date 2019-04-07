<template>
	<div id="food-item">
		<div id="food-image">
			<img :src="thumbnail">
		</div>

		<div id="food-description">
			<h6><b>{{ name }}</b></h6>
			<p>{{ text }}</p>

			<div id="food-price">
				<p><b>${{ price.toFixed(2) }}</b></p>
				<div id="food-quantity">
					<v-icon
						v-if="quantity > 0"
						@click="decrement">
						indeterminate_check_box
					</v-icon>
					<p v-if="quantity > 0">{{ quantity }}</p>
					<v-icon @click="increment">add_box</v-icon>
				</div>
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
	margin-top: 1vw;
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

#food-description p {
	font-color: #303030;
}

#food-price {
	display: flex;
	justify-content: space-between;
}

#food-price p {
	margin: 0px;
}

#food-quantity {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

#food-quantity .v-icon {
	margin: 0px 8px;
	font-size: 2rem;
	color: salmon;
}

#food-quantity p {
	width: 1rem;
	text-align: center;
	line-height: 2rem;
}
</style>