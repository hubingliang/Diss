import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Start',
            component: () => import('@/views/Start.vue'),
        },
        {
            path: '/room',
            name: 'room',
            component: () => import('@/views/Room.vue'),
        },
        {
            path: '/user',
            name: 'user',
            meta: {
                title: 'user',
            },
            component: () => import('@/views/user/Index.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    meta: {
                        title: 'login',
                    },
                    component: () => import('@/views/user/Login.vue'),
                },
                {
                    path: 'registered',
                    name: 'registered',
                    meta: {
                        title: 'registered',
                    },
                    component: () => import('@/views/user/Registered.vue'),
                },
            ],
        },
        {
            path: '/diss',
            name: 'diss',
            meta: {
                title: 'diss',
            },
            redirect: {
                name: 'conversation',
            },
            component: () => import('@/views/diss/Index.vue'),
            children: [
                {
                    path: 'conversation',
                    name: 'conversation',
                    meta: {
                        title: 'conversation',
                    },
                    component: () => import('@/views/diss/Conversation.vue'),
                },
            ],
        },
    ],
});
