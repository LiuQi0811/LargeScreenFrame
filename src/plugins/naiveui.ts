import type {App} from 'vue'
import {
    create,
    NSpace,
    NButton,
    NDropdown,
    NMessageProvider,
    NConfigProvider,
} from 'naive-ui'

const naiveUI = create({
    components: [
        NSpace,
        NButton,
        NDropdown,
        NMessageProvider,
        NConfigProvider
    ]
})

export function setupNaiveUI(app: App<Element>) {
    app.use(naiveUI)
}