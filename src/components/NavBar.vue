<template>
	<h1 id="title">
		<div v-if="back" id="icon-div">
			<v-icon v-ripple dark @click="$emit('back')">keyboard_arrow_left</v-icon>
		</div>
		<p>myx</p>
	</h1>
</template>

<script>
export default {
	name: 'NavBar',
	props: ['back'],
};
</script>

<style scoped>
#title {
	position: relative;

	display: flex;
	justify-content: center;

	background-color: salmon;

	height: 10%;
	margin: 0px;

	font-size: 3.33rem;
}

#title p {
	flex: 1;

	font-family: "Arciform";
	color: white;

	margin: 0;
	align-self: center;
}

#icon-div {
	position: absolute;
	left: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 100%;
	padding: 8px;
}

.v-icon {
	font-size: 3rem;
	border-radius: 50%;
}
</style>