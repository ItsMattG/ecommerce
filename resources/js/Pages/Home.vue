<template>
	<nav class="flex items-center justify-between bg-gray-800 py-4 px-6">
	  <!-- Far Left -->
	  <div class="flex items-center justify-center w-1/3">
		<div class="flex items-center">
		  <span class="text-white text-lg font-bold">Swifty</span>
		</div>
	  </div>

	  <!-- Center -->
	  <div class="flex items-center justify-evenly w-1/3">
		<div class="flex items-center space-x-6">
		  <a href="#" class="text-gray-300 hover:text-white px-3 py-2 flex-grow">Home</a>
		  <a href="#" class="text-gray-300 hover:text-white px-3 py-2 flex-grow">Women</a>
		  <a href="#" class="text-gray-300 hover:text-white px-3 py-2 flex-grow">Men</a>
		  <a href="#" class="text-gray-300 hover:text-white px-3 py-2 flex-grow">Kids</a>
		</div>
	  </div>

	  <!-- Far Right -->
	  <div class="flex items-center justify-center w-1/3">
		<div class="flex items-center">
		  <button class="text-gray-300 hover:text-white px-3 py-2 focus:outline-none">
			<i class="pi pi-shopping-cart"></i>
		  </button>
		  <button class="text-gray-300 hover:text-white px-3 py-2 focus:outline-none">
			<i class="pi pi-user"></i>
		  </button>
		</div>
	  </div>
	</nav>
  </template>

  <script>

  export default {
	name: 'Home',
	components: {
	},
	data() {
	  return {
	  };
	},
	methods: {
	},
  };
  </script>

  <style scoped>
  .slide-enter-active, .slide-leave-active {
	transition: transform 0.3s ease;
  }

  .slide-enter, .slide-leave-to {
	transform: translateX(-100%);
  }
  </style>
