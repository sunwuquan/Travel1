<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市经典有游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header {
    line-height: $headerHeight
    background $bgColor;
    color :#fff;
  display :flex;
  }

  .header-left {
    width: .64rem;
    float: left;
  }
  .back-icon{
    display block;
    text-align center;
    font-size .4rem;
  }
  .header-input{
    flex :1;
    border-radius .1rem;
    height: .64rem;
    margin-top : .12rem;
    color #ccc;
    padding-left .2rem;
    line-height .64rem;
    margin-left: .2rem;
    background :#fff;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 .1rem
    float: right;
    text-align center;
    color #fff
  }
  .arrow-icon{
    display inline-block
    font-size .24rem;
  }

</style>
