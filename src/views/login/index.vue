<template>
  <!-- 登录相关 -->
  <div class="kuier-login-box">
    <div class="kuier-login-box-bg">
      <aside class="bg-slot"></aside>
      <aside class="bg-img-box">
        登录页面
      </aside>
    </div>
<!-- 头部 -->
<layout-header>
</layout-header>
<!-- 底部导航栏 -->
<div class="kuier-login-box-footer">
  <!--自定义底部布局组件-->
  <layout-footer/>
</div>
  </div>
</template>
<script lang="ts" setup>
import {LayoutHeader} from '@/layout/components/LayoutHeader'
import {LayoutFooter} from '@/layout/components/LayoutFooter'
</script>