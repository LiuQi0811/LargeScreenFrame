import type {App} from 'vue'
import {
    create,
    NSpace,
    NButton,
    NDropdown,
    NMessageProvider,
    NConfigProvider,
    NCollapseTransition,
    NCarousel,
    NLayoutHeader,
    NLayoutFooter,
    NCard,
    NForm,
    NFormItem,
    NInput,
    NCheckbox
} from 'naive-ui'
/*创建naiveUI实例*/
const naiveUI = create({
    // 按需引入NaiveUI 组件
    components: [
        NSpace,
        NButton,
        NDropdown,
        NMessageProvider,
        NConfigProvider,
        NCollapseTransition,
        NCarousel,
        NLayoutHeader,
        NLayoutFooter,
        NCard,
        NForm,
        NFormItem,
        NInput,
        NCheckbox
    ]
})

export function setupNaiveUI(app: App<Element>) {
    app.use(naiveUI)
}