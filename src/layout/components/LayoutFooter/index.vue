<template>
  <div class="kuier-footer">
    <slot>
      <!--间距组件-->
      <n-space :size="50">
        <n-text depth="2">
          <n-a>
            <!--$t，是vue-i18n国际化插件-->
            {{$t('邮箱地址')}}:
          </n-a>
          <n-a italic :href="QQEmail" target="_blank">
            {{QQEmail}}
          </n-a>
        </n-text>
        <n-text depth="3">
          <n-a italic href="https://github.com/LiuQi0811/LargeScreenFrame" target="_blank">
            苏 ICP备20230811号-1
          </n-a>
        </n-text>
      </n-space>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import {QQEmail} from '@/settings/pathSetting'
</script>

<style lang="scss" scoped>
@include kuier(footer) {
  width: 100%;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  // 上右 0 下左 40
  padding: 0 40px;
  // 通用 scss样式 底部导航栏距离
  height: $--footer-height;
}
</style>