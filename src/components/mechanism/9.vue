<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    test
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
