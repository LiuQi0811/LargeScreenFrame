<template>
  <!--全局主题-->
  <n-config-provider
      :theme="darkTheme"
      :theme-overrides="themeOverrides">
  </n-config-provider>
</template>
<script lang="ts" setup>
import {NConfigProvider, GlobalThemeOverrides, darkTheme} from 'naive-ui' // Naive UI 框架引入
const darkTheme = ()=>{
  return darkTheme
}
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FF0000'
  },
  Button: {
    textColor: '#FF0000'
  }
}
</script>
