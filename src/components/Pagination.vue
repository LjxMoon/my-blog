<template>
  <div class="pageination">
    <Page class="page" :total="total" @on-change="pageChange"></Page>
  </div>
</template>

<script>
import { Page } from 'iview'

export default {
  props: {
    total: {
      type: Number
    }
  },
  methods: {
    pageChange (page) {
      console.log(page)
    }
  },
  components: {
    Page
  }
}
</script>

<style lang="scss">
  .pageination{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .page{
      li{
        width: 30px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #000;
        border-color: #000;
        border-radius: 1px;
        background-color: rgba(0, 0, 0, 0);
        a{
          color: #000;
        }
        &.ivu-page-item-jump-next:after, &.ivu-page-item-jump-prev:after{
          color: #000;
        }
        &:hover{
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          a{
            color: #FFF;
          }
        }
        &.ivu-page-item-active{
          color: #000;
          background-color: yellowgreen;
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          a{
            color: inherit;
          }
        }
        .ivu-icon{
          font-size: 16px;
        }
      }
    }
  }
</style>
