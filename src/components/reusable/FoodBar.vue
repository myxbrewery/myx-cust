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
		<img class="icon" src="/static/img/icons/hourglass.png">
		<div id="indicator" />
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
	font-weight: bold;

	display: flex;
	padding: 1vh;
	padding-right: 2vh;
}

.icon {
	margin: 1vh;
	margin-right: 2vh;
	height: 3.5vh;
}

#indicator{
  border-radius: 50%;
  background-color: #6fb75b;
  height: 2vh;
  width: 2vh;
  margin-top: 1.5vh;
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