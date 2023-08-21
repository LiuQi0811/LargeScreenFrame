import { createApp } from 'vue'
import App from './App.vue'
import {setupStore} from '@/store'
import router, {setupRouter} from '@/router'

/**
 * 初始化 app
 */
async function initApp(){
    // 创建app 对象实例化
   const app = createApp(App)
   // 挂载状态管理
   setupStore(app)
   // 挂载路由管理
   setupRouter(app)
   await router.isReady()
   // 挂载到页面
   app.mount('#app',true)

}

// 初始化 app
initApp().then(()=>{
   window.addEventListener("unkown",event=>{
         console.warn(`Message ${event}`);
   })
})