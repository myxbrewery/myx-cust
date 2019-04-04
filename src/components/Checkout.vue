<template>
	<div id="checkout">
		<SearchBar />

		<div class="entry" v-for="(item, key) in this.$store.state.cart">
			<p class="quantity">{{ item.quantity }}</p>
			<p class="item">{{ key }}</p>
			<p class="price">${{ (item.price * item.quantity).toFixed(2) }}</p>
		</div>

		<div id="total-container">
			<div class="entry" id="total">
				<p class="item">Total</p>
				<p class="price">${{ computeTotal().toFixed(2) }}</p>
			</div>
		</div>

		<router-link class="btn waves-effect waves-light"
			:to="{ name: 'Pay', params: { amount: computeTotal() } }">
			Pay
		</router-link>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';

export default {
	name: 'Checkout',
	components: {
		SearchBar,
	},

	methods: {
		computeTotal() {
			let cart = this.$store.state.cart;
			let sum = 0;
			for (let item in cart) {
				let { price, quantity } = cart[item];
				sum += price * quantity;
			}
			return sum;
		},
	},

	mounted() {
		if (this.computeTotal() === 0) this.$router.push('/menu');
	}
}
</script>

<style scoped>
#checkout {
	height: 100%;
	padding-bottom: 57px;

	display: flex;
	flex-direction: column;
}

.entry {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 100%;
}

.entry * {
	text-align: left;
	align-self: center;
	margin: 12px 24px;
}

.quantity {
	font-size: 2rem;
	font-weight: bold;
}

.item {
	font-size: 1.3rem;
	width: 100%;
}

.price {
	font-size: 1.2rem;
	font-weight: bold;

	text-align: right;
}

#total-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

#total {
	border-top: 1px solid gray;
}

#total .item {
	font-weight: bold;
	text-align: right;
}
</style>