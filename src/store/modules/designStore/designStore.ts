import  {defineStore} from 'pinia' // 引入 Pinia（状态管理）依赖
import  {DesignStateType,AppThemeColorType} from  './designStore.d'
import {getLocalStorage} from '@/utils'
import { theme } from '@/settings/designSetting'
import {StorageEnum} from '@/enums/storageEnums'
import { ThemeEnum } from '@/enums/styleEnums'
// 解析主题对象信息
const {darkTheme,appTheme,appThemeDetail} = theme
// 解析缓存枚举对象信息
const {KUIER_DESIGN_STORE} = StorageEnum
// 从缓存中获取 当前选择的主题
const storageDesign = getLocalStorage(KUIER_DESIGN_STORE)
// defineStore() 定义 store 储存。
export const  useDesignStore = defineStore({
    id:'useDesignStore',
    // state 在 Pinia 中，state 被定义为返回初始状态的函数。默认情况下，您可以通过 store 实例，访问 state 实例来，直接读取和写入状态。
    state:(): DesignStateType => storageDesign || {
            // 深色主题标识
            darkTheme,
            // 主题名称
            themeName: (darkTheme && ThemeEnum.DARK) || ThemeEnum.LIGHT,
            // 主题默认颜色
            appTheme,
            // 主题详情
            appThemeDetail
    },
    // getters Getter 完全等同于 Store 状态的计算值。具备缓存功能。它们可以用 defineStore() 中的 getters 属性定义。 Pinia（状态管理）
    getters:{
        // 获取深色主题
        getDarkTheme(e): boolean{
            return this.darkTheme
        },
        getAppTheme(): string{
            return this.appTheme
        },
        getAppThemeDetail(): AppThemeColorType | null {
            return this.appThemeDetail
        }
    },
    // actions Actions 相当于组件中的方法。它们非常适合定义业务逻辑。action 通过完全输入（和自动完成）来支持访问整个 store 实例。与 getter 不同，它可以是异步的。
    actions:{

    }
})