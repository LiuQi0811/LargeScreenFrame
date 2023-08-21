import type {App} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import {LoginRoute} from "@/router/base";


/**
 * 路由列表
 */
export const constantRouter: any[] = [LoginRoute]

/**
 * 创建路由
 */
const router = createRouter({
    history: createWebHashHistory(''),
    routes: constantRouter,
    strict: true
})

/**
 * 设置路由
 */
export function setupRouter(app: App) {
    app.use(router)
}

/**
 * 导出路由
 */
export default router