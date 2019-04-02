<template>
	<div id="menu">
		<SearchBar />
		<div class="container">
			<FoodBar class="elevation-1" style="background-color: white;" />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
			<FoodItem />
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import FoodBar from '@/components/reusable/FoodBar';
import FoodItem from '@/components/reusable/FoodItem';

export default {
	name: 'Menu',
	components: {
		SearchBar,
		FoodBar,
		FoodItem,
	}
};
</script>

<style scoped>
#menu {
	background-color: #efefef;
}
</style>