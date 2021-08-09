<template>
  <div class="warpper">
    <p>hours: {{ timer.hours }}</p>
    <p>minutes: {{ timer.minutes }}</p>
    <p>seconds: {{ timer.seconds }}</p>
    <p>{{ timer.createTimer }}</p>
  </div>
</template>

<script>
import { waitPayTime } from '../libs/formatDate'
export default {
  data() {
    return {
      time: '2021-08-09 09:53:30',
      timer: {}
    };
  },
  created() {
    this.timer = waitPayTime(this.time)
  }
};
</script>

<style lang="scss" scoped>
</style>
