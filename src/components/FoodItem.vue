<template>
	<div id="food-item">

		<div v-if="image_url" id="food-image">
			<!-- badge over image when image is present -->
			<v-badge left overlap color="red">
				<template v-slot:badge>
					<span v-if="quantity">{{ quantity }}</span>
				</template>

				<img :src="image_url">
			</v-badge>
		</div>

		<!-- render items in top/bottom when image is present -->
		<div v-if="image_url" id="food-description">
			<h6><b>{{ name }}</b></h6>
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

		<!-- render items in left/right when image is present -->
		<div v-if="!image_url" id="food-description">
			<!-- badge over text if there is no image -->
			<v-badge left overlap color="red">
				<template v-slot:badge>
					<span v-if="quantity">{{ quantity }}</span>
				</template>

				<h6><b>{{ name }}</b></h6>
				<p id="price"><b>${{ price.toFixed(2) }}</b></p>
			</v-badge>

		</div>
		<div v-if="!image_url" id="btn-container">
			<v-btn outline small
				id="customize-button"
				color="red accent-2" >
				Customize
			</v-btn>
			<v-icon v-ripple @click="increment" style="border-radius: 3px">add_box</v-icon>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FoodItem',
	props: ['name', 'image_url', 'price'],

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
			this.$store.commit({
				type: 'removeCart',
				name: this.name
			});
		},
	},
};
</script>

<style scoped>
#food-item {
	display: flex;
	flex-direction: row;

	margin-bottom: 4px;
	padding: 8px;
	background-color: #ffffff;
	border-radius: 0.4vh;
	box-shadow: 0px 2px 2px #cccccc;
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