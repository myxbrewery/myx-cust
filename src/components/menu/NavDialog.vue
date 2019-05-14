<template>
	<v-dialog v-model="dialog">
		<v-card>
			<v-card-title>Leaving?</v-card-title>
			<v-card-text>We do not support purchases from multiple stores. Going back will reset your cart.</v-card-text>
			<v-card-text>Are you sure you want to leave?</v-card-text>
			<v-card-actions>
				<v-spacer />
				<v-btn color="green darken-1" flat @click="dialog = false">Stay here</v-btn>
				<v-btn color="red darken-1" flat @click="$emit('goBack')">Go back</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'NavDialog',
	props: ['navDialog'],
	computed: {
		dialog: {
			get() { return this.navDialog },
			set(value) { if (!value) this.$emit('closeDialog') },
		},
	},
};
</script>

<style scoped>
.v-card__title {
	font-size: 2rem;
}

.v-card__text {
	padding-top: 0px;

	text-align: left;
	font-size: 1.25rem;
}
</style>