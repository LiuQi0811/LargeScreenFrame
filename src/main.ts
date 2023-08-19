import { createApp } from 'vue'
import App from './App.vue'

/**
 * 初始化 app
 */
async function initApp(){
    // 创建app 对象实例化
   const app = createApp(App)
   // 挂载到页面
   app.mount('#app',true)
}

// 初始化 app
initApp().then(()=>{
   window.addEventListener("unkown",event=>{
         console.warn(`Message ${event}`);
   })
})