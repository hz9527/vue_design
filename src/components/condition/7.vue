<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>methods 依赖值变化(v1,v2.且计算结果只和v2有关)和非依赖值变化(v3)是否会触发methods的执行？</p>
    <p v-show='show'>讲真，这个我还不确定，vue在initMethods中并没有去做其依赖收集，个人感觉可能是在处理vnode时会将其做类似computed方式收集依赖，当然我们看到log
    这并不意味着mthod绑定到页面上有多耗性能，这只是进行了vnode的计算而已，不代表dom被重绘了</p>
    <p>{{method()}}</p>
    <p @click='changeV("v1")'>change v1</p>
    <p @click='changeV("v2")'>change v2</p>
    <p @click='changeV("v3")'>change v3</p>
    <p @click='showMe'>show me why</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 1,
      v3: 1,
      show: false
    }
  },
  methods: {
    method () {
      console.log('exec method', this.v1)
      return this.v2
    },
    changeV (key) {
      this[key]++
    },
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
