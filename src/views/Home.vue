<template>
  <div class="warpper">
    <ul>
      <li v-for="(item, index) of items" 
        :key="index">{{ item }}</li>
    </ul>
    <button @click="addItems">add</button>
    <div contenteditable></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      items: {
        a: 1,
        b: 2,
      },
    };
  },
  methods: {
    addItems() {
      this.items.c = 3

      this.$forceUpdate()
      // this.items = Object.assign({}, this.items, {
      //   c: 3
      // })

      // Vue.set(this.items, 'c', 3)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
