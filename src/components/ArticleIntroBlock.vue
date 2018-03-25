<template>
  <div class="articleIntrlBlock">
    <h1 class="articleName">最后我选择了 Quiver</h1>
    <p class="articleInfo">2012-12-12</p>
    <p class="articleContext">
      作为一个不折腾会死星人，笔记软件也是我的折腾目标之一。在此之前的纠结中我选择了为知笔记，为什么我不选择印象笔记呢？原因很简单，它对 Markdown 不支持，而我又是特别讨厌用富文本编辑器的。习惯上都是在笔记软件中写博文，然后写到差不多了粘贴到 Hexo 中然后发布。用印象笔记显然并不友好，虽然说我也可以直接在其中用 Markdown 语法写，但是那样代码块就没有办法高亮了。除了这个原因，其实还有一个。就是 Mac 上印象笔记的 App 实在是太丑了.. 所以后面选择了为知笔记。但，为知笔记上写 Markdown 的话需要在笔记标题后面加上 .md 后缀，这让我很不爽。而且笔记的样式也太丑了吧，作为前端简直不能忍。除了这两个家伙，我还尝试了其他的一些笔记应用，例如 Ulysses，Beer 之类的。虽然 Ulysses 看起来很好用，但无奈它变成了订阅制，感觉并不值得买了。之前的一次购买终身使用还差不多。Beer 的话就显得功能太过单薄了。这一类软件基本上都没有办法全平台通用，肯定没有印象笔记之类的那种手机 App。不过也还好，反正我不怎么在手机上记笔记，而且基本上也是电脑不离身的。
    </p>
    <router-link class="readmore" to="/article">更多>></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .articleIntrlBlock{
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #E6E6E6;
    .articleContext{
      margin: 15px auto;
      text-indent: 2em;
    }
    .readmore{
      font-size: 20px;
      color: brown;
      &:hover{
        border-bottom: 1px solid brown;
      }
    }
  }
</style>
