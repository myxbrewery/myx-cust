<template>
	<div id="receipt">
		<SearchBar />
		<h3>Queue No.</h3>
		<h1>187</h1>
		<h6>You will be notified when your order<br>is ready for collection.</h6>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';

export default {
	name: 'Receipt',
	components: {
		SearchBar,
	},
}
</script>

<style scoped>
h3 {
	margin-top: 15vh;
}

h6 {
	margin-top: 8vh;
}
</style>