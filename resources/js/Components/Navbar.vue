<template>
	<nav class="navbar">
		<!-- Far Left -->
		<div class="logo">
			<div class="flex items-center">
				<Link href="/"><span class="cursor-pointer text-lg font-bold nav-name mr-2">swifty</span></Link>
			</div>
		</div>

		<!-- Center -->
		<div v-if="!isMobile" class="menu">
			<Link href="/" class="cursor-pointer small-nav-name">Home</Link>
			<Link href="/women" class="cursor-pointer small-nav-name">Women</Link>
			<a href="#" class="small-nav-name">Men</a>
			<a href="#" class="small-nav-name">Kids</a>
		</div>

		<!-- Far Right -->
		<div v-if="!isMobile"  class="account-checkbox-container">
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
		<div v-else>
			<Button type="button" style="background: none !important;" icon="pi pi-bars" @click="visible = true"></Button>

			<Sidebar v-model:visible="visible">
				<template #container="{ closeCallback }">
					<div class="flex flex-col h-full">
						<div class="flex align-items justify-between px-4 pt-3 flex-shrink-0">
							<span class="inline-flex items-center gap-2">
								<span class="cursor-pointer text-lg font-bold nav-name mr-2">swifty</span>
							</span>
							<span>
								<Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
							</span>
						</div>
						<div class="overflow-y-auto">
							<ul class="list-none p-3 mt-8">
								<li>
									<ul class="list-none p-0 m-0 overflow-hidden">
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-home mr-2"></i>
												<span class="font-medium">Home</span>
											</a>
										</li>
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-bookmark mr-2"></i>
												<span class="font-medium">Women</span>
											</a>
										</li>
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-users mr-2"></i>
												<span class="font-medium">Men</span>
											</a>
										</li>
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-users mr-2"></i>
												<span class="font-medium">Kids</span>
											</a>
										</li>
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-calendar mr-2"></i>
												<span class="font-medium">Cart</span>
											</a>
										</li>
										<li>
											<a v-ripple class="flex items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
												<i class="pi pi-cog mr-2"></i>
												<span class="font-medium">Profile</span>
											</a>
										</li>
										<li>
											<div class="checkbox-container">
												<input type="checkbox" class="checkbox" id="checkbox" v-model="isDarkTheme">
												<label for="checkbox" class="checkbox-label">
													<i class="pi pi-moon"></i>
													<i class="pi pi-sun"></i>
													<span class="ball"></span>
												</label>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="mt-auto">
							<hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
							<a v-ripple class="m-3 flex items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
							</a>
						</div>
					</div>
				</template>
			</Sidebar>
		</div>
	</nav>
</template>

<script>

import { Link } from '@inertiajs/vue3'
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Ripple from 'primevue/ripple';

export default {
	name: 'Navbar',
	components: {
		Link,
		Button,
		Sidebar,
		Ripple
	},
	data() {
		return {
			isDarkTheme: false,
			windowWidth: window.innerWidth,
			visible: false,
			isListOpen: false,
		};
	},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	},
	computed: {
		isMobile() {
			return this.windowWidth <= 768;
		}
	},
	watch: {
		isDarkTheme(newValue) {
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


