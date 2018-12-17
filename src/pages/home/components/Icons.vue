<template>
<div class="icons">
  <swiper>
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id" @click="handleClick">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="">
        </div>
        <p class="icon-desc">{{item.title}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'Icons',
  data () {
    return {
      dataList: [
        {
          id: 1001,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票阿斯顿发阿斯顿发'
        },
        {
          id: 1002,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '北京必游'
        },
        {
          id: 1003,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        },
        {
          id: 1004,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
          title: '立减30'
        },
        {
          id: 1005,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          title: '动植物园'
        },
        {
          id: 1006,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          title: '泡温泉'
        },
        {
          id: 1007,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          title: '野生动物园'
        },
        {
          id: 1008,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          title: '文化古迹'
        },
        {
          id: 1009,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          title: '野生动物园'
        },
        {
          id: 1010,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          title: '文化古迹'
        },
        {
          id: 10011,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          title: '野生动物园'
        },
        {
          id: 1012,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          title: '文化古迹'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.dataList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    handleClick () {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
.icons >>> .swiper-container{
  height 0;
  padding-bottom 50%;
}
  .icons{
    margin-top .1rem;
  }
  .icon{
    position relative;
    overflow hidden;
    width 25%;
    float left;
    height 0;
    padding-bottom 25%
  }
  .icon-img{
    position absolute;
    top 0;
    left:0;
    right 0;
    bottom .44rem;
    box-sizing border-box;
    padding .1rem;
  }
  .icon-img-content{
    height 100%;
    display block;
    margin 0 auto;
  }
  .icon-desc{
    height .44rem;
    position absolute;
    bottom 0;
    left 0;
    right: 0;
    line-height .44rem;
    text-align center;
    color $darkTextColor;
    ellipsis()
  }
</style>
