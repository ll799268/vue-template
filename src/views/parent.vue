<template>
  <ul>
    <li v-for="item of navList" :key="item.id">
      <p>{{ item.name }}</p>
      <template v-if="item.children">
        <child-list :children="item.children"
          @callback="callback"></child-list>
      </template>
    </li>
  </ul>
</template>

<script>
import arr from '@mock/treeData'
import { formatToTree } from '@libs/formatArr'
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
  methods: {
    callback (val) {
      console.log(val);
    }
  },
  created () {
    this.navList = formatToTree(arr)
  }
}
</script>

<style lang="scss" scoped>
</style>
