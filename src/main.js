import {
    createApp
} from "vue";
import App from "./App.vue";
import {
    createRouter,
    createWebHistory
} from "vue-router";
import Header from "./components/Header.vue";
import Envios from "./components/Envios.vue";
import Calculadora from "./components/Calculadora.vue";
import Formulario from "./components/Formulario.vue";
import {
    createPinia
} from "pinia";
import "./style.css";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: Header,
        },
        {
            path: "/envios",
            component: Envios,
        },
        {
            path: "/app",
            component: App,
        },
        {
            path: "/calculadora",
            component: Calculadora,
        },
        {
            path: "/formulario",
            component: Formulario,
        },
    ],
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");