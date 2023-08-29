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
        <!--轮播图插件
        autoplay 是否自动播放
        interval 自动播放的间隔（ms）
        dot-type 轮播指示点样式
        -->
        <n-carousel autoplay dot-type="line"
                    :interval="Number(carouselInterval)">
          轮播图模块
          <img class="kuier-login-carousel-img" alt="image" v-for="(item,index) in carouselImageList" :key="index" :src="getImagePath(item,'login')"/>
        </n-carousel>
      </div>
      <!--登录账户模块-->
      <div class="login-account">
        <div class="login-account-container">
        <!--折叠渐变 Collapse Transition
        appear 是否在首次出现时播放动画
         show  是否展示内容
        -->
          <n-collapse-transition :appear="true" :show="true">
            <!--卡片 Card
            title  卡片的标题
            -->
            <n-card class="login-account-card" title="登录">
              <!--登录账户 logo-->
              <div class="login-account-top">
                <img class="login-account-top-logo" src="@/assets/images/login/input.png" alt="展示图片Logo"/>
              </div>
              <!--登录账户 Form表单-->
              <n-form>
                <!--用户名 Form子表单-->
                <n-form-item>
                  <n-input type="text" placeholder="请输入用户名">
                  </n-input>
                </n-form-item>
                <!--密码 Form子表单-->
                <n-form-item>
                  <n-input type="password" placeholder="请输入密码">
                  </n-input>
                </n-form-item>
                <!--自动登录 Form子表单-->
                <n-form-item>
                  <div>
                    <div>
                    <!--复选框 Checkbox
                     -->
                      <n-checkbox>
                        自动登录
                      </n-checkbox>
                    </div>
                  </div>
                </n-form-item>
                <!--登录提交按钮 Form子表单-->
                <n-form-item>
                <!--
                block 按钮是否显示为块级
                loading 按钮是否显示加载状态
                type 按钮的类型
                size 按钮的尺寸
                -->
                  <n-button type="primary" size="large" :loading="false" block>
                    登录
                  </n-button>
                </n-form-item>
              </n-form>
            </n-card>
          </n-collapse-transition>
        </div>
      </div>
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
import {carouselInterval} from '@/settings/designSetting'


const carouselImageList = ['first','second','third']


/*获取文件路径*/
const  getImagePath = (name: string,path:string) => {
    return new URL(`../../assets/images/${path}/${name}.png`,import.meta.url).href
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
// 登录表单 容器宽度
$container-width: 450px;
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
    // 登录账户模块
    .login-account{
      display: flex;
      flex-direction: column;
      margin: 0 160px;
      &-container{
        width: $container-width;
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