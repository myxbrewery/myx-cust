<template>
	<div id="food-bar">
		<img v-if="icon" class="icon" :src="icon_file">
		<div id="name">
			<p>{{ name.toUpperCase() }}</p>
			<p>
				{{ halal ? 'Halal' : 'Non-Halal' }}
			</p>
		</div>

		<div id="indicator">
			<svg height="16" width="16">
				<circle cx="8" cy="8" r="8" :fill="open ? '#6fb75b' : 'red'" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FoodBar',
	props: {
		// TODO - resolve icon between here and Shop.vue/Menu.vue
		icon: String,  // path relative to '/static/img/icons/{}.svg'
		name: String,
		halal: Boolean,
		open: Boolean,
	},

	data() {
		return {
			icon_file: `/static/img/icons/${this.icon}.svg`,
		};
	},
};
</script>

<style scoped>
#food-bar {
	height: 8.8%;
	
	display: flex;
	padding: 1vh;
	padding-right: 2vh;

	background-color: white;
	font-weight: bold;
}

.icon {
	margin: 1vh;
	margin-right: 2vh;
	height: 3.5vh;

	z-index: 1;
}

#indicator{
	height: 16px;
	width: 16px;
	margin: auto;
}

#name {
	text-align: left;
	flex: 1;
}

#name p {
	margin: 0px;
	font-size: 2vh;
}
</style>