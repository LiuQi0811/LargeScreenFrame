<template>
  <!-- 程序主入口样式展示 -->
  <div style="color: orange; font-size: 38px;
  font-weight: bold; display: flex; justify-content: center;align-items: center;height: 50vh;">
    App Main
  </div>
  <!--全局主题-->
  <n-config-provider
      :theme="darkTheme"
      :theme-overrides="overridesTheme">
      <I18n/>
    <router-view/>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {NConfigProvider} from 'naive-ui' // Naive UI 框架引入
import {useDarkThemeHook,useThemeOverridesHook} from '@/hooks'
import {I18n} from '@/components/I18n' // I18n国际化
// 使用深色主题
const darkTheme = useDarkThemeHook()
// 主题配置
const overridesTheme = useThemeOverridesHook()
</script>
