<template>
  <div>
    <div class="banner" @click="handleShowBanner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1709/bf/bfe91441ab865b2ea3.img.jpg_600x330_18c9bfb7.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">远去的恐龙</div>
        <div class="number"><span class="iconfont banner-icon">&#xe67b;</span>34</div>
      </div>
    </div>
    <comm-gallary v-show="show" :imgs="imgs" @close="handleClose"></comm-gallary>
  </div>
</template>
<script>
import CommGallary from 'comm/gallary/Gallary'
export default {
  name: 'Banner',
  data () {
    return {
      show: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1709/bf/bfe91441ab865b2ea3.img.jpg_r_800x800_dc97aa3d.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/20/209869933e4d3c8ba3.img.jpg_r_800x800_8057310e.jpg']
    }
  },
  methods: {
    handleShowBanner () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
  components: {
    CommGallary
  }
}
</script>
<style lang="stylus" scoped>
  .banner {
    position: relative
    overflow: hidden;
    height 0
    padding-bottom 55%
  }
  .banner-img {
    width 100%
  }
  .banner-info {
    position absolute
    bottom 0
    left 0
    right 0
    color #fff
    line-height .6rem
    display flex
    background-image linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
  }
  .banner-title {
    flex 1
    font-size .32rem
    padding 0 .2rem
  }
  .number {
    padding 0 .4rem
    line-height .32rem
    height .32rem
    font-size .24rem
    border-radius .2rem
    margin-top .14rem
    background rgba(0, 0, 0, .8)
    color #fff
  }
  .banner-icon {
    font-size .24rem
  }
</style>
