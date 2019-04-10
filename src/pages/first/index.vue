np<template>
  <div>
  <i-notice-bar icon="systemprompt" loop>
    {{notice}}湖北大学附近好玩店铺榜来了！
  </i-notice-bar>
<i-grid i-class="no-border">
   <i-grid-item v-for="item in food" :key="item" i-class="no-border">
     <i-grid-label>{{item}}</i-grid-label>
     </i-grid-item>
</i-grid>
  
<i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/food.png" />
        </i-grid-icon>
        <i-grid-label>饮食店</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/shipin.png" />
        </i-grid-icon>
        <i-grid-label>饰品店</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/furit.png" />
        </i-grid-icon>
        <i-grid-label>水果店</i-grid-label>
    </i-grid-item>
</i-grid>
  <i-grid i-class="no-border">
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/happy.png" />
        </i-grid-icon>
        <i-grid-label>娱乐店</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/yaopin.png" />
        </i-grid-icon>
        <i-grid-label>药品店</i-grid-label>
    </i-grid-item>
    <i-grid-item i-class="no-border">
        <i-grid-icon>
            <image src="/static/grid/other.png" />
        </i-grid-icon>
        <i-grid-label>更多</i-grid-label>
    </i-grid-item>
</i-grid> 
<i-panel title="湖大附近精选店铺推荐">
    <view style="padding: 15px;"></view>
</i-panel>

<view v-for="item in shop" :key='item' class="top-padding">
 <i-card  :title="item.name" :extra="item.type">
    <view slot="content">{{item.tuijian}}</view>
    <view slot="footer">{{item.introduction}}</view>
</i-card>
</view>


   <i-card title="布辣格" extra="饮食店" thumb="/static/card/bulage.jpg">
    <view slot="content">推荐小吃：麻辣烫加金针菇、土豆、等等</view>
    <view slot="footer">麻辣烫是真的好吃!</view>
</i-card>


<i-card title="宝赞生煎" extra="饮食店" thumb="/static/card/baozan.jpg">
    <view slot="content">招牌：虾仁生煎</view>
    <view slot="footer">生煎满口留香！</view>
</i-card>
<i-card title="芝士焗饭" extra="饮食店" thumb="/static/card/zhishifan.jpg">
    <view slot="content">招牌：芝士焗饭</view>
    <view slot="footer">我也不知道写什么了</view>
</i-card>
<i-card title="山道" extra="健身店" thumb="/static/card/shandao.jpg">
    <view slot="content">推荐：健身锻炼</view>
    <view slot="footer">在夏天来临之前给自己一个美美的身材吧！</view>
</i-card>
<i-card title="台湾饭团" extra="饮食店" thumb="/static/card/fantuan.jpg">
    <view slot="content">招牌：原味饭团</view>
    <view slot="footer">饭团简直不要更好吃！</view>
</i-card>
<i-card title="一点点" extra="饮食店" thumb="/static/card/yidiandian.jpg">
    <view slot="content">招牌：奶茶</view>
    <view slot="footer">风靡全国的奶茶店！但是我不觉得好喝...</view>
</i-card>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png',
        notice:"数据绑定", 
        food:['煎饼果子', '臭豆腐', '香浓奶茶', '热干面', '原汤面' ]
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

   created () {
    const db = wx.cloud.database({ env: 'xhsnk-0d8d1f' })
    db.collection('shop').get().then(
      res => {
        console.log(res.data)
        this.shop = res.data
      }

 
    )
  }
}
</script>

<style scoped>
div >>> .no-border {
  border-width: 0pt;
}
div >>> .no-border {
  border-width: 0pt;
}

.top-padding {
  padding-top: 50rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
np