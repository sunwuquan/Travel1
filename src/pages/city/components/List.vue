<template>
  <div class='list' ref='wrapper'>
    <div>
      <div class='area'>
        <div class='title border-topbottom'>当前城市</div>
        <div class='button-list'>
          <div class='button-wrapper'>
            <div class='button'>{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>热门城市</div>
        <div class='button-list'>
          <div class='button-wrapper' v-for='item in hot' :key='item.id' @click="handleClickCity(item.name)">
            <div class='button'>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class='area' v-for='(item, key) in citys' :key= 'key' :ref='key'>
        <div class='title border-topbottom'>{{key}}</div>
        <div class='item-list'>
          <div class='item border-bottom' v-for='innerItem in item' :key="innerItem.id" @click="handleClickCity(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'List',
  props: {
    hot: Array,
    citys: Object,
    changeItem: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleClickCity (city) {
      this.clickCity(city)
      this.$router.push('/')
    },
    ...mapActions(['clickCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    changeItem () {
      if (this.changeItem) {
        const element = this.$refs[this.changeItem][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
        border-color #ccc
  .list{
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
  }
  .title{
    line-height: .54rem
    background: #eee
    color #666
    padding-left .2rem
    font-size .26rem
  }
  .button-list{
    padding .1rem .6rem .1rem .1rem
    overflow hidden
  }
  .button-wrapper{
    width 33.33%
    float: left
  }
  .button{
    text-align: center
    margin: .1rem
    padding .1rem 0
    border .02rem solid #ccc
    border-radius .06rem
  }
  .item-list .item{
    line-height .76rem
    color #666
    padding-left .2rem
  }
</style>
