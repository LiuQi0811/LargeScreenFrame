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
    <!--登录主体模块-->
    <div class="kuier-login">
      <!--轮播图模块-->
      <div class="kuier-login-carousel">
        <!--轮播图插件-->
        <n-carousel>
          轮播图模块
          <img class="kuier-login-carousel-img" alt="image" src="@/assets/images/login/second.png"/>
        </n-carousel>
      </div>
      登录主体模块
    </div>
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
* {
  box-sizing: border-box;
}

// 登录框架 vh 屏幕窗体占比高度
$kuier-login-height: 100vh;
// 轮播图宽度
$carousel-width: 30%;
// 轮播图图片高度
$carousel-image-height: 60vh;

@include kuier(login-box) {
  height: $kuier-login-height;
  overflow: hidden;
  @include background-image('background-image');
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: $--header-height;
  }
  &-divider {
    margin: 0;
    padding-top: 0;
  }
  // 登录主体模块
  @include kuier(login){
    background-color: seagreen;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: $--header-height;
    height: $kuier-login-height;
    width: 100vw;
    // 轮播图模块
    &-carousel{
      width: $carousel-width;
      margin-top: 100px;
      min-width: 500px;
      // 轮播图图片
      &-img{
        display: block;
        margin: 0 auto;
        // 轮播图图片高度 根据窗体适应
        height: $carousel-image-height;
      }

    }
  }
}

// 响应式布局设置
// only(限定某种设备)
// screen 是媒体类型里的一种
// and 被称为关键字，其他关键字还包括 not(排除某种设备)
@media only screen and (max-width: 1200px) {
  .bg-img-box, .bg-slot, .kuier-login-carousel {
    display: none !important;
  }
  .kuier-login-box-footer {
    position: relative;
  }
}
</style>