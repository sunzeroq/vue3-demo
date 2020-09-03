import { createRouter, createWebHashHistory } from 'vue-router';
import Todo from '../views/todo'

const routes = [
    {path: '/', redirect: '/todo'},
    {path: '/todo', component: Todo}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
