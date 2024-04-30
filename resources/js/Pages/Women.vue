<template>
		<navbar></navbar>
		<div style="background-color: red; height: 100%; width: 100%; display: flex;">
			<div style="margin-top: 4rem; background-color: blue; display: flex; height: 30%; width: 100%; justify-content: center; align-items: center;">
				<div style="background-color: green; display: flex; height: 100%; width: 80%;"></div>
			</div>
		</div>
		<!-- Top -> Promo Bar -->
		<!-- Left -> Filter -->
		<!-- Right -> Grid layout of items -->
</template>

<script>
import Navbar from '../Components/Navbar.vue';
export default {
	name: 'Women',
	components: {
		Navbar
	}
}
</script>