<template>
  <div>
    <input type="text" placeholder="请输入" onkeyup="this.value= this.value.match(/\d+(\.\d{0,2})?/) ? this.value.match(/\d+(\.\d{0,2})?/)[0] : ''" />
  </div>
</template>

<script>
import { transform } from 'libs/utils'
export default {
  data() {
    return {
     
    }
  },
  created () {
    // console.log(transform('一万'));
  }
}
</script>

<style lang="scss" scoped>

</style>
