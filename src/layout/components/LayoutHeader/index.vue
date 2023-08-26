<template>
    <n-layout-header class="kuier-header" bordered>
      <header class="kuier-header-box">
        <div class="header-item left">
          头部布局页面
        </div>
      </header>
    </n-layout-header>
</template>

<style lang="scss" scoped>
// 最小宽度
  $min-width: 520px;
  @include kuier(header){
    &-box{

    }
  }
  .header-item{
    display: flex;
    align-items: center;
    border: 1px seagreen solid;
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
    //height: $--header-height;
  }
</style>