import {defineConfig} from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import viteCompression from 'vite-plugin-compression' // gzip静态资源压缩
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        // gzip 压缩
        viteCompression({

        })
    ]
})