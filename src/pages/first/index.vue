<template>
  <div>
  <i-notice-bar icon="systemprompt" loop>
    {{notice}}燃烧我的卡路里！！
  </i-notice-bar>
  <swiper
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
     >
    <block v-for="img in imgUrls" :key="img">
      <swiper-item>
        <image :src="img" style="width: 100%" />
      </swiper-item>
    </block>
  </swiper>


<i-grid>
    <i-grid-item i-class="no-border" @click="talk">
        <i-grid-icon>
            <image src="cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/daka.png" />
        </i-grid-icon>
        <i-grid-label>每日打卡</i-grid-label>
    </i-grid-item>   
    <i-grid-item i-class="no-border" @click="chang">
        <i-grid-icon>
            <image src="cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/zhuanti.png" />
        </i-grid-icon>
        <i-grid-label>精选内容</i-grid-label>
    </i-grid-item>   
    <i-grid-item i-class="no-border" @click="toShare">
        <i-grid-icon>
            <image src="cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/jingxuan.png" />
        </i-grid-icon>
        <i-grid-label>社区分享</i-grid-label>
    </i-grid-item>   
</i-grid>
<i-panel>
<view style="padding: 15px;background: #ADD8E6;margin-top: 10px;">分类专题精选</view>
</i-panel>
     
<i-card style="padding: 15px;" v-for="item in top" :key="item" :title="item.name">
    <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
    <view slot="footer">{{item.introduc}}</view>    
</i-card>
<i-button @click="chang" type="success" shape="circle">更多精选</i-button>  
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      title_name:"专题",
      top: [
        {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper2.JPG",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
        {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/food.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"}
            ],
      imgUrls: [
        'cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper1.JPG',
        'cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper2.JPG',
        'cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/swiper3.JPG'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
    

    }
  },
  
  components: {
    card
  },
  

  methods: {
   chang(){
      wx.navigateTo({
        url: '../handpick/main'
      })
   },
   talk(){
      wx.showModal({
      title: '提示',
      content: '该功能暂未实现，敬请期待',
      success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
     })
  },
  toShare(){
    wx.navigateTo({
        url: '../share/main'
      })
  }
},
   created () {
  }
}
</script>

<style scoped>
div >>> .no-border {
  height: 55pt;
  border-width: 0pt;
}
div >>> .no-border {
  border-width: 0pt;
}

.splid {
  margin-top: 100pt;
}
</style>