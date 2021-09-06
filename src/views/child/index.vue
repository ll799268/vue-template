<template>
  <ul>
    <li v-for="item of children" 
      :key="item.id"
      @click="handleClick(item.id)">
      <p>{{ item.name }}</p>
      <template v-if="item.children">
        <child-list :children="item.children"></child-list>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'childList',
  props: {
    children: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick (id) {
      this.$emit('callback', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    padding-left: 30px;
  }
</style>
