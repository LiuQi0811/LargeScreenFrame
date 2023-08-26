<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
       <n-message-provider>
         FG
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
</script>