import type {App} from 'vue' // 引入vue  App依赖
import {createPinia} from 'pinia' // 引入pinia createPinia依赖

// 实例化创建pinia
const pinia = createPinia()

/**
 * 设置存储
 * @param app
 */
export function setupStore(app: App<Element>){
    // 挂载使用 pinia
    app.use(pinia)
}

/**
 * 导出 pinia
 */
export {pinia}
