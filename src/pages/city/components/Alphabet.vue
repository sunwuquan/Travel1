<template>
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          :key="item"
          :ref="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleClic">{{item}}</li>
    </ul>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    citys: Object
  },
  computed: {
    letters () {
      const letter = []
      for (let i in this.citys) {
        letter.push(i)
      }
      return letter
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    },
    handleClic (e) {
      this.$emit('change', e.target.innerText)
    }
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
