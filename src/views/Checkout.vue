<template>
	<div id="checkout">
		<NavBar :back="true" @back="$router.push('menu')" />

		<div class="scrollable">
			<div class="entry" v-for="(item, key) in cart">
				<p class="quantity">{{ 1 }}</p>
				<p class="item">{{ item.name }}</p>
				<p class="price">${{ computeCost(item).toFixed(2) }}</p>
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
		computeCost(item) {
			let sum = parseFloat(item.school_price);
			Object.values(item.compulsory_options).forEach(optionItem => {
				Object.values(optionItem).forEach(obj => sum += obj.cost);
			});
			Object.values(item.optional_options).forEach(optionItem => {
				Object.values(optionItem).forEach(obj => sum += obj.cost);
			});
			return sum;
		},
		computeTotal() {
			let sum = 0;
			for (let item of this.cart) sum += this.computeCost(item);
			return sum;
		},
		makePayment() {
			let amount = this.computeTotal();

			for (let item of this.cart) {
				item.base_price = item.school_price;
				item.total_price = this.computeCost(item);
			}
			
			let data = {
				metadata: {
					// all orders should have same location and stall IDs
					location_id: this.cart[0].location_id,
					stall_id: this.cart[0].stall_id,
					client_type: this.$store.state.customer.type,
					total_payment: amount,
					customer_id: this.$store.state.customer.id,
				},
				orders: this.cart,
			};
			fetch(`${this.$store.state.serverRoot}/order`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'					
				},
				body: JSON.stringify(data),
			})
			.then(response => response.json())
			.then(json => {
				let paylah_url = json.paylah_url.url;
				let receipt_id = json.receipt_id;
				let params = {
					amount,
					paylah_url,
					receipt_id,
				};
				this.$router.push({ name: 'Pay', params });
			})
			.catch(console.log);
		},
	},

	computed: {
		cart: function() {
			return this.$store.state.cart;
		},
	},

	mounted() {
		if (this.computeTotal() === 0) this.$router.push('/menu');
	},
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