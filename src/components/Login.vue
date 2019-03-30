<template>
	<div id="login">
		<div id="logo-myx">
			<div id="logo-m">m</div>
			<div id="logo-y">y</div>
			<div id="logo-x">x</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',

	mounted() {
		let grow = () => $('#logo-myx').velocity({ 'font-size': '144px' }, 500);
		let red = () => $('#logo-m').velocity({ color: 'red' }, {
			duration: 1000,
			complete: grow
		});

		$('#logo-x').velocity({ opacity: 1 }, {
			duration: 1000,
			complete: red
		});
		
	}
};
</script>

<style>
#logo-myx {
	display: flex;
	flex-direction: row;
	justify-content: center;

	font-size: 100px;
}

#logo-x {
	opacity: 0;
}
</style>