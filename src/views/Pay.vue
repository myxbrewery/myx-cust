<template>
	<div id="pay">
		<NavBar :back="true" @back="$router.push('checkout')" />

		<div id="content">
			<h5>Your total is</h5>
			<h1 id="amount">${{ amount.toFixed(2) }}</h1>
			<a :href="paylah_url" target="_blank" @click="redirect">
				<img src="@/assets/images/paylah.png">
			</a>
			<h6>Click on above image to pay</h6>
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
	name: 'Pay',
	components: {
		NavBar,
	},

	data() {
		let { amount, paylah_url, receipt_id } = this.$route.params;
		if (!amount) amount = 0;  // set placeholder value for render if undef

		return {
			amount,
			paylah_url,
			receipt_id,
		};
	},

	methods: {
		redirect() {
			this.$router.push({
				name: 'Receipt',
				params: {
					receipt_id: this.receipt_id,
				},
			});
		},
	},

	created() {
		let params = this.$route.params;
		let paramsEmpty = Object.keys(params).length === 0;
		if (paramsEmpty) this.$router.push('/checkout');
	},
};
</script>

<style scoped>
#pay {
	height: 100%;
}

#content {
	margin-top: 7.5vh;
}

#amount {
	font-weight: bold;
}

img {
	width: 50%;
}
</style>