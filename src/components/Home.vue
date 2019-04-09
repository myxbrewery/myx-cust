<template>
	<div id="home">
		<div id="logo-myx">
			<div id="logo-m">m</div>
			<div id="logo-y">y</div>
			<div id="logo-x">x</div>
		</div>
		<div id="login-bar">
			<router-link class="login-icon" to="/browse">
				<img class="elevation-2" src="@/assets/images/logos/facebook.png" />
			</router-link>
			<router-link class="login-icon" to="/browse">
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
			$('#logo-myx').velocity({ 'font-size': '8rem' }, 500);
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
	height: 100%;
	padding-top: 20vh;
}

#logo-myx {
	font-family: "Arciform";

	display: flex;
	flex-direction: row;
	justify-content: center;

	font-size: 5rem;
}

.login-icon {
	height: 64px;
	width: 64px;

	margin: 16px;
	border-radius: 50%;
}

.login-icon img {
	width: 64px;
	border-radius: 50%;
}
</style>
