<template>
	<router-link id="shop" class="myx-container waves-effect waves-light" to="/menu">
		<FoodBar />

		<div id="image-bar">
			<img class="food" src="@/assets/images/food/health_soup/bakuteh.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
			<img class="food" src="@/assets/images/food/chicken_rice/steamed.jpg">
		</div>
	</router-link>
</template>

<script>
import FoodBar from '@/components/reusable/FoodBar';

export default {
	name: 'Shop',
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
