<template>
  <div ref="container" class="flex-center clearfix">
    <form action="#">
      <input type="search" placeholder="请输入..." name="search" />
    </form>
  </div>
</template>

<script>
import { letterBegin } from 'libs/formatString'
export default {
  data() {
    return {
      str: 'a12'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
