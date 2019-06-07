<template>
	<v-dialog v-model="dialog">
		<v-card scrollable>
			<v-card-title>{{ foodItem.name }}</v-card-title>
			<v-divider />

			<v-card-text v-if="noCustomizations" class="mt-3">
				No customizations available
			</v-card-text>

			<Compulsory v-for="(item, name) in foodItem.compulsory_options" 
				:key="name"
				:name="name"
				:item="item"
				@change="handleCompulsory($event)" />

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

<script>
import Compulsory from './option/Compulsory';
import Optional from './option/Optional';
let cloneDeep = require('lodash/cloneDeep');

export default {
	name: 'CustomizeDialog',
	components: {
		Compulsory,
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

			let { compulsory, optional } = this.options;
			let cartItem = cloneDeep(this.foodItem);
			cartItem.compulsory_options = cloneDeep(compulsory);
			cartItem.optional_options = cloneDeep(optional);
			this.$store.commit('addCart', cartItem);

			this.dialog = false;
		},

		handleCompulsory({ name, item }) {
			this.options.compulsory[name] = { ...item };
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
</style>