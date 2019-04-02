<template>
	<div id="home">
		<div id="logo-myx">
			<div id="logo-m">m</div>
			<div id="logo-y">y</div>
			<div id="logo-x">x</div>
		</div>
		<div id="login-bar">
			<router-link to="/browse" class="login-icon waves-effect waves-light">
				<img class="elevation-2" src="@/assets/images/logos/facebook.png" />
			</router-link>
			<router-link to="/browse" class="login-icon waves-effect waves-light">
				<img class="elevation-2" src="@/assets/images/logos/google.png" />
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',

	mounted() {
		$('#logo-x').css('opacity', 0);
		$('#login-bar').css('opacity', 0);

		let grow = () => {
			$('#logo-myx').velocity({ 'font-size': '30vw' }, 500);
			$('#login-bar').velocity({ opacity: 1 }, 500);
		}
		let red = () => $('#logo-m').velocity({ color: 'red' }, {
			duration: 1000,
			complete: grow
		});

		$('#logo-x').velocity({ opacity: 1 }, {
			duration: 1000,
			complete: red,
		});
		
	}
};
</script>

<style scoped>
#home {
	margin-top: 20vh;
}

#logo-myx {
	font-family: "Arciform";

	display: flex;
	flex-direction: row;
	justify-content: center;

	font-size: 20vw;
}

.login-icon {
	margin: 5vw;
}

.login-icon img {
	max-width: 18vw;
	border-radius: 50%;
}
</style>
