<template>
  <strong style="color: white;font-size: 30px">KuiErAppProvider</strong>
  <!--加载条组件-->
  <n-loading-bar-provider>
    <!--对话框组件-->
    <n-dialog-provider>
      <dialog-content/>
      <!--通知组件-->
      <n-notification-provider>
      <!--信息组件-->
       <n-message-provider>
         <!--插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot> 表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的<slot></slot>标签。-->
         <slot/>
       </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import {
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider
} from 'naive-ui'
import { DialogContent } from '@/components/Plugins/DialogContent'
</script>