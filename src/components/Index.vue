<template>
  <div class="hello">
    <h1>vue数据跟踪机制探究</h1>
    <h2>watch computed methods追踪变化的条件</h2>
    <ul>
      <li><router-link :to="{name:'1.1', hash: '#test', query: {name: 'hz'}}">watch初体验</router-link></li>
      <li><router-link to='condition2'>watch computed</router-link></li>
      <li><router-link to='condition3'>computed初体验</router-link></li>
      <li><router-link to='condition4'>computed初始化（不绑定也不参与计算）</router-link></li>
      <li><router-link to='condition5'>computed初始化（不绑定但参与计算）</router-link></li>
      <li><router-link to='condition6'>methods初体验</router-link></li>
      <li><router-link to='condition7'>methods值不变化但追踪值变化是否执行？</router-link></li>
      <li><router-link to='condition8'>methods值不变化但页面更新是否执行？</router-link></li>
    </ul>
    <h2>watch computed methods触发时机机制</h2>
    <ul>
      <li><router-link to='mechanism1'>watch是同步还是异步？</router-link></li>
      <li><router-link to='mechanism2'>watch触发顺序是和绑定顺序相关还是变化顺序相关？</router-link></li>
      <li><router-link to='mechanism3'>computed是同步还是异步？</router-link></li>
      <li><router-link to='mechanism4'>computed相对于watch是同步还是异步？</router-link></li>
      <li><router-link to='mechanism5'>computed执行了但是结果不变是否会重新渲染页面？</router-link></li>
      <li><router-link to='mechanism6'>methods执行了但是结果不变是否会重新渲染页面？</router-link></li>
      <li><router-link to='mechanism7'>methods与filter</router-link></li>
      <li><router-link to='mechanism8'>watch的死循环</router-link></li>
      <li><router-link to='mechanism9'>computed的死循环</router-link></li>
      <li><router-link to='mechanism10'>关于vue数据追踪机制的小结</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li{
  width: 50%;
  margin: 0 auto;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
