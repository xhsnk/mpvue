<template>
  <div>

<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="饮食指南"></i-tab>
    <i-tab key="tab2" title="减脂基础"></i-tab>
    <i-tab key="tab3" title="增肌进阶"></i-tab>
    <i-tab key="tab4" title="热门问题"></i-tab>
</i-tabs>
  <view v-if="show1">  
    <i-card style="padding: 15px;" v-for="item in top1" :key="item">
    <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
    <view slot="footer">{{item.introduc}}</view>    
    </i-card>
  </view>
  <view v-if="show2">
     <i-card style="padding: 15px;" v-for="item in top2" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
     <view slot="footer">{{item.introduc}}</view>    
     </i-card>
  </view>
  <view v-if="show3">
     <i-card style="padding: 15px;" v-for="item in top3" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
     <view slot="footer">{{item.introduc}}</view>    
     </i-card>
  </view>
  <view v-if="show4">
     <i-card style="padding: 15px;" v-for="item in top4" :key="item">
     <view slot="content"><image style="width:100%;height:80pt;" :src="item.image" />{{item.introdu}}</view>
     <view slot="footer">{{item.introduc}}</view>    
     </i-card>
  </view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
        current:'tab1',
        show1: true,
        show2: false,
        show3: false,
        show4: false,
        top1: [
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.1.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
          {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.2.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.3.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
          {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.4.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},
            ],
        top2: [
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.1.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
          {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.2.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.3.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
            ],
        top3: [
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/3.1.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
          {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/3.2.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},
            ],
        top4: [
          {name:"健身锻炼",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/4.1.jpg",introdu:"理想的运动时长，应该是多久呢",introduc:"“不运动40分钟以上，就没有减肥效果”吗？这个说法靠谱吗？"},
          {name:"饮食指南",image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/4.2.jpg",introdu:"早餐推荐合辑",introduc:"9道减脂营养早餐，颜值与健康兼具"},       
            ]
      }     
    },
  components: {
    card
  },
  methods: {
    handleChange ( detail ) {
      console.log(detail)
        this.current = detail.mp.detail.key
        if (this.current === 'tab1'){
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current === 'tab2'){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current ==='tab3'){
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
          this.show4 = false;
        }else{
          this.show1 = false;
          this.show2 = false;
          this.show3 = false;
          this.show4 = true;
        }
    }

  },

  created () {

  }
}
</script>

<style scoped>
</style>
