<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header{
    position relative
    background $bgColor
    height $headerHeight
    font-size .32rem;
    color #fff
    line-height $headerHeight
    overflow hidden
    text-align center
  }
  .header-back{
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    color #fff
    font-size .4rem
  }
</style>
