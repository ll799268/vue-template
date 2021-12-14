<template>
  <div>
    <input v-model="txt" />
    <button @click="_speechSynthesisUtterance">播放</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: '你好，我是小盖'
    }
  },
  methods: {
    _speechSynthesisUtterance () {
      let utterThis = new SpeechSynthesisUtterance(this.txt)
      speechSynthesis.speak(utterThis);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
