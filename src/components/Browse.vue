<template>
	<div id="browse">
		<SearchBar />
		<SectionTitle
			header1="Quick browsing"
			header2="Stalls" />

		<Shop v-for="shop in Array(5)" />
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import Shop from '@/components/reusable/Shop';

export default {
	name: 'Browse',
	components: {
		SearchBar,
		SectionTitle,
		Shop,
	},
};
</script>

<style scoped>
#browse {
  background-color: #efefef;
}
</style>
