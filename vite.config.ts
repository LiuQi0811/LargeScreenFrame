import {defineConfig} from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import viteCompression from 'vite-plugin-compression' // gzip静态资源压缩
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'


/**
 * 路径解析
 */
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
    base: '/',
    // 路径重定向
    resolve: {
        alias: [
            {
                find: /\/#\//,
                replacement: pathResolve('types')
            },
            // @ 代替 src
            {
                find: '@',
                replacement: pathResolve('src')
            }
        ],
        dedupe: ['vue']
    },
    // 全局css注册
    css:{
        preprocessorOptions:{
            scss:{
                javascriptEnabled: true,
                additionalData: `@import "src/styles/common/style.scss";`
            }
        }
    },
    plugins: [
        vue(),
        // gzip 压缩
        viteCompression({})
    ]
})