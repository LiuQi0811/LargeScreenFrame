import {RouteRecordRaw} from 'vue-router' // 引入vue-router 路由RouteRecordRaw 方法

export const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
        title: '登录'
    }
}