### watch computed methods追踪变化的条件
#### 1.computed
基本使用
```JavaScript
computed: {
  filterList () {
    return this.list.filter(item => ...).sort((pre, next) => ...)
  }
}
```
> 当list或sort条件，filter条件发生变化computed会被重新计算并渲染在页面中

当computed未被用于计算，其依赖变化是否会引起computed get函数执行？
> 当computed未参与计算时，其依赖变化并不会执行get函数

当computed不绑定在模版中但参与计算其依赖变化是否执行get函数
> 当computed仅参与计算，依赖变化并不会导致其执行get计算，除非执行了其参与计算的部分

#### 2.watch
基本使用
```JavaScript
watch: {
  v1: {
    immediate: true,
    handler () {...}
  },
  v2 (v, ov) {...}
}
```
watch能watch computed吗？
> 能

#### 3.methods
methods同样能绑定到，并且在每次更新都会执行，即使执行结果一致

### 总结
computed（参与计算），watch，methods（绑定到模版中），都具备依赖收集能力，即依赖变量发生变化都会引发相应变化，具体表现不同，欲知后事请看下面
