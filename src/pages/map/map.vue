<template>
  <div style="height:100%;">
 <map
      id="map"
      longitude="114.347997"
      latitude="30.571331"
      scale="14"
      :controls="controls"
      @controltap="controltap($event)"
      :markers="markers"
      @markertap="markertap($event)"
      :polyline="polyline"
      @regionchange="regionchange($event)"
      show-location
      style="width: 100%; height: 100%;"
    ></map>  
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      markers: [{
      iconPath: 'cloud://xhsnk-0d8d1f.7868-xhsnk-0d8d1f/Img/map.png',
      id: 0,
      latitude: 30.571331,
      longitude: 114.347997,
      width: 50,
      height: 50
    }],
    }
  },

  components: {
    card
  },

  methods: {
        regionchange(event) {
        console.log(event)
      },
      markertap(event) {
        console.log(event)
      },
      controltap(event) {
        console.log(event)
      }

  },

  created () {
    // let app = getApp()
  }
}
</script>

<style >
body,html{height:100%}
</style>
