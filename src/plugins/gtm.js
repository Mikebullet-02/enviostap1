import VueGtm from 'vue-gtm'

export default function (app) {
    app.use(VueGtm, {
        id: 'GTM-PWNLX7R',
        vueRouter: app.router
    })
}