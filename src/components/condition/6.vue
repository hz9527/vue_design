<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>methods初体验</p>
    <p>{{method()}}</p>
  </div>
</template>

<script>
export default {
  methods: {
    method () {
      return 'i am method'
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
