import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"

const PluginName = {
	install(Vue, options = {}) {
		Vue.component(Navigation.name, Navigation);
    Vue.component(Footer.name, Footer);
	}
};

export default PluginName;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(PluginName);
}
