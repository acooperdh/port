import Vue from 'vue';
import App from './App.vue';

import router from './router';

Vue.config.proudctionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')

