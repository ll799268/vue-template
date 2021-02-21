<template>
  <div>
    <input type="text" placeholder="请输入" onkeyup="this.value= this.value.match(/\d+(\.\d{0,2})?/) ? this.value.match(/\d+(\.\d{0,2})?/)[0] : ''" />
  </div>
</template>

<script>
import { pureNum } from 'libs/utils'
export default {
  data() {
    return {
     
    }
  },
  created () {
    console.log(pureNum(21));
  }
}
</script>

<style lang="scss" scoped>

</style>
