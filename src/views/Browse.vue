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
import NavBar from '@/components/NavBar';
import SectionTitle from '@/components/SectionTitle';
import Shop from '@/components/Shop';
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
#browse {
	height: 100%;
}

.scrollable {
	height: 85%;
	overflow-y: scroll;
}
</style>
