import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import gtmPlugin from "./plugins/gtm";

import {
    createPinia
} from "pinia";

createApp(App).use(router).use(createPinia()).use(gtmPlugin).mount("#app");