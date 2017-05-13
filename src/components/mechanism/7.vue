<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>filter 与 methods有区别吗？答案是有的</p>
    <p>验证方案：method追踪了v1与v2，但是只有v2影响结果，filter计算v2，现在更改v1或v2（更改v1时去掉filter或method）</p>
    <p>filter: {{v2 | a}}</p>
    <p>method: {{method()}}</p>
    <p @click='changeV1'>change v1</p>
    <p @click='changeV2'>change v2</p>
  </div>
</template>

<script>
export default {
  filters: {
    a (v) {
      console.log('filter exec')
      return v + 'filter'
    }
  },
  data () {
    return {
      v1: 1,
      v2: 1
    }
  },
  methods: {
    method () {
      console.log('method exec', this.v1)
      return this.v2
    },
    changeV1 () {
      console.log('v1 change') // 注释这行代码来验证change v1不更改filter
      this.v1++
    },
    changeV2 () {
      this.v2++
    }
  }
}
</script>

<style lang="css">
a{
  display: block;
  height: 50px;
  color: #f55;
  text-decoration-line: none;
  font-size: 20px;
}
</style>
