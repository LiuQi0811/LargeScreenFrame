import { createApp } from 'vue'
import App from './App.vue'
import {setupStore} from '@/store'
import {setupRouter} from '@/router'
import {setupNaiveUI} from '@/plugins';
import i18n from '@/i18n/index'



/**
 * 初始化 app
 */
async function initApp(){
    // 创建app 对象实例化
   const app = createApp(App)
   // 注册全局常用的 naive-ui 组件
   setupNaiveUI(app)
   // 挂载状态管理
   setupStore(app)
   // 挂载路由管理
   setupRouter(app)
   // i18n 国际化语言挂载
   app.use(i18n)
   // 挂载到页面
   app.mount('#app',true)

}

// 初始化 app
initApp().then(()=>{
   window.addEventListener("unkown",event=>{
         console.warn(`Message ${event}`);
   })
})