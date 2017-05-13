<template lang="html">
  <div>
    <router-link to='/'>back to index</router-link>
    <p>逻辑：computed c1依赖于v1（get函数中有log），watch了v2，在其执行函数中log了c1</p>
    <p>思考：我们去更改v1（此时watch还没执行）那么讲道理，c1里的log是不会出现的，但是更改了v2，在watch中log了c1，此时c1添加了对v1的依赖，那么再次更改v1，log是否会出现？</p>
    <p v-show='show'>为什么在computed参与计算后，已经依赖了v1而改变v1时不会重新计算呢？原因在于watcher队列更新时只会更改computed的watcher对象dirty值
      ，并不会显式的调用其get，只有在computed需要被调用时才会调用computedGetter，并有在其watcher.dirty为true才会去重新计算（执行get方法）</p>
    <p>v2:{{v2}}</p>
    <p @click='changeV2'>click change v2</p>
    <p @click='changeV1'>click change v1</p>
    <p @click='showMe'>show me why？</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      v1: 1,
      v2: 1,
      show: false
    }
  },
  computed: {
    c1 () {
      console.log('computed c1')
      return this.v1
    }
  },
  watch: {
    v2 () {
      console.log('watch v2', this.c1)
    }
  },
  methods: {
    changeV1 () {
      this.v1++
      console.log(`change v1 & v1:${this.v1}`)
    },
    changeV2 () {
      this.v2++
    },
    showMe () {
      this.show = !this.show
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
