import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue"
import {createRouter,createWebHistory} from 'vue-router'
import AddPage from "./components/AddPage.vue"
import UpdatePage from "./components/UpdatePage.vue"


const routes=[
    {
        name:'Home',
        component:Home,
        path:'/home'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name: 'Login',
        component:Login,
        path:'/Login'
    },
    {
        name: 'AddPage',
        component:AddPage,
        path:'/AddPage'
    },
    {
        name: 'UpdatePage',
        component:UpdatePage,
        path:'/UpdatePage'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router