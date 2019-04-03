<template>
	<div id="menu">
		<SearchBar />
		<SectionTitle
			header1="Stall menu"
			header2="Order" />
		<div class="myx-container">
			<FoodBar class="elevation-1" style="background-color: white;" />
			<div class="scrollable">
				<FoodItem v-for="(item, index) in menu"
					:key="index"
					:name="item.name"
					:text="item.text"
					:thumbnail="item.thumbnail"
					:price="item.price" />
			</div>
			<router-link to="/pay" class="btn waves-effect waves-light">Checkout order</router-link>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';
import SectionTitle from '@/components/reusable/SectionTitle';
import FoodBar from '@/components/reusable/FoodBar';
import FoodItem from '@/components/reusable/FoodItem';

import menu from '@/data/menu.json';

export default {
	name: 'Menu',
	components: {
		SearchBar,
		SectionTitle,
		FoodBar,
		FoodItem,
	},

	data() {
		return {
			menu
		};
	},
};
</script>

<style scoped>
#menu {
	background-color: #efefef;
}

.btn {
	background-color: salmon;
	width: 100%;
	height: 100%;

	margin-top: 0.5vh;
	padding: 0.75rem;

	font-size: 1.5rem;
	font-weight: 500;
}
</style>