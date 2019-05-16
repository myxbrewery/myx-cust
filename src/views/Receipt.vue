<template>
	<div id="receipt">
		<NavBar />
		<h3>Queue No.</h3>
		<h1>{{ this.$route.params.receipt_id }}</h1>

		<h6 v-if="!done">You will be notified when your order<br>is ready for collection.</h6>

		<div v-if="done">
			<h5 class="red--text">Your order is ready for collection.</h5>
			<v-btn v-ripple outline color="red" class="ma-3"
				@click="dialog = true">
				View order summary
			</v-btn>
		</div>

		<v-dialog v-model="dialog">
			<v-card>
				<v-card-title class="title">Order Summary</v-card-title>
				<v-divider />

				<template v-for="item in this.cart">
					<OrderItem :item="item" />
					<v-divider class="mx-3" />
				</template>

				<v-card-actions>
					<v-spacer />
					<v-btn flat @click="dialog = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import io from 'socket.io-client';
import NavBar from '@/components/NavBar';
import OrderItem from '@/components/OrderItem';

export default {
	name: 'Receipt',
	components: {
		NavBar,
		OrderItem,
	},
	data() {
		return { 
			socket: null,
			done: false,
			dialog: false,
		};
	},

	computed: {
		cart() {
			return this.$store.state.cart;
		},
	},

	methods: {
		allOrdersCompleted(orders) {
			let completed = orders.every(order => order.status_id >= 3);
			return completed;
		},

		notify() {
			let el = $('#receipt');
			let option = {
				duration: 500,
				easing: 'linear',
			};

			function blink() {
				el.velocity({ 'background-color': 'salmon' }, option)
				  .velocity({ 'background-color': '#fafafa' }, {
				  	...option,
				  	complete: blink,
				  });
			}
			blink();
		},

		resetSocket() {
			let socket = io(this.$store.state.socketServer);
			socket.emit('customer_join', this.$store.state.customer.id);
			socket.on('orders', orders => {
				console.log(orders.map(order => order.status_id));
				if (this.allOrdersCompleted(orders)) {
					this.done = true;
					this.notify();
				}
			});
			if (this.socket) this.socket.disconnect(true);
			this.socket = socket;
		},
	},

	created() {
		if (this.$route.params.receipt_id === undefined) {
			this.$router.push('/pay');
		}
	},

	mounted() {
		this.resetSocket();
		document.addEventListener('visibilitychange', e => {
			this.resetSocket();
		});
	},
}
</script>

<style scoped>
#receipt {
	height: 100%;
}

h3 {
	margin-top: 15vh;
}

h6 {
	margin-top: 8vh;
}
</style>