import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Envios from '/components/Envios.vue'
import Cobertura from 'components/Cobertura.vue'
import Calculadora from 'components/Calculadora.vue'
import Tarifas from 'components/Tarifas.vue'

const routes = [{
        path: '/Envios',
        name: 'Envios',
        component: Envios
    },
    {
        path: '/Cobertura',
        name: 'Cobertura',
        component: Cobertura
    },
    {
        path: '/Calculadora',
        name: 'Calculadora',
        component: Calculadora
    },
    {
        path: '/Tarifas',
        name: 'Tarifas',
        component: Tarifas
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router