<template>
	<div>
		<v-card-text class="pa-3">
			<span class="compulsory-text capitalize">{{ name }}</span>
			<v-radio-group class="mt-1" hide-details
				@change="handleChange($event)">
				<v-radio v-for="(option, optionName) in item"
					class="capitalize"
					:key="optionName"
					:label="`${optionName}: $${option.cost}`"
					:value="optionName" />
			</v-radio-group>
		</v-card-text>
		<v-divider />
	</div>
</template>

<script>
let cloneDeep = require('lodash/cloneDeep');

export default {
	name: 'Compulsory',
	props: ['name', 'item'],
	data() {
		return {
			selected: null,
		};
	},

	methods: {
		handleChange(value) {
			let item = {
				[value]: { ...this.item[value] }
			};

			this.$emit('change', {
				name: this.name,
				item,
			});
		},
	},
};
</script>

<style scoped>
.v-card__text {
	text-align: left;
	font-size: 1.15rem;
}

.capitalize {
	text-transform: capitalize;
}
</style>