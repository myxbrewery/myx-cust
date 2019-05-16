<template>
	<div id="orderItem" class="ma-3">
		<p class="item">{{ item.name }}</p>

		<compulsory-list v-if="!noCompulsory"
			:items="parseCompulsory(item)" />
		<optional-list v-if="!noOptional"
			:items="parseOptional(item)" />
	</div>
</template>

<script>
import Vue from 'vue';

Vue.component('compulsory-list', {
	props: ['items'],
	template: `
		<ul class="ma-0 mt-2">
			<li v-for="item in items">
			 {{ item.name }}: {{ item.option }}
			</li>
	 	</ul>
	`
});

Vue.component('optional-list', {
	props: ['items'],
	template: `
		<ul class="ma-0 mt-2">
			<li v-for="obj in items">
				{{ obj.name }}:
				<ul class="pl-2">
					<li v-for="option in obj.options"
						style="list-style-type: disc; list-style-position: inside;">
					  {{ option }}
				  </li>
				</ul>
			</li>
		</ul>
	`
});

export default {
	name: 'OrderItem',
	props: ['item'],

	methods: {
		isEmpty(obj) {
			return Object.keys(obj).length === 0;
		},

		parseCompulsory(item) {
			let options = item.compulsory_options;
			let arr = [];

			// convert to { name: 'Choice of Noodle', option: 'Kuay Teow' }
			for (let optionType in options)
				for (let optionChoice in options[optionType])
					arr.push({ name: optionType, option: optionChoice });

			return arr;
		},
		parseOptional(item) {
			let options = item.optional_options;
			let arr = [];

			// convert to { name: 'Add Ons', options: ['egg', 'rice'] }
			for (let optionType in options) {
				let chosenOptions = Object.keys(options[optionType]);
				if (chosenOptions.length > 0) arr.push({
					name: optionType,
					options: chosenOptions,
				});
			}

			return arr;
		},
	},

	computed: {
		noCompulsory() {
			return this.isEmpty(this.item.compulsory_options);
		},
		noOptional() {
			return this.isEmpty(this.item.optional_options);
		},
	}
};
</script>

<style scoped>
#orderItem {
	text-align: left;
}

.item {
	width: 100%;
	margin: 0;
	text-align: center;
	font-size: 1.3rem;
}
</style>