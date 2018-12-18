<template>
  <div class="header">
    <city-header></city-header>
    <city-search :citys="citys"></city-search>
    <city-list :citys="citys" :hot="hotCitys" :changeItem="changeItem"></city-list>
    <city-alphabet :citys="citys" @change="handleAlphabet"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      citys: {},
      hotCitys: [],
      changeItem: ''
    }
  },
  methods: {
    handleAlphabet (text) {
      this.changeItem = text
    },
    getCityInfo () {
      axios.get('api/citys.json').then(this.handlegetCitySucc)
    },
    handlegetCitySucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.citys = data.citys
        this.hotCitys = data.hotCitys
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
