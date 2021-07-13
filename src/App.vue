<template>
  <router-view />
</template>
<script>
import person from 'modules/Person'
export default {
  created () {
    person.login({ userId: 1 })
    console.log(person);
  }
}
</script>
<style lang="scss">

</style>