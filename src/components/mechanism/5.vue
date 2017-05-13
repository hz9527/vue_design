<template lang="html">
  <div>
    <router-link to='Hello'>back to index</router-link>
    <p>computed重新get了，那么页面会重新渲染吗？妈蛋，这个问题好弱智啊，vue2.0后决定是否重新渲染取决于diff返回的新结果是否变化</p>
  </div>
</template>

<script>
export default {
  created () {
    console.log(2)
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
