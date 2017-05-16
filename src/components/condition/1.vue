<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>watch初体验</p>
    <p>使用immediate: true可以使watch在初始化就能执行</p>
    <p @click='changeV1'>v1:{{v1}}  click change v1</p>
    <p @click='changeV'>v2:{{v2}}  click change v1&v2</p>
    <div :style='{"height": "800px"}'>

    </div>
    <div id='test'>
      test
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 1
    }
  },
  watch: {
    v1: {
      immediate: true,
      handler (v, ov) {
        console.log('im watch v1', v, ov)
      }
    },
    v2 (v, ov) {
      console.log('watch v2', v, ov)
    }
  },
  methods: {
    changeV1 () {
      this.v1++
    },
    changeV () {
      this.v1++
      console.log(this.v1, 'v1 has change')
      this.v2++
    }
  },
  created () {
    // console.log(this.$route)
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
