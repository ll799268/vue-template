<template>
  <div class="container">
    {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  }
};
</script>

<style lang="scss" scoped>
</style>
