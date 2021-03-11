<template>
  <router-view />
</template>

<style lang="scss">

</style>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  }
}
</script>
