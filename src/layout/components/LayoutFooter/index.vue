<template>
  <div class="kuier-footer">
    <slot>
      底部布局页面
    </slot>
  </div>
</template>

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