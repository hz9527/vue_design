**vue进阶**
#### 目录
[**基础**](#)  
[关于生命周期](#关于生命周期)  
[关于data](#关于data)  
[关于指令](#关于指令)  
[关于实例化](#关于实例化)  
[关于实例配置项](#关于实例配置项)  

[**动画与过渡**](#)  
[过渡](#过渡)  
[动画](#动画)  

[**关于自定义**](#)  
[自定义标签](#自定义标签)  
[自定义指令](#自定义指令)  
[mixin](#mixin)  

[**关于插件**](#)  

## 基础
### 关于生命周期
1. beforeCreate 此时数据依赖模型还未建立
2. created 此时dom还未挂载
3. mounted 此时dom已挂载，可以访问this.$el了
4. beforeUpdate 对比vnode之前，因此还可以在这操作数据
5. updated 重绘完成，请不要在这操作被vnode追踪的值
6. activated keep-alive 组件激活时调用。
7. deactivated keep-alive 组件停用时调用。
8. beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用
9. destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

关于keepalive  
试想以下场景：一个具有复杂状态的列表页，或许你都无法整理他需要多少状态来维护，如筛选，分页，scroll（当然这只是个简单的例子，毕竟通过vuex，router钩子可以很轻易做到这些），跳转至详情页，再从详情页返回我们希望以上状态恢复（详情页不是子路由）就可以尝试使用keepalive  


### 关于data
### 关于指令
### 关于实例化
### 关于实例配置项

## 动画与过渡
### 过渡
### 动画

## 关于自定义
### 自定义标签
### 自定义指令
### mixin

## 关于插件