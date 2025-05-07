<template>
  <div>{{txt}}</div>
</template>

<script>
  import { changeToChinese } from '@libs/formatNumber'
  export default {
    data () {
      return {
        txt: ''
      }
    },
    methods: {
      showVal () {
        this.txt = changeToChinese('22512800000')
      }
    },
    mounted () {
      this.showVal()
    }
  }
</script>

<style>

</style>

