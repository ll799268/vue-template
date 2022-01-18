<template>
  <div>
    <h1 @click="showVal">title</h1>
    <Voice :txt.sync="txt" />
  </div>
</template>

<script>
import Voice from './Voice.vue'
export default {
  data() {
    return {
      txt: '你好，我是小盖'
    }
  },
  components: { Voice },
  methods: {
    showVal () {
      console.log(this.txt);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
