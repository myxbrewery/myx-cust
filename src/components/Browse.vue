<template>
	<div id="browse">
		<h1 id="title">myx</h1>
		<Shop />
		<Shop />
		<Shop />
	</div>
</template>

<script>
import Shop from '@/components/Shop';

export default {
	name: 'Browse',
	components: {
		Shop,
	},
};
</script>

<style scoped>
#title {
	font-family: "Arciform";

	background-color: salmon;
	color: white;

	margin: 0px;
	padding: 30px 0px;
}
</style>