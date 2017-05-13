<template lang="html">
  <div>
    <router-link to='Hello'>back to index</router-link>
    <div>我们发现computed一般晚于watch执行，那么computed相对于watch是同步还是异步？</div>
    <p>这个问题如何验证呢？回想methods，会在计算vnode时计算，vnode显然是在watch执行完后异步完成的，为什么？因为watch还可以更改值</p>
    <p>method:{{method()}}</p>
    <div>computedD:{{computedD}}</div>
    <div @click='changeD'>changeDate d</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v: 1
    }
  },
  computed: {
    computedD () {
      console.log('computed')
      return this.v
    }
  },
  watch: {
    v (v) {
      console.log('watch change', v)
    }
  },
  methods: {
    method () {
      console.log('method exec')
      return this.v
    },
    changeD () {
      this.v++
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
