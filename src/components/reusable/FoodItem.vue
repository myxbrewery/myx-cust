<template>
	<router-link to="/pay">
		<div id="food-item">
			<div id="food-image">
				<img src="@/assets/images/chicken.jpg">
			</div>

			<div id="food-description">
				<h6><b>Boiled Chicken Rice</b></h6>
				<p>Fragrantly steamed chicken rice topped with well-seasoned boiled chicken.</p>
				<div id="food-price">
					<p><b>$3.50</b></p>
					<i class="material-icons">add_box</i>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: 'FoodItem',
};
</script>

<style scoped>
#food-item {
	display: flex;
	flex-direction: row;

	box-shadow: 0px 2px 2px #cccccc;
	margin-top: 1vw;
	background-color: #ffffff;
	border-radius: 0.4vh;
}

#food-image {
	flex: 1;
	display: flex;
	align-items: center;

	margin: 8px;
}

#food-image img {
	width: 100%;
}

#food-description {
	flex: 1;
	margin: 8px;

	text-align: left;
}

#food-description p {
	font-color: #303030;
}

#food-price {
	display: flex;
	justify-content: space-between;
}

#food-price p {
	margin: 0px;
}

#food-price .material-icons {
	margin-right: 8px;
	font-size: 2rem;
	color: salmon;
}
</style>