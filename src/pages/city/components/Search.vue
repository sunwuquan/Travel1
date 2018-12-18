<template>
  <div>
    <div class="search">
      <input type="text" v-model="searchInput" placeholder="请输入城市名称或拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="searchInput">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleClickCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNodata">没有找到匹配内容</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'Search',
  props: {
    citys: Object
  },
  data () {
    return {
      searchInput: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleClickCity (city) {
      this.increment(city)
      this.$router.push('/')
    },
    ...mapMutations(['increment'])
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    searchInput () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchInput) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.citys) {
          this.citys[i].forEach((value) => {
            if (value.spell.indexOf(this.searchInput) > -1 || value.name.indexOf(this.searchInput) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search{
    height .72rem
    background $bgColor
    padding 0 .1rem
  }
  .search-input{
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
    box-sizing border-box
    padding 0 .1rem
  }
  .search-content{
    overflow hidden
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
  }
  .search-item{
    padding-left .2rem
    background #fff
    line-height .62rem
    color #666
  }
</style>
