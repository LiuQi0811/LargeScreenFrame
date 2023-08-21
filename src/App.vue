<template>
  <!--全局主题-->
  <n-config-provider
      :theme="darkTheme">
    <router-view></router-view>
  </n-config-provider>
</template>
<script lang="ts" setup>
import {NConfigProvider} from 'naive-ui' // Naive UI 框架引入
import {useDarkThemeHook} from '@/hooks'

const darkTheme = useDarkThemeHook()
</script>
