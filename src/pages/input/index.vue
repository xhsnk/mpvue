<template>
<div>
  <i-panel title="分享动态">
    <i-input :value="title" @change="changeName($event)" title="账号" autofocus placeholder="用户ID" maxlength="20" />
    <i-input :value="introdu" @change="changeShare($event)" title="分享内容" placeholder="我的分享" maxlength="60" />
  </i-panel>
  <i-button @click="handleClick()">分享</i-button>
</div>
</template>

<script>
import card from '@/components/card';

export default {
  data () {
    return {
      title: "",
      introdu:""
      }
    },
  components: {
    card
  },
  methods: {
    changeName (event) {
      console.log(event)
      this.title = event.mp.detail.detail.value
    },
    changeShare(event){
      console.log(event)
      this.introdu = event.mp.detail.detail.value
    },
    handleClick(){
        if(this.title && this.introdu){
        let event = {
            title: this.title,
            introdu:this.introdu
        }
        wx.cloud.callFunction({ name: 'new-share' , data:event}).then(
          res => {
              console.log(res)
             }
         )
        wx.showModal({
            title: '提示',
            content: '分享成功',
       
          })
        }else{
        wx.showModal({
            title: '提示',
            content: '分享成功',
          })
        }
      } 
  },

  created () {

  }
}
</script>

<style scoped>
</style>
