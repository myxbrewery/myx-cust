<template>
	<div id="menu">
		<FoodItem />
		<FoodItem />
		<FoodItem />
		<FoodItem />
		<FoodItem />
		<FoodItem />
	</div>
</template>

<script>
import FoodItem from '@/components/FoodItem';

export default {
	name: 'Menu',
	components: {
		FoodItem,
	}
};
</script>

<style scoped>
</style>