import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Admin from '@/views/admin'
import Admin2 from '@/views/Admin2'
import Admin1 from '@/views/Admin1'
import LoginOut from '@/components/LoginOut'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      children:[
        {path:'admin2',name:'Admin2',component:Admin2},
        {path:'admin1',name:'Admin1',component:Admin1},
      ]
    },
    {
      path:'/loginout',
      name:'LoginOut',
      component:LoginOut
    }
  ]
})
