<template>
	<v-dialog v-model="dialog">
		<v-card scrollable>
			<v-card-title>{{ foodItem.name }}</v-card-title>
			<v-divider />

			<v-card-text v-if="noCustomizations" class="mt-3">
				No customizations available
			</v-card-text>

			<template v-for="(item, key) in foodItem.compulsory_options">
				<v-card-text class="pa-3">
					{{ key }}
					<v-radio-group class="mt-1" hide-details
						v-model="options.compulsory_options[key]">
						<v-radio v-for="(item, key) in item"
							:key="key"
							:label="`${key}: $${item.cost}`"
							:value="key" />
					</v-radio-group>
				</v-card-text>
				<v-divider />
			</template>

			<template v-for="(item, name) in foodItem.optional_options">
				<v-card-text class="pa-3">
					{{ name }}
					<v-checkbox v-for="(option, optionName) in item"
						v-model="options.optional_options[name][optionName].selected"
						class="mt-1" hide-details 
						:key="optionName"
						:label="`${optionName}: $${option.cost}`" />
				</v-card-text>
				<v-divider />
			</template>

			<v-card-actions>
				<v-spacer />
				<v-btn flat color="red darken-1" @click="dialog = false">Cancel</v-btn>
				<v-btn flat color="green darken-1" @click="addOrder">Add to cart</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
con
<script>
let cloneDeep = require('lodash/cloneDeep');

export default {
	name: 'CustomizeDialog',
	props: ['foodDialog', 'foodItem'],
	data() {
		return {
			options: {
				compulsory_options: {},
				optional_options: {},
			},
		};
	},

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

	watch: {
		// item.optional_options.'Add Ons'.chicken.cost
		foodItem: function(newItem, oldItem) {
			this.options.optional_options = cloneDeep(newItem.optional_options);
		}
	},

	methods: {
		addOrder() {
			function removeUnselected(obj) {
				let clone = cloneDeep(obj);
				for (let key in clone) {
					if (!clone[key].selected) delete clone[key];
					else delete clone[key].selected;
				}
				return clone;
			}

			let parseCompulsory = (oldOptions) => {
				let newOptions = {};
				for (let key in oldOptions) {
					let selected = oldOptions[key];
					newOptions[key] = {};
					newOptions[key][selected] = this.foodItem.compulsory_options[key][selected];
				}
				return newOptions;
			};

			let parseOptional = (oldOptions) => {
				let newOptions = {};
				for (let key in oldOptions) {
					let item = oldOptions[key];
					newOptions[key] = removeUnselected(item);
				}
				return newOptions;
			};

			this.options.compulsory_options = parseCompulsory(this.options.compulsory_options);
			this.options.optional_options = parseOptional(this.options.optional_options);

			let { compulsory_options, optional_options } = this.options;
			let cartItem = cloneDeep(this.foodItem);
			cartItem.compulsory_options = cloneDeep(compulsory_options);
			cartItem.optional_options = cloneDeep(optional_options);
			this.$store.commit('addCart', cartItem);

			this.dialog = false;
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