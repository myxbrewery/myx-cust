<template>
	<router-link to="/">
		<h1 id="title">myx</h1>
	</router-link>
</template>

<script>
export default {
	name: 'SearchBar',
};
</script>

<style scoped>
#title {
	font-family: "Arciform";

	background-color: salmon;
	color: white;

	height: 12vh;
	margin: 0px;
	padding: 2vh 0px;
	font-size: 3.33rem;
}
</style>