import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import task1 from '../views/Task1.vue'
import task2 from '../views/Task2.vue'
import task3 from '../views/Task3.vue'
import list from '../views/ToDoList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/task1',
        name: 'task1',
        component: task1
    },
    {
        path: '/task2',
        name: 'task2',
        component: task2
    },
    {
        path: '/task3',
        name: 'task3',
        component: task3
    },
    {
        path: '/list',
        name: 'list',
        component: list
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
