<template>
  <div class="nav">
    <ul class="navList">
      <li class="navItem"><i class="iconfont icon-home"></i>首页</li>
      <li class="navItem"><i class="iconfont icon-files"></i>归档</li>
      <li class="navItem"><i class="iconfont icon-about"></i>关于</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nav{
    .navList{
      display: flex;
      justify-content: center;
      .navItem{
        padding: 5px 10px;
        margin: 0 5px;
        font-size: 16px;
        overflow: hidden;
        cursor: pointer;
        &:hover{
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
          border-radius: 2px;
        }
        .iconfont{
          font-size: 18px;
        }
      }
      .isActive{
        box-shadow: 0 0 10px #adc2d7 inset;
      }
    }
  }
</style>
