<template>
	<div id="browse">
		<SearchBar />
		<Shop />
		<Shop />
		<Shop />
		<Shop />
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import Shop from '@/components/reusable/Shop';

export default {
	name: 'Browse',
	components: {
		SearchBar,
		Shop,
	},
};
</script>

<style scoped>
#browse {
  background-color: #efefef;
}
</style>
