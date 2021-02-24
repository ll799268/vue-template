<template>
  <ul>
    <li v-for="item of navList" :key="item.id">
      <p>{{ item.name }}</p>
      <template v-if="item.children">
        <child-list :children="item.children"></child-list>
      </template>
    </li>
  </ul>
</template>

<script>
import arr from '@/mock/treeData'
import { formatToTree } from 'libs/formatArr'
import childList from './Child' 
export default {
  data() {
    return {
      navList: []
    }
  },
  components: {
    childList
  },
  created () {
    this.navList = formatToTree(arr)
  }
}
</script>

<style lang="scss" scoped>
</style>
