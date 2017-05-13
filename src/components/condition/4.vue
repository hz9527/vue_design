<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>上个页面我们已经尝试过不绑定computed，那么为什么不使用computed在chang其关联值变化时它还是不能被计算呢？</p>
    <p>原因在于vue在每次在使用computed的get方法时都会去搜集其依赖，在依赖进行set操作后Dep会update然后完成computed的计算</p>
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
