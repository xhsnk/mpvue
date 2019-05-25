<template>
  <div>

<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="饮食指南"></i-tab>
    <i-tab key="tab2" title="减脂基础"></i-tab>
    <i-tab key="tab3" title="增肌进阶"></i-tab>
    <i-tab key="tab4" title="热门问题"></i-tab>
</i-tabs>
  <view v-if="show1"> 选项一</view>
  <view v-if="show2"> 选项二</view>
  <view v-if="show3"> 选项三</view>
  <view v-if="show4"> 选项四</view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
        current: 'tab1',
        show1:false,
        show2:false,
        show3:false,
        show3:false,
      }
    },


  components: {
    card
  },
  methods: {
    handleChange ( detail ) {
      console.log(detail)
        this.current = detail.mp.detail.key,
        if (this.current === 'tanb1'){
          show1 = true,
          show2 = false,
          show3 = false,
          show4 = false
        }else if(this.current === 'tanb2'){
          show1 = false,
          show2 = true,
          show3 = false,
          show4 = false
        }else if(this.current ==='tanb3'){
          show1 = false,
          show2 = false,
          show3 = true,
          show4 = false
        }else(this.current === 'tanb4'){
          show1 = false,
          show2 = false,
          show3 = false,
          show4 = true
        }
    }

  },

  created () {

  }
}
</script>

<style scoped>
</style>
