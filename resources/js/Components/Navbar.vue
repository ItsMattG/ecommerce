<template>
	<nav class="navbar">

		<!-- Far Left -->
		<div class="logo">
			<div class="flex items-center">
				<span class="text-lg font-bold nav-name mr-2">swifty</span>
			</div>
		</div>

		<!-- Center -->
		<div class="menu">
			<a href="#" class="small-nav-name">Home</a>
			<a href="#" class="small-nav-name">Women</a>
			<a href="#" class="small-nav-name">Men</a>
			<a href="#" class="small-nav-name">Kids</a>
		</div>

		<!-- Far Right -->
		<div class="account-checkbox-container">
			<div class="account-container">
				<button class="focus:outline-none">
					<i class="pi pi-shopping-cart"></i>
				</button>
				<button class="focus:outline-none">
					<i class="pi pi-user"></i>
				</button>
			</div>


			<div class="checkbox-container">
				<input type="checkbox" class="checkbox" id="checkbox" v-model="isDarkTheme">
				<label for="checkbox" class="checkbox-label">
					<i class="pi pi-moon"></i>
					<i class="pi pi-sun"></i>
					<span class="ball"></span>
				</label>
			</div>
		</div>
	</nav>
</template>


<script>
export default {
	name: 'Navbar',
	data() {
		return {
			isDarkTheme: false
		};
	},
	watch: {
		isDarkTheme(newValue) {
			console.log('asdasd')
			const themeChangeDiv = document.getElementById("themeChange");
			if (themeChangeDiv) {

				themeChangeDiv.dataset.theme = newValue ? "dark" : "light";
			}
		}
	},
	methods: {
	},
};
</script>


