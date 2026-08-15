import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TeamsView from './views/TeamsView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/teams',
        name: 'Teams',
        component: TeamsView
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router