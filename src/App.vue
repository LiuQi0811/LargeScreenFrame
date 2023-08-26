<template>
  <!--全局主题-->
  <n-config-provider
      :theme="darkTheme"
      :theme-overrides="overridesTheme">
    <kui-er-app-provider>
      <i18n/>
      <router-view/>
    </kui-er-app-provider>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {NConfigProvider} from 'naive-ui' // Naive UI 框架引入
import {useDarkThemeHook,useThemeOverridesHook} from '@/hooks'
import {I18n} from '@/components/I18n' // I18n国际化
import {KuiErAppProvider} from '@/components/KuiErAppProvider'
// 使用深色主题
const darkTheme = useDarkThemeHook()
// 主题配置
const overridesTheme = useThemeOverridesHook()
</script>
