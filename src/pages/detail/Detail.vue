<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="ddadf"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/DetailHeader.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
  .ddadf {
    height 50rem
  }
</style>
