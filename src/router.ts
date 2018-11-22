import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/user/Login.vue';
import Start from './views/Start.vue';
import Layout from './views/user/Layout.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Start',
            component: Start,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Login,
        },
        {
            path: '/layout',
            name: 'layout',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Layout,
        },
        {
            path: '/room',
            name: 'room',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: Login,
            component: () =>
                import(/* webpackChunkName: "about" */ './views/Room.vue'),
        },
    ],
});
