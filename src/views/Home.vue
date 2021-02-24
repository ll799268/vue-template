<template>
  <div ref="container" class="flex-center clearfix">
    home
  </div>
</template>

<script>
import 'assets/scss/index.scss'
import { countStr } from 'libs/formatString'
export default {
  data() {
    return {
     
    }
  },
  mounted () {
    console.log(countStr('老我的我你老发卡量刚老看到了公老交卡的很快过来哈剋老公'));
  }
}
</script>

<style lang="scss" scoped>

</style>
