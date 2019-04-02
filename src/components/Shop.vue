<template>
	<router-link id="shop" class="container waves-effect waves-light" to="/menu">
		<div id="info-bar" class="container">
			<img class="icon left" src="@/assets/images/icons/chicken.svg">
			<img class="icon right" src="@/assets/images/icons/hourglass.png">
			<div id="indicator" class="right" />
			<div id="title" class="left">
				<p>CHICKEN RICE</p>
				<p>$ $ $ &nbsp; Non-Halal</p>
			</div>
		</div>

		<div id="image-bar" class="container">
			<img class="food" src="@/assets/images/food/bakuteh.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
			<img class="food" src="@/assets/images/chicken.jpg">
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'Shop',
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: #2c3e50;
}
#indicator{
  border-radius: 50%;
  background-color: #6fb75b;
  height: 2vh;
  width: 2vh;
  margin-top: 1.5vh;
}
#shop {
	box-shadow: 0px 2px 2px #cccccc;
	margin-top: 1vw;
	background-color: #ffffff;
	border-radius: 0.4vh;
}

#title {
	text-align: left;
}

#title p {
	margin: 0px;
	font-size: 2vh;
}

.icon {
	margin: 1vh;
	height: 3vh;
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
#info-bar{
  padding: 1vh;
}
.food {
	margin: 0px 0px;
	height: 25vh;
	width: auto;
}

.container{
  max-width: 97vw;
  padding: 0;
  margin: 0;
}
</style>
