<template>
  <div>
    home
  </div>
</template>

<script>
import { numberToChinese, changeToChinese } from 'libs/formatNumber'
export default {
  data() {
    return {
     
    }
  },
  created () {
    console.log(numberToChinese(32131.21));
    console.log(changeToChinese('321312312'));
  }
}
</script>

<style lang="scss" scoped>

</style>
