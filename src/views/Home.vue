<template>
	<div id="home">
		<div id="logo-myx">
			<div id="logo-m">m</div>
			<div id="logo-y">y</div>
			<div id="logo-x">x</div>
		</div>
		<div id="login-bar">
			<div v-if="false">
				<router-link class="login-icon" to="/browse">
					<img class="elevation-2" src="@/assets/images/logos/facebook.png" />
				</router-link>
				<router-link class="login-icon" to="/browse">
					<img class="elevation-2" src="@/assets/images/logos/google.png" />
				</router-link>
			</div>
			
			<div id="google-signin-button" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',

	mounted() {
		this.animate();
		gapi.signin2.render('google-signin-button', {
			onsuccess: this.onSignIn,
		});
	},

	methods: {
		animate() {
			$('#logo-x').css('opacity', 0);
			$('#login-bar').css('opacity', 0);

			let grow = () => {
				$('#logo-myx').velocity({ 'font-size': '8rem' }, 500);
				$('#login-bar').velocity({ opacity: 1 }, 500);
			};
			let red = () => $('#logo-m').velocity({ color: 'red' }, {
				duration: 1000,
				complete: grow
			});

			$('#logo-x').velocity({ opacity: 1 }, {
				duration: 1000,
				complete: red,
			});
		},

		onSignIn(googleUser) {
      let profile = googleUser.getBasicProfile();
      let email = profile.getEmail();
      let id_token = googleUser.getAuthResponse().id_token;

      let customer = {
      	id: email,
      	token: id_token,
      };
      this.$store.commit('userLogin', customer);
      this.$router.push('/browse');
		},
	},
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

#google-signin-button {
	display: flex;
	flex-direction: row;
	justify-content: center;
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
