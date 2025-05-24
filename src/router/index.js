import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import ProductView from '@/views/ProductView.vue'
import IntroductionView from '@/views/IntroductionView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AdminView from '@/views/AdminView.vue'
import AdminHome from '@/components/AdminHome.vue'
import AdminProduct from '@/components/AdminProduct.vue'
import AdminAccount from '@/components/AdminAccount.vue'
import AdminBill from '@/components/AdminBill.vue'
import AdminHistory from '@/components/AdminHistory.vue'
import AdminCustomer from '@/components/AdminCustomer.vue'
import AdminStatistic from '@/components/AdminStatistic.vue'
import ProductEdit from '@/components/ProductEdit.vue'
import AdminType from '@/components/AdminType.vue'
import AdminSize from '@/components/AdminSize.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/product-detail/:idType/:nameProduct',
      name: 'product-detail',
      component: ProductDetailView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/admin',
      component: AdminView,
      children: [
        {path: "home", component: AdminHome},
        {path: 'product', component: AdminProduct},
        {path: 'account', component: AdminAccount},
        {path: 'bill', component: AdminBill},
        {path: 'history', component: AdminHistory},
        {path: 'customer', component: AdminCustomer},
        {path: 'statistic', component: AdminStatistic},
        {path: 'product-edit/:idType/:nameProduct', component: ProductEdit},
        {path: 'product-edit/', component: ProductEdit},
        {path: 'type', component: AdminType},
      ]
    },
    
    
  ],
})

export default router
