<template>
  <div>

<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="饮食指南"></i-tab>
    <i-tab key="tab2" title="减脂基础"></i-tab>
    <i-tab key="tab3" title="增肌进阶"></i-tab>
    <i-tab key="tab4" title="热门问题"></i-tab>
</i-tabs>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
        current: 'tab1'
      }
    },


  components: {
    card
  },
  methods: {
    handleChange ( detail ) {
      console.log(detail)
        this.current = detail.mp.detail.key
    }
  },

  created () {

  }
}
</script>

<style scoped>
</style>
