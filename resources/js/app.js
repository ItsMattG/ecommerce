import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import '../css/app.css';

createInertiaApp({
	resolve: name => {
		const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
		return pages[`./Pages/${name}.vue`]
	},
	setup({ App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.directive('ripple', Ripple)
			.directive('styleclass', StyleClass)
			.use(PrimeVue, { ripple: true })
			.mount('body')
	},
})