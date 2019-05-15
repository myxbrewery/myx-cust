<template>
	<div id="browse">
		<NavBar />
		<SectionTitle
			header1="Quick browsing"
			header2="Stalls" />

		<Shop class="shop" v-for="(shop, index) in shops"
			v-if="shop.open"
			:key="index"
			:shop="shop" />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SectionTitle from '@/components/SectionTitle';
import Shop from '@/components/Shop';

export default {
	name: 'Browse',
	components: {
		NavBar,
		SectionTitle,
		Shop,
	},

	data() {
		return {
			shops: [],
		};
	},

	created() {
		let root = this.$store.state.serverRoot;
		let url = `${root}/stalls/1`;
		fetch(url)
		.then(response => response.json())
		.then(json => { this.shops = json });
	},

	mounted() {
		if (this.$store.state.customer.token === null) this.$router.push('/');
		this.$store.commit('resetCart');
	},
};
</script>

<style scoped>
#browse {
	height: 100%;
}
</style>
