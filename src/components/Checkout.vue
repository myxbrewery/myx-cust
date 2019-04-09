<template>
	<div id="checkout">
		<NavBar :back="true" @back="$router.push('menu')" />

		<div class="scrollable">
			<div class="entry" v-for="(item, key) in this.$store.state.cart">
				<p class="quantity">{{ item.quantity }}</p>
				<p class="item">{{ key }}</p>
				<p class="price">${{ (item.price * item.quantity).toFixed(2) }}</p>
			</div>
		</div>

		<div id="total-container">
			<div class="entry" id="total">
				<p class="item">Total</p>
				<p class="price">${{ computeTotal().toFixed(2) }}</p>
			</div>
		</div>

		<v-btn block dark
			class="btn"
			color="red accent-1"
			@click="makePayment">
			Pay
		</v-btn>
	</div>
</template>

<script>
import NavBar from '@/components/reusable/NavBar';

export default {
	name: 'Checkout',
	components: {
		NavBar,
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
		makePayment() {
			let amount = this.computeTotal();
			this.$router.push({
				name: 'Pay',
				params: {
					amount,
				},
			});
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
}

.scrollable {
	height: 74vh;
	overflow-y: scroll;
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
	height: 7vh;

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