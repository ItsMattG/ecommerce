<template>
	<navbar></navbar>
	<div class="main">
		<div class="hero">
			<div class="hero-container">

				<!-- Left side: Title and Subtitle -->
				<div class="hero-content">
					<h1 class="hero-title">Express Yourself with <span class="color-effect">Custom Tees</span></h1>
					<p class="hero-subtitle">Unleash Your Style with Trendy, One-of-a-Kind Tees</p>
					<div class="card flex justify-content-center">
						<Button label="Explore Now" class="hero-button" />
					</div>
				</div>

				<!-- Right side: Hero Image -->
				<div class="hero-image">
					<img src="../../images/t_shirt.jpeg" alt="Hero Image">
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import Button from 'primevue/button';
import Navbar from '../Components/Navbar.vue';
export default {
	name: 'Home',
	components: {
		Button,
		Navbar
	},
	data() {
		return {
		};
	},
	watch: {

	},
	methods: {
	},
};
</script>
