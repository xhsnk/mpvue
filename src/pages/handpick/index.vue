<template>
  <div>
      <i-panel>
    <view style="padding: 15px;">更多精选</view>
     </i-panel>
     <i-card style="padding: 15px;" v-for="item in top" :key="item" :title="item.name">
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
      
      top: [
        {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper2.JPG",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
        {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/food.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"}
            ],
     
    }
  },

  methods: {
    
  },

  created () {
  }
}
</script>

<style scoped>
</style>
