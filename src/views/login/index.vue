<template>
  <!-- 登录相关 -->
  <div class="kuier-login-box">
    <div class="kuier-login-box-bg">
      <aside class="bg-slot"></aside>
      <aside class="bg-img-box">
        <strong style="font-size: 55px;">登录页面</strong>
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

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
// 登录框架 vh 屏幕窗体占比高度
$kuier-login-height: 100vh;
@include kuier(login-box){
  height: $kuier-login-height;
  overflow: hidden;
  @include background-image('background-image');
  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: $--header-height;
  }
}
@media only screen and (max-width: 1200px) {
  .bg-img-box,.bg-slot{
    display: none !important;
  }
 .kuier-login-box-footer{
   position: relative;
 }
}
</style>