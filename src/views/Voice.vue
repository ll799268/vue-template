<template>
  <div>
    <input v-model="txtIp" />
    <button @click="_speechSynthesisUtterance">播放</button>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      txtIp: this.txt
    }
  },
  watch: {
    txtIp (newVal) {
      this.$emit('update:txt', newVal)
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
