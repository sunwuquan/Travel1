<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-container {
                 overflow inherit
  }
  .container{
    position fixed
    display flex
    flex-direction column
    justify-content center
    left 0
    right 0
    top 0
    bottom 0
    background #000
    z-index 99
  }
  .wrapper{
    width 100%
    height 0
    padding-bottom 100%
  }
  .gallary-img {
    width 100%
  }
  .swiper-pagination {
    bottom -2rem
    color #fff
  }
</style>
