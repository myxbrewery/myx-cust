<template>
	<div id="food-bar">
		<img class="icon" :src="icon_file">
		<div id="title">
			<p>{{ title.toUpperCase() }}</p>
			<p>
				<span style="color: salmon">{{ '$ '.repeat(price) }}</span>
				<span>{{ '$ '.repeat(3 - price) }}</span>
				&nbsp; 
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
		icon: String,  // path relative to '/static/img/icons/{}.svg'
		title: String,
		price: Number,  // indicator, takes values from {1, 2, 3}
		halal: Boolean,
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

#title {
	text-align: left;
	flex: 1;
}

#title p {
	margin: 0px;
	font-size: 2vh;
}
</style>