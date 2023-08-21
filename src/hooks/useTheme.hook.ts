import { useDesignStore } from '@/store/modules/designStore/designStore'
import { GlobalThemeOverrides, darkTheme } from 'naive-ui'
import { computed, toRefs } from 'vue'


/**
 *  使用深色主题
 */
export const useDarkThemeHook = () => {
    const designStore = useDesignStore()
    return computed(()=>{designStore.getDarkTheme ? darkTheme : undefined})
}

/**
 * 设置全局主题
 */
export const useThemeOverridesHook = () =>{
    const designStore = useDesignStore()
    const {getAppTheme} = toRefs(designStore)
    const darkTheme = computed(():GlobalThemeOverrides =>{
        const commonObject = {
            common:{
                primaryColor:getAppTheme.value
            }
        }
         // 亮色主题
      const lightObject = {
        common: {
          ...commonObject.common
        }
      }
      // 暗色主题
      const dartObject = {
        common: {
          ...commonObject.common
        },
        LoadingBar: {
          colorLoading: getAppTheme.value
        }
    }
        return designStore.getDarkTheme ? dartObject : lightObject
    })
    return darkTheme

}