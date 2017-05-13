<template lang="html">
  <div>
    <router-link to='Hello'>back to index</router-link>
    <p>watch死循环，道理很简单，watch的执行函数是可以更改state的，比如watch v1在v1中change v2 并watch v2在v2中change v1</p>
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
