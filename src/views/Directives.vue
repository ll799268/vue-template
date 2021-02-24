<template>
  <div ref="container" class="container" v-waterMarker="waterMarker">
    <div class="draggable" v-draggable></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterMarker: { 
        text: '自定义指令版权所有',
        font: '15px Microsoft JhengHei',
        textColor:'rgba(180, 180, 180, 0.4)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    .draggable {
      background: yellowgreen;
      width: 500px;
      height: 500px;
    }
  }
</style>
