<template>
	<v-dialog v-model="dialog">
		<v-card scrollable>
			<v-card-title>{{ foodItem.name }}</v-card-title>
			<v-divider />

			<v-card-text v-if="noCustomizations" class="mt-3">
				No customizations
			</v-card-text>

			<template v-for="(item, key) in foodItem.compulsory_options">
				<v-card-text class="pa-3">
					{{ key }}
					<v-radio-group class="mt-1" hide-details>
						<v-radio v-for="(item, key) in item"
							:key="key"
							:label="`${key}: $${item.cost}`"
							:value="key" />
					</v-radio-group>
				</v-card-text>
				<v-divider />
			</template>

			<template v-for="(options, name) in foodItem.optional_options">
				<v-card-text class="pa-3">
					{{ name }}
					<v-checkbox v-for="(option, optionName) in options"
						class="mt-1" hide-details 
						:key="optionName"
						:label="`${optionName}: $${option.cost}`" />
				</v-card-text>
				<v-divider />
			</template>

			<v-card-actions>
				<v-spacer />
				<v-btn flat color="red darken-1" @click="dialog = false">No</v-btn>
				<v-btn flat color="green darken-1">Ok</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'CustomizeDialog',
	props: ['foodDialog', 'foodItem'],
	computed: {
		dialog: {
			get() { return this.foodDialog },
			set(value) { if (!value) this.$emit('closeDialog') },
		},

		noCustomizations() {
			function isEmpty(obj) {
				return Object.keys(obj).length === 0;
			}
			if (isEmpty(this.foodItem)) return false;

			let noCompulsory = isEmpty(this.foodItem.compulsory_options);
			let noOptional = isEmpty(this.foodItem.optional_options);
			return noCompulsory && noOptional;
		},
	},
};
</script>

<style scoped>
.v-card__title {
	font-size: 1.5rem;
}

.v-card__text {
	text-align: left;
	font-size: 1.15rem;
}
</style>