<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>watch触发顺序是和watch相关还是和change的state相关？</p>
    <p>逻辑：watch内分别watch v2 v3 v1 change分别change v3 v1 v2</p>
    <p @click='change'>click change</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 1,
      v3: 1
    }
  },
  watch: {
    v2 () {
      console.log('watch v2')
    },
    v3 () {
      console.log('watch v3')
    },
    v1 () {
      console.log('watch v1')
    }
  },
  methods: {
    change () {
      this.v3++
      this.v1++
      this.v2++
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
