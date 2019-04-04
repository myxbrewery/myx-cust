<template>
	<router-link id="shop" class="myx-container waves-effect waves-light" to="/menu">
		<FoodBar
			:icon="icon"
			:title="title"
			:price="price"
			:halal="halal" />

		<div id="image-bar">
			<img class="food" v-for="item in thumbnails"
				:src="`/static/img/food/${item}`" >
		</div>
	</router-link>
</template>

<script>
import FoodBar from '@/components/reusable/FoodBar';

export default {
	name: 'Shop',
	props: {
		icon: String,
		title: String,
		price: Number,  // indicator, takes values from {1, 2, 3}
		halal: Boolean,
		thumbnails: Array, // path relative to '/static/img/food/'
	},
	components: {
		FoodBar,
	},
};
</script>

<style scoped>
#shop {
	box-shadow: 0px 2px 2px #cccccc;
	margin-top: 1vw;
	background-color: #ffffff;
	border-radius: 0.4vh;
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
