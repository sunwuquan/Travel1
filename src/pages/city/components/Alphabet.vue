<template>
    <ul class="list">
      <li class="item" v-for="(item, key) in citys" :key="key">{{key}}</li>
    </ul>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    citys: Object
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list{
    position absolute
    right 0
    top 1.58rem
    display flex
    flex-direction column
    justify-content center
    bottom 0
    color $bgColor
    line-height .4rem
    width .42rem
    text-align center
  }
</style>
