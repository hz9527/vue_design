<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>类似watch假如computed依赖了一个变量，然后在get函数中change了这个依赖，是否会死循环呢？</p>
    <pre>
    c1 () {
      console.log('computed c1', this.v1)
      this.v1++
      return this.v2 + this.v1
    }
    </pre>
    <p v-show='show'>为什么会造成这种结果呢？又回到了之前的一个问题，computed会在getter时才会执行get，其数据追踪的结果不是去显式的执行get，而是更改其dirty，在下次getter时
    会去查看dirty是否为true，否则直接使用watcher.value所谓缓存吧</p>
    <p>{{c1}}</p>
    <p @click='showMe'>show me why</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 1,
      show: false
    }
  },
  computed: {
    c1 () {
      console.log('computed c1', this.v1)
      this.v1++
      return this.v2 + this.v1
    }
  },
  methods: {
    showMe () {
      this.show = !this.show
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
