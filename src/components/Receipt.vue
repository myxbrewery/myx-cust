<template>
	<div id="receipt">
		<NavBar />
		<h3>Queue No.</h3>
		<h1>187</h1>
		<h6>You will be notified when your order<br>is ready for collection.</h6>
	</div>
</template>

<script>
import NavBar from '@/components/reusable/NavBar';

export default {
	name: 'Receipt',
	components: {
		NavBar,
	},
}
</script>

<style scoped>
#receipt {
	height: 100%;
}

h3 {
	margin-top: 15vh;
}

h6 {
	margin-top: 8vh;
}
</style>