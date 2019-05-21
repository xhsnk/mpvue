<template>
  <div>
      <i-panel>
    <view style="padding: 15px;">精选内容</view>
     </i-panel>
     <i-card style="padding: 15px;" v-for="item in top" :key="item">
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
        {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper2.JPG",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
        {image:"/static/img/2.jpg",introdu:"风靡全球的高效减肥法-HIIT",introduc:"曾几何时，健身的代名词还是[跑步] [举铁]，而现在提到健身，大家都想到的是[HIIT]，HIIT到底是什么？他为何能..."},
        {image:"/static/img/3.jpg",introdu:"想减肥？先来加速你的新陈代谢",introduc:"“瘦子的新陈代谢高，吃得多还长不胖..”新陈代谢到底是什么？如何提升新陈代谢？"},
        {image:"/static/img/4.jpg",introdu:"做个低调的炫“腹”族，你得知道这些！",introduc:"天气渐暖，过不了多久就到了[炫腹]的季节，今天就为大家带来一篇马甲线科普"},
        {image:"/static/img/1.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},
        {image:"/static/img/6.jpg",introdu:"健身圈，有哪些伪科学的常识？",introduc:"健身圈内部也流传有各种谣言，今天就来列举几个常见的"},
        {image:"/static/img/7.jpg",introdu:"就像江城满30°减15°一样，我也有料要给你！",introduc:"建议收藏照做哦"}
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
