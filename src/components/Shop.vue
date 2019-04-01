<template>
	<router-link id="shop" class="waves-effect waves-light" to="/menu">
		<div id="info-bar" class="container">
			<img class="icon left" src="@/assets/images/icons/chicken.svg">
			<div id="title" class="left">
				<p>CHICKEN RICE</p>
				<p>$ $ $ &nbsp; Non-Halal</p>
			</div>
			<div id="rating" class="right">
				<img id="rating-icon" class="icon right" src="@/assets/images/icons/star.svg">
				<p id="rating-value" class="right">4.5</p>
			</div>
		</div>

		<div id="image-bar" class="container">
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

#shop {
	box-shadow: 0px 2px 2px #efefef;
}

#title {
	text-align: left;
}

#title p {
	margin: 0px;
}

.icon {
	margin: 8px;
	max-width: 32px;
	color: red;
}

#rating-value {
	margin: 8px;
}

#rating-icon {
	width: 16px;
}

#image-bar {	
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	overflow: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
}

#image-bar::-webkit-scrollbar { 
	width: 0;
	height: 0;
}

.food {
	margin: 2px 4px;
	width: 200px;
}
</style>