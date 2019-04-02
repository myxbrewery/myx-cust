<template>
	<div id="food-bar">
		<img class="icon" src="@/assets/images/icons/chicken.svg">
		<div id="title">
			<p>CHICKEN RICE</p>
			<p>$ $ $ &nbsp; Non-Halal</p>
		</div>
		<img class="icon" src="@/assets/images/icons/hourglass.png">
		<div id="indicator" />
	</div>
</template>

<script>
export default {
	name: 'FoodBar',
};
</script>

<style scoped>
#food-bar {
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