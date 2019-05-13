<template>
	<div id="checkout">
		<NavBar :back="true" @back="$router.push('menu')" />

		<div class="scrollable">
			<div class="entry" v-for="(item, key) in consolidateCart()">
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
import NavBar from '@/components/NavBar';

export default {
	name: 'Checkout',
	components: {
		NavBar,
	},

	methods: {
		computeTotal() {
			let consolidated = this.consolidateCart();
			let sum = 0;
			for (let key in consolidated) {
				let item = consolidated[key];
				sum += item.price * item.quantity;
			}
			return sum;
		},
		consolidateCart() {
			// TODO - resolve issues when customized items are introduced
			let cart = this.$store.state.cart;
			let consolidated = {};
			for (let item of cart) {
				let { name } = item;
				if (name in consolidated) consolidated[name].quantity++;
				else {
					let data = {
						price: parseFloat(item.school_price),
						quantity: 1,
					};
					consolidated[name] = data;
				}
			}
			return consolidated;
		},
		makePayment() {
			let amount = this.computeTotal();

			let orders = [];
			for (let item of this.$store.state.cart) {
				let newObj = {
					base_price: parseFloat(item.school_price),
					total_price: parseFloat(item.school_price),
					compulsory_options: {},
					optional_options: {},
				};
				Object.assign(item, newObj);
				orders.push(item);
			}
			
			let data = {
				metadata: {
					// all orders should have same location and stall IDs
					location_id: orders[0].location_id,
					stall_id: orders[0].stall_id,
					client_type: this.$store.state.customer.type,
					total_payment: amount,
					customer_id: this.$store.state.customer.id,
				},
				orders,
			};
			fetch(`${this.$store.state.serverRoot}/order`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'					
				},
				body: JSON.stringify(data),
			})
			.then(response => response.json())
			.then(console.log);

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