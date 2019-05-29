<template>
  <div>
  <i-panel>
    <view style="padding: 15px;background:#87CEFA;height: 15px;line-height: 15px;font-weight:bold;">精选内容</view>
  </i-panel>
  <i-card style="padding: 10px;" v-for="item in top" :key="item">
    <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
    <view slot="footer">{{item.introduc}}</view>    
</i-card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {  
      top: [],
     
    }
  },

  methods: {
    
  },

  created () {
    const db = wx.cloud.database({ env: 'xhsnk-0d8d1f' })
    db.collection('top').get().then(
      res => {
        console.log(res.data)
        this.top = res.data
      }
    )
  }
}
</script>

<style scoped>
</style>
