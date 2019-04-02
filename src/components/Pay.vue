<template>
	<div id="pay">
		<SearchBar />
		<div id="content">
			<h5>Your total is</h5>
			<h1>$3.50</h1>
			<a href="http://www.dbs.com.sg/personal/mobile/paylink/index.html?tranRef=bca6jKVtAr">
				<img src="https://media.karousell.com/media/photos/products/2017/10/14/dbs_paylah_referral_code_1507951457_97c35afa.jpg">
			</a>
			<h6>Click on above image to pay</h6>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/reusable/SearchBar';

export default {
	name: 'Pay',
	components: {
		SearchBar,
	},
};
</script>

<style scoped>
#content {
	margin-top: 7.5vh;
}

h1, h2, h3, h4, h5 {
	font-weight: bold;
}

img {
	width: 50%;
}
</style>