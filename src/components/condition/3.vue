<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>computed初体验</p>
    <p>computed c1:{{c1}}</p>
    <p @click='changeV'>change v</p>
    <p @click='changeV3'>change v3</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 2,
      v3: 1
    }
  },
  computed: {
    c1 () {
      console.log('computed c1', this.v3)
      return this.v1 + 3
    },
    c2 () {
      console.log('computed c2')
      return this.v2
    }
  },
  methods: {
    changeV () {
      this.v1++
      this.v2++
    },
    changeV3 () {
      this.v3++
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
