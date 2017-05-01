<template lang="html">
  <div>
    <router-link to='Hello'>back to index</router-link>
    <div>computed相对于watch是同步还是异步？</div>
    <p>在跟踪数据时如果watch与computed是异步的话那么在watch computed变化会在后一节拍才能watch到变化，
      watch执行顺序又和其watch顺序相关，那么我们就先watch computed然后看是否在后一个watch后执行</p>
      <p>那么为什么默认先执行watch再执行computed？因为在跟踪数据变化时我们一般会在watch内操作数据（意味着发布队列会变化，那么可能造成多次计算computed，
        毕竟作者的初心是computed做多个值聚合计算，在此期间只是读而不写,即使写了也不会重新放入发布队列）</p>
      <p>在每一次tick中computed只会计算一次（除非watch了它并在watch中再次操作）后续get操纵是不会重新调用方法，而是直接返回缓存值</p>
      <p>watch就没这么幸运了，因此watch更容易引起死循环</p>
    <div>computedD:{{computedD}}</div>
    <div @click='changeD'>changeDate d</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      d: 1
    }
  },
  computed: {
    computedD () {
      console.log('computed')
      return this.d
    }
  },
  watch: {
    computedD () {
      console.log('watch computed')
    },
    d (v) {
      console.log('watch change', v)
    }
  },
  methods: {
    changeD () {
      this.d++
      console.log('change')
      this.d++
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
