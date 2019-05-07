<template>
	<div id="pay">
		<NavBar :back="true" @back="$router.push('checkout')" />

		<div id="content">
			<h5>Your total is</h5>
			<h1 id="amount">${{ amount.toFixed(2) }}</h1>
			<a href="http://www.dbs.com.sg/personal/mobile/paylink/index.html?tranRef=bca6jKVtAr" target="_blank" @click="redirect">
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
		return {
			amount: this.$route.params.amount,
		};
	},

	methods: {
		redirect() {
			this.$router.push('/receipt');
		},
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