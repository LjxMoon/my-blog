<template>
  <div id="app">
    <BlogHead></BlogHead>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BlogHead from '@/components/BlogHead'

export default {
  name: 'App',
  components: {
    BlogHead
  }
}
</script>

<style rel="stylesheet/sass" lang="scss" scoped>
#app{
  padding: 0 5%;
  background: url('./assets/bg4.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  .content{
    margin: 0px auto 50px;
    max-width: 1200px;
    padding: 30px 30px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.65);
  }
}
</style>
