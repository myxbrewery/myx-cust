<template>
	<div id="shop">
		<router-link
			@click.native="$store.commit('enterShop', shop)"
			:to="{ name: 'Menu', params: { shop } }">
			<FoodBar
				:icon="shop.icon_url"
				:name="shop.name"
				:halal="shop.halal"
				:open="shop.open" />

			<div id="imageContainer">
				<img class="food" :src="image_url">
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

	computed: {
		image_url: function() {
			return `${this.$store.state.serverRoot}/${this.shop.image_url}`;
		},
	},
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
