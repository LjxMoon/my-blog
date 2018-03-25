<template>
  <div id="app">
    <BlogHead></BlogHead>
    <BlogBody></BlogBody>
    <Pagination class=".page" :total="100"></Pagination>
  </div>
</template>

<script>
import BlogHead from '@/components/BlogHead'
import BlogBody from '@/components/BlogBody'
import Pagination from '@/components/Pagination'

export default {
  name: 'App',
  components: {
    BlogHead,
    BlogBody,
    Pagination
  }
}
</script>

<style rel="stylesheet/sass" lang="scss">
  html, body{
    width: 100%;
    min-height: 100%;
  }
</style>
<style rel="stylesheet/sass" lang="scss" scoped>
  #app{
    padding: 0 5%;
    background: url('./assets/bg4.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column ;
    justify-content: center;
  }
</style>
