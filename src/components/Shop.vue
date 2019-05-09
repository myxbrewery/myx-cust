<template>
	<div id="shop">
		<router-link
			@click.native="$store.commit('enterShop', shop)"
			:to="{ name: 'Menu', params: { shop } }">
			<FoodBar
				:icon="shop.icon"
				:name="shop.name"
				:halal="shop.halal"
				:open="shop.open" />

			<div id="imageContainer">
				<img class="food" :src="shop.image_url">
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
	},
	components: {
		FoodBar,
	},
	created() {
		if (!this.shop.image_url) this.shop.image_url = 'https://mtc1-dydfxmh.netdna-ssl.com/wp-content/uploads/2016/08/22168498135_84560366eb_k-1300x866.jpg';
	}
};
</script>

<style scoped>
#shop {
	margin-bottom: 4px;
	background-color: #ffffff;
	box-shadow: 0px 2px 2px #cccccc;
}

#imageContainer {
	display: flex;
	justify-content: flex-start;
}

.food {
	height: 25vh;
	width: auto;
}
</style>
