<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>watch能跟踪computed吗？显然是可以的</p>
    <p @click='changeV'>computed c1:{{c1}} click change v1</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1
    }
  },
  computed: {
    c1 () {
      return this.v1
    }
  },
  watch: {
    c1 () {
      console.log('watch computed')
    }
  },
  methods: {
    changeV () {
      this.v1++
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
