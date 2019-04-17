<template>
  <div @click="clickHandle">
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


export default {
  data () {
    return {
      
    }
  },

  components: {
    card
  },

  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style >

</style>
