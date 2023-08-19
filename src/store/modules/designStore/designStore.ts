import  {defineStore} from 'pinia' // 引入 Pinia（状态管理）依赖
import  {DesignStateType} from  './designStore.d'

// defineStore() 定义 store 储存。
export const  useDesignStore = defineStore({
    id:'useDesignStore',
    // state 在 Pinia 中，state 被定义为返回初始状态的函数。默认情况下，您可以通过 store 实例，访问 state 实例来，直接读取和写入状态。
    state:()=>({

    }),
    // getters Getter 完全等同于 Store 状态的计算值。具备缓存功能。它们可以用 defineStore() 中的 getters 属性定义。 Pinia（状态管理）
    getters:{

    },
    // actions Actions 相当于组件中的方法。它们非常适合定义业务逻辑。action 通过完全输入（和自动完成）来支持访问整个 store 实例。与 getter 不同，它可以是异步的。
    actions:{

    }
})