<template>
  <div>

<i-tabs :current="current_scroll" @change="handleChangeScroll">
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
        current_scroll: 'tab1',
        show1: true,
        show2: false,
        show3: false,
        show4: false,
        top1: [
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.1.jpg",introdu:"糖吃多了比油还长胖！危害竟然这么高！",introduc:"高糖的危害，竟然被忽略了这么多年！"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.2.jpg",introdu:"【减肥必读】 GI以及常见食物GI",introduc:"其实，食物的热量不是最该关注的，想要科学的健身，我们一定要知道这样的一个数值--GI指数。"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.3.jpg",introdu:"怕胖吃水果当主食？小心越吃越胖",introduc:"将水果作为减肥代餐，如果选错了水果，可能会越减越胖，有些水果的热量不亚于吃肉，减肥的同学一定要避开！"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/1.4.jpg",introdu:"10种最有效的“刮油”食物，营养师告诉你吃不胖的秘诀",introduc:"对于一个吃货来说，减肥不吃简直是太难受了。但是我们营养师说了，以下这些刮油食物，可以让你不胖反瘦！"},
            ],
        top2: [
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.1.jpg",introdu:"减肥，从了解【体脂率】开始",introduc:"我锻炼了××天为什么一斤没掉？“好不容易减了4斤，吃一顿火锅全回来了”，“怎样才能一个月瘦十斤...”"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.2.jpg",introdu:"减肥路上你到底交了多少智商税？",introduc:"减肥路上这些坑，你到底经历过几个？"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/2.3.jpg",introdu:"不胖但肚子很大？可能是内脏脂肪过高！",introduc:"脂肪主要分为两种，一种是皮下脂肪，另一种是内脏脂肪！"},
            ],
        top3: [
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/3.1.jpg",introdu:"助你练出八块腹肌，夏天大秀身材！",introduc:"很多健身党都有这样的疑问：【为什么我每天至少卷腹100下却看不到腹肌？】"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/3.2.jpg",introdu:"干货练臀经验，避开粗大腿、不翘臀的经验！",introduc:"很多人深蹲一段时间后发现：自己臀部没啥感觉，大腿还练粗了！"},
            ],
        top4: [
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/4.1.jpg",introdu:"运动完，吃垃圾是哦in会怎样？",introduc:"训练苦，训练累，训练的辛酸只有自己懂！如果训练后犒赏自己，来顿美味的垃圾食品会怎样？"},
          {image:"cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/index-img/4.2.jpg",introdu:"涨知识|关于减肥的误区，你中了几个？",introduc:"9道减脂营养早餐，颜值与健康兼具"},       
            ]
      }     
    },
  components: {
    card
  },
  methods: {
    handleChangeScroll  ( detail ) {
      console.log(detail)
        this.current_scroll = detail.mp.detail.key
        if (this.current_scroll === 'tab1'){
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current_scroll === 'tab2'){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.show4 = false;
        }else if(this.current_scroll ==='tab3'){
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
