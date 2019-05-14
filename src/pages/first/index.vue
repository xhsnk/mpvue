<template>
  <div>
  <i-notice-bar icon="systemprompt" loop>
    {{notice}}湖北大学附近好玩店铺榜来了！
  </i-notice-bar>

<i-grid>
    <i-grid-item v-for="grid in grids" :key="grid" i-class="no-border">
        <i-grid-icon>
            <image :src="grid.image" />
        </i-grid-icon>
        <i-grid-label>{{grid.title}}</i-grid-label>
    </i-grid-item>   
</i-grid>

<i-panel :title="title_name">
  <view style="padding: 15px;"></view>
</i-panel>
    <i-card v-for="item in top" :key="item" :title="item.name"  :thumb="item.image">
      <view slot="content">{{item.introdu}}</view>
      <view slot="footer">{{item.introduc}}</view>
    </i-card>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      title_name:"专题",
      grids:[
        {title:"每日打卡",image:"/static/grid/daka.png"},
        {title:"健身专题",image:"/static/grid/zhuanti.png"},
        {title:"精选分享",image:"/static/grid/jingxuan.png"}
      ],
      top: [
        {name:"jipi",image:"/static/grid/zhuanti.png",introdu:"说明 1",introduc:"说明2"},
        {name:"标题2",image:"/static/grid/zhuanti.png",introdu:"说明 1",introduc:"说明2"}
            ]
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
    wx.cloud.callFunction({ name: 'user' }).then(
      res => {console.log(res)}
    )
    wx.cloud.callFunction({ name: 'input' }).then(
      res => {console.log(res)}
    )  
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

.top-padding {
  padding-top: 50rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.splid {
  margin-top: 10px;
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