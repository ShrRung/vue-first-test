// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VRouter from 'vue-router'
import VueSource from 'vue-resource'
import IndexPage from './pages/index'

Vue.use(VRouter)
Vue.use(VueSource)

let router = new VRouter({
    mode: 'history',    //去除hash，即浏览器的#。
    routes:[
        {
            path: '/',
            component: IndexPage
        }
    ]
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
})
