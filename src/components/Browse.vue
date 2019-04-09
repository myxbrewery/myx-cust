<template>
	<div id="browse">
		<NavBar />
		<SectionTitle
			header1="Quick browsing"
			header2="Stalls" />

		<div class="scrollable">
			<Shop class="shop" v-for="(item, index) in shops"
				:key="index"
				:shop="item.shop"
				:thumbnails="item.thumbnails" />
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/reusable/NavBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import Shop from '@/components/reusable/Shop';
import shops from '@/data/shops.json';

export default {
	name: 'Browse',
	components: {
		NavBar,
		SectionTitle,
		Shop,
	},

	data() {
		return {
			shops,
		};
	},
};
</script>

<style scoped>
.scrollable {
	height: 85vh;
	overflow-y: scroll;
}
</style>
