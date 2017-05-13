<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p v-show='show > 0'>不知道讲到这你是否对vue的数据追踪机制有了一定了解呢？</p>
    <p v-show='show > 1'>意不意外，惊不惊喜？</p>
    <p v-show='show > 2'>相信这些思考能给你日常编程带来一定的思考，如computed watch methods filter性能的区别与执行机制，对其使用场景也有了新的认识吧？</p>
    <p v-show='show > 3'>好吧，回到PPT，皮皮虾，我们走</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: 0,
      conf: [2000, 2000, 2000, 10000, 1000]
    }
  },
  mounted () {
    this.showMe()
  },
  methods: {
    showMe () {
      if (this.show < 4) {
        setTimeout(() => {
          this.show++
          this.showMe()
        }, this.conf[this.show])
      }
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
