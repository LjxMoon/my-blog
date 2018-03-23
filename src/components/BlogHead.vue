<template>
  <div class="blogHead">
    <img src="../assets/logo.png" alt="logo" class="blogLogo">
    <NavList></NavList>
  </div>
</template>

<script>
import NavList from './NavList'

export default {
  components: {
    NavList
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .blogHead{
    margin: 50px auto;
    .blogLogo{
      width: 300px;
      margin-bottom: 10px;
    }
  }
</style>
