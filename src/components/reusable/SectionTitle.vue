<template>
	<div id="section-title" class="myx-container">
		<h1>{{ header1 }}</h1>
		<h2>{{ header2 }}</h2>
	</div>
</template>

<script>
export default {
	name: 'SectionTitle',
	props: ['header1', 'header2'],
};
</script>

<style scoped>
#section-title {
	height: 5vh;

	font-family: "Astronaut";

	display: flex;
	flex-direction: row;

	margin-top: 0.75rem;
	margin-bottom: 0.5rem;
}

h1, h2 {
	margin: 0;
	margin-left: 8px;
}

h1 {
	font-size: 2.25rem;
}

h2 {
	margin-bottom: 0.15rem;
	font-size: 1.25rem;
	color: #606060;
	align-self: flex-end;
}
</style>