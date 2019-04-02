<template>
	<div id="menu">
		<SearchBar />
		<SectionTitle
			header1="Stall menu"
			header2="Order" />
		<div class="container">
			<FoodBar class="elevation-1" style="background-color: white;" />
			<div class="scrollable">
				<FoodItem v-for="item in [0, 1, 2, 3, 4]" />
			</div>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import FoodBar from '@/components/reusable/FoodBar';
import FoodItem from '@/components/reusable/FoodItem';

export default {
	name: 'Menu',
	components: {
		SearchBar,
		SectionTitle,
		FoodBar,
		FoodItem,
	}
};
</script>

<style scoped>
#menu {
	background-color: #efefef;
	overflow: hidden;
}
</style>