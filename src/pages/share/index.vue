<template>
  <div>
    <i-panel >
        <view style="padding: 15px;">社区分享</view>
    </i-panel>
    <i-button @click="toInput" type="success" shape="circle" size="small">分享动态</i-button>
  <i-card style="padding: 10px;" full="true" v-for="item in userShare" :key="item" :title="'@  '+item.title" >
      <view slot="content">{{item.introdu}}</view>   
  </i-card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {     
      userShare: [],    
    }
  },

  methods: {
    toInput(){
      wx.navigateTo({
        url: '../input/main'
      })
    }
  },

  created () {
    const db = wx.cloud.database({ env: 'xhsnk-0d8d1f' })
    db.collection('userShare').get().then(
      res => {
        console.log(res.data)
        this.userShare = res.data
      }
    )

  }
}
</script>

<style scoped>
</style>