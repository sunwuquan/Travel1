<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {id: 1, img: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'},
        {id: 2, img: 'http://img1.qunarzz.com/piao/fusion/1812/2f/49f6152a86eb4502.jpg_750x200_f4841fa3.jpg'},
        {id: 3, img: 'http://img1.qunarzz.com/piao/fusion/1811/f7/72ce947f4dff4c02.jpg_750x200_aa583dba.jpg'},
        {id: 4, img: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper>>>.swiper-pagination-bullet-active{
                 background #fff;
   }
  .wrapper{
    width 100%;
    height 0;
    overflow hidden;
    background #ccc;
    padding-bottom 26.66%
  }
  .swiper-img{
    width 100%;
  }
</style>
