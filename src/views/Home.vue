<template>
  <div ref="container" class="flex-center clearfix">
    <form action="#">
      <input type="search" placeholder="请输入..." name="search" />
    </form>
  </div>
</template>

<script>
import { getStyle } from 'libs/handleElement'
export default {
  data() {
    return {
      str: true
    }
  },
  created () {
    console.log(getStyle(document.body, 'font-size'));
  }
}
</script>

<style lang="scss" scoped>

</style>
