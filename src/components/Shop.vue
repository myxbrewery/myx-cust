<template>
	<div id="shop">
		<router-link
			@click.native="$store.commit('enterShop', shop)"
			:to="{ name: 'Menu', params: { shop } }" >
			<FoodBar
				:icon="shop.icon"
				:title="shop.title"
				:price="shop.price"
				:halal="shop.halal" />

			<div id="image-bar">
				<img class="food" v-for="item in thumbnails"
					:src="`/static/img/food/${item}`" >
			</div>
		</router-link>
	</div>
</template>

<script>
import FoodBar from '@/components/FoodBar';

export default {
	name: 'Shop',
	props: {
		shop: Object,
		thumbnails: Array, // path relative to '/static/img/food/'
	},
	components: {
		FoodBar,
	},
};
</script>

<style scoped>
#shop {
	margin-bottom: 4px;
	background-color: #ffffff;
	box-shadow: 0px 2px 2px #cccccc;
}

#image-bar {	
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	width: 100%;
	padding: 0px;

	overflow: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
}

#image-bar::-webkit-scrollbar { 
	width: 0;
	height: 0;
}

.food {
	margin: 0px 0px;
	height: 25vh;
	width: auto;
}
</style>
