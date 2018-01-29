import Navigation from "components/Navigation"

const PluginName = {
	install(Vue, options = {}) {
		Vue.component('sponge-header', Navigation);
	}
};
export default PluginName;
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(PluginName);
}
