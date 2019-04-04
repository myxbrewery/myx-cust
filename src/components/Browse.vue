<template>
	<div id="browse">
		<SearchBar />
		<SectionTitle
			header1="Quick browsing"
			header2="Stalls" />

		<Shop v-for="(shop, index) in shops"
			:key="index"
			:icon="shop.icon"
			:title="shop.title"
			:price="shop.price"
			:halal="shop.halal"
			:thumbnails="shop.thumbnails" />
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import Shop from '@/components/reusable/Shop';
import shops from '@/data/shops.json';

export default {
	name: 'Browse',
	components: {
		SearchBar,
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
#browse {
  background-color: #efefef;
}
</style>
