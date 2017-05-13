<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>watch是同步还是异步？如果前面你好好听了，这个感觉是在浪费时间，不过我们还是试试吧，毕竟很多人总是很担心watch性能问题</p>
    <p @click='changeV'>click change</p>
  </div>
</template>

<script>
export default {
  data () {
    return {v1: 1}
  },
  watch: {
    v1 () {
      console.log('watch change')
    }
  },
  methods: {
    changeV () {
      this.v1++
      console.log('v1 change')
      this.v1++
      console.log('v1 change again')
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
