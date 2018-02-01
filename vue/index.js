import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"

const PluginName = {
	install(Vue, options = {}) {
		Vue.component("sponge-navigation", Navigation);
    Vue.component("sponge-footer", Footer);
	}
};

export default PluginName;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(PluginName);
}
