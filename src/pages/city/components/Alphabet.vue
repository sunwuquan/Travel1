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
  data () {
    return {
      touchStatus: false
    }
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
  methods: {
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
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
