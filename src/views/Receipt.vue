<template>
	<div id="receipt">
		<NavBar />
		<h3>Queue No.</h3>
		<h1 @click="notify">{{ this.$route.params.receipt_id }}</h1>
		<h6>You will be notified when your order<br>is ready for collection.</h6>
	</div>
</template>

<script>
import io from 'socket.io-client';
import NavBar from '@/components/NavBar';


export default {
	name: 'Receipt',
	components: {
		NavBar,
	},
	data() {
		let socket = io(this.$store.state.socketServer);
		return { socket };
	},

	methods: {
		notify() {
			let el = $('#receipt');
			let option = {
				duration: 200,
				easing: 'linear',
			};

			function blink() {
				el.velocity({ 'background-color': 'salmon' }, option)
				  .velocity({ 'background-color': '#fafafa' }, option);
			}

			for (let i=0; i<5; i++) blink();
		},
	},

	created() {
		if (this.$route.params.receipt_id === undefined) {
			this.$router.push('/pay');
		}
	},

	mounted() {
		function allOrdersCompleted(orders) {
			let completed = orders.every(order => order.status_id === 4);
			return completed;
		}

		this.socket.emit('customer_join', this.$store.state.customer.id);
		this.socket.on('orders', orders => {
			if (allOrdersCompleted(orders)) this.notify();
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