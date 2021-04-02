<template>
  <div class="container">
    <ul>
      <li v-for="item in list"
        :key="item.id"
        @click="toLink(item.id)">
        第{{ item.id + 1 }}条</li>
    </ul>
  </div>
</template>

<script>
import { deepClone } from 'libs/formatObject'
export default {
  data() {
    return {
      list: [
        {
          id: 0,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      arr: [1, 2, 3]
    }
  },
  created () {
    let arr1 = []
    deepClone(this.arr, arr1)
    arr1.pop()

    console.log('arr value' + this.arr);
    console.log('arr1 value' + arr1);
  },
  mounted () {
    setTimeout(() => {
      this.list[0].id = 11
    }, 1000)
  },
  methods: {
    toLink (index) {
      this.$router.push('/hrefRouter/' + index)
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    ul {
      li {
        line-height: 50px;
        background: red;
        margin-bottom: 10px;
      }
    }
  }
</style>
