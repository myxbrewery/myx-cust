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

	margin: 0px;
	padding: 2vh 0px;
	font-size: 7vh;
}
</style>