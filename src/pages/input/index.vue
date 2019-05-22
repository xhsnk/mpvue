<template>
  <div>

<i-input :value="title" @change="changName($event)" title="账号：" autofocus placeholder="用户ID" />
<i-input :value="introdu" @change="changShare($event)" title="分享内容" autofocus placeholder="我的分享" />

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      title: "",
      introduc:"",
      }
    },


  components: {
    card
  },
  methods: {
    changName(){
      console.log(event)
      }
  },

  created () {

  }
}
</script>

<style scoped>
</style>
