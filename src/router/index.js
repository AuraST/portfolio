import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Projects from '@/views/Projects'
import Contacts from '@/views/Contacts'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: About
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/projects/:code',
            name: 'ProjectsDetail',
            component: () => import('@/views/ProjectsDetail.vue'),
            props: true
        },
        {
            path: '/contacts',
            component: Contacts
        }
    ]
})

export default router
