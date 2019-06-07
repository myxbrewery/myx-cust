<template>
	<div>
		<v-card-text class="pa-3">
			<span class="optional-text capitalize">{{ name }}</span>
			<v-checkbox v-for="(option, optionName) in cartItem"
				class="mt-1 capitalize" hide-details
				@change="handleChange(optionName, $event)"
				:key="optionName"
				:label="`${optionName}: $${option.cost}`" />
		</v-card-text>
		<v-divider />
	</div>
</template>

<script>
let cloneDeep = require('lodash/cloneDeep');

export default {
	name: 'Optional',
	props: ['name', 'item'],
	data() {
		return {
			cartItem: cloneDeep(this.item),
		};
	},

	methods: {
		handleChange(optionName, value) {
			this.cartItem[optionName].selected = value;
			let filteredItem = this.filterSelected(this.cartItem);

			this.$emit('change', {
				name: this.name,
				item: filteredItem,
			});
		},

		filterSelected(item) {
			let result = {};
			for (let key in item) {
				if (item[key].selected) {
					result[key] = { ...item[key] };
					delete result[key].selected;
				}
			}
			return result;
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