<template>
    <n-layout-header class="kuier-header" bordered>
      <header class="kuier-header-box">
      <!-- LEFT -->
        <div class="header-item left">
          <n-space>
            <slot name="left">
              左
            </slot>
          </n-space>
        </div>
      <!-- CENTER -->
        <div class="header-item center">
          <slot name="center">
            中
          </slot>
        </div>
      <!-- RIGHT -->
        <div class="header-item right">
          <slot>右</slot>
          <KuiErLangSelect/>
        </div>
      </header>
    </n-layout-header>
</template>
<script lang="ts" setup>
import  {KuiErLangSelect} from '@/components/KuiErLangSelect'
</script>
<style lang="scss" scoped>
// 最小宽度
  $min-width: 520px;
  @include kuier(header){
    &-box{
      display: grid;
      grid-template-columns: repeat(3,33%);
      .header-item{
        display: flex;
        align-items: center;
        // 调用最小宽度
        min-width: $min-width;
        &.left{
          justify-content: start;
        }
        &.center{
          justify-content: center;
        }
        &.right{
          justify-content: end;
        }
      }
      // 顶部距离
      height: $--header-height;
      // 边距填充 上 0 右 20 下 0 左 60
      padding: 0 20px 0 60px;
    }
  }
</style>