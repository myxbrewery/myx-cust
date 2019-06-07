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
					<span class="compulsory-text">{{ key }}</span>
					<v-radio-group class="mt-1" hide-details
						v-model="options.compulsory[key]">
						<v-radio v-for="(item, key) in item"
							:key="key"
							:label="`${key}: $${item.cost}`"
							:value="key" />
					</v-radio-group>
				</v-card-text>
				<v-divider />
			</template>

			<Optional v-for="(item, name) in foodItem.optional_options"
				:key="name"
				:name="name"
				:item="item"
				@change="handleOptional($event)" />

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
import Optional from './option/Optional';
let cloneDeep = require('lodash/cloneDeep');

export default {
	name: 'CustomizeDialog',
	components: {
		Optional,
	},
	props: ['foodDialog', 'foodItem'],
	data() {
		return {
			options: {
				compulsory: {},
				optional: {},
			},
		};
	},

	computed: {
		dialog: {
			get() { return this.foodDialog },
			set(value) { 
				if (!value) this.$emit('closeDialog');
				else console.log(this.options);
			},
		},

		noCustomizations() {
			let isEmpty = (obj) => Object.keys(obj).length === 0;
			if (isEmpty(this.foodItem)) return false;

			let noCompulsory = isEmpty(this.foodItem.compulsory_options);
			let noOptional = isEmpty(this.foodItem.optional_options);
			return noCompulsory && noOptional;
		},

		allCompulsorySelected() {
			let actualOptions = this.foodItem.compulsory_options;
			let numActual = Object.keys(actualOptions).length;

			let selectedOptions = this.options.compulsory;
			let numSelected = Object.keys(selectedOptions).length;

			return numActual === numSelected;
		},
	},

	watch: {
		// item.optional_options.'Add Ons'.chicken.cost
		foodItem: function(newItem, oldItem) {
			this.options.compulsory = {};
		},
	},

	methods: {
		animateCompulsoryText() {
			let el = $('.compulsory-text');
			let options = {
				duration: 200,
				easing: 'linear',
			};
			for (let i=0; i<2; i++)
				el.velocity({ 'color': 'salmon' }, options)
					.velocity({ 'color': 'black' }, options);
		},

		addOrder() {
			if (!this.allCompulsorySelected) {
				this.animateCompulsoryText();
				return;
			}

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

			this.options.compulsory = parseCompulsory(this.options.compulsory);

			let { compulsory, optional } = this.options;
			let cartItem = cloneDeep(this.foodItem);
			cartItem.compulsory_options = cloneDeep(compulsory);
			cartItem.optional_options = cloneDeep(optional);
			this.$store.commit('addCart', cartItem);

			this.dialog = false;
		},

		handleOptional({ name, item }) {
			this.options.optional[name] = { ...item };
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