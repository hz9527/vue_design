### watch computed methods触发时机机制
watch将会在依赖set后的下一次事件循环中执行，而vnode会在watch执行后的下一次时间循环中重新计算，那么这个过程中可能就执行了computed和methods

#### watch
watch执行顺序和其依赖变化顺序无关，而是和其在watch中声明的顺序相关

#### computed
computed只有在其参与计算是才会执行getter，而只有其watcher dirty为true才会重新执行get函数

#### methods
在参与vnode计算就会执行

#### 死循环
watch可能引发死循环，而methods及computed不会，原因是
1. 在vnode计算过程中会停止dep队列notify方法的执行，从而将改变放在下次事件循环。
2. computed会在每次evaluate都会清空依赖，并重新收集依赖，以使得每次依赖只能在上一轮事件循环中起作用（意味着在computed中计算依赖并不会在本轮事件循环中对其update）

### 总结
vue在底层使用过Watcher实现订阅事件的发布，通过Dep实现订阅事件，通过代理state（data，props，computed等）的get 与set行为来使得Dep与Watcher的执行  
computed与watch在底层都封装了Watcher对象以实现其数据追踪，因此不必担心watch性能
