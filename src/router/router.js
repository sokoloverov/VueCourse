import Vue from "vue";
import Router from 'vue-router';


// import PageDashboard from '../page/PageDashboard.vue'
// import PageAbout from '../page/PageAbout.vue'
// import Page404 from '../page/Page404.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../page/PageDashboard.vue')
        },
        {
            path: '/add/payments/:addForm',
            name: 'paymentform',
            component: () => import('../page/PageDashboard.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../page/PageAbout.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('../page/Page404.vue')
        }
    ]
})


