<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [
        {
          id: '10001',
          title: '大连圣亚海洋世界',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          desc: '北京八达岭长城'
        },
        {
          id: '10002',
          title: '故宫',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          desc: '北京八达岭长城'
        },
        {
          id: '10003',
          title: '渔阳滑雪场',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/71/71ace1aa7d971212a3.water.jpg_200x200_9638020d.jpg',
          desc: '北京八达岭长城'
        },
        {
          id: '10004',
          title: '北京乐多奇幻乐园',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1608/5c/5c30160572493ba9a3.water.jpg_200x200_8ded77a0.jpg',
          desc: '北京八达岭长城'
        },
        {
          id: '10005',
          title: '远方的恐龙',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
          desc: '北京八达岭长城北京八达岭长城北京八达岭长城北京八达岭长城北京八达岭长城北京八达岭长城北京八达岭长城北京八达岭长城'
        },
        {
          id: '10006',
          title: '温泉度假村',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_200x200_8da8cebe.jpg',
          desc: '北京八达岭长城'
        },
        {
          id: '10007',
          title: '长城',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          desc: '北京八达岭长城'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title{
    margin-top:.2rem;
    line-height .8rem;
    background #eee;
    text-indent .2rem;
  }
  .item{
    display flex;
    height 2.2rem;
    overflow hidden;
  }
  .item-img{
    width 2rem;
    height 2rem;
    padding .1rem;
  }
  .item-info{
    flex 1;
    min-width 0;
    padding .1rem;
  }
  .item-title{
    font-size .32rem;
    line-height .54rem;
    ellipsis()
  }
  .item-desc{
    margin-top .16rem;
    line-height .4rem;
    color #ccc;
    ellipsis()
  }
  .item-button{
    background #ff9300;
    padding 0 .2rem;
    line-height .44rem;
    border-radius .06rem;
    margin-top .2rem;
    color #fff;
  }
</style>
