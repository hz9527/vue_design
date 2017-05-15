#### 目录：  
[**vueRouter基本使用**](#vuerouter基本使用)  
[h5history与编程式导航](#h5history与编程式导航)  
[重定向及别名与命名视图](#重定向及别名与命名视图)  

[**vueRouter进阶使用**](#vuerouter进阶使用)  
[路由钩子](#路由钩子)  
[元信息与滚动行为](#元信息与滚动行为)  
[过渡动效与数据获取](#过渡动效与数据获取)  
[异步加载模块](#异步加载模块)  

## vueRouter基本使用
#### 1.引入vue－router与基本配置
[toTop](#目录：)  
1. 类似vuex，先使用Vue.use(vue-router) 再实例化一个路由对象
2. 在注入的组件中使用<view-router></view-router>
3. 在注入实例中传入路由
```JavaScript
// router-conf.js
...
vue.use(vueRouter)
export default new vueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello // path&component is required
    }
  ]
})

// App.vue
...
<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

// main.js
...
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

#### 2.带参路由
[toTop](#目录：)  
在实践中经常使用即在path中使用/:name，对了，并不是只有最后一个可以使用参数，所以这里用动态路由更为贴切
```JavaScript
new vueRouter({
  routes: [
    {
      path: '/user/:userId/detail/:essayId',
      component: Detail
    }
  ]
})
```
> 注： 和嵌套路由一样，这里参数变化并不会使组件重建，而是update，那么意为这组件内的beforeRouteEnter钩子会失效，其实可以使用watch来判断路由的变化  
也可以使用beforeRouteUpdate钩子完成

```JavaScript
watch: {
  $route: (to, from) {
    ...
 }
}
```

#### 3.嵌套路由
[toTop](#目录：)  
一个较为复杂的页面，可以使用嵌套路由来实现一个页面，这样的好处是加载页面依赖的资源将减少，在项目上也能看出页面间的依赖及入口关系，另外在频繁的交互中没必要重载主页面  
比如一个表单页面，点击每一个表单会跳转到填写页，各个填写页都不同，因此可以将这些填写也作为表单页的子路由  
1. 父路由在进入子路由，并不会被销毁
2. 父页面组件内路由钩子将不能通过beforeRouteEnter监听到跳转（父跳子，子跳父，不过刚刚也讲了解决方案）
3. 子路由如果path为／xx则不会拼接父路由，如果不用／则拼接
```JavaScript
routes: [
  path: '/publish',
  component: Publish,
  children: [
    {
      path: '/choosestore', // domain:port/#/choosestore
      component: Child1
    },
    {
      path: 'child', // domain:port/#/publish/child
      component: Child2
    }
  ]
]

```

### h5history与编程式导航
[toTop](#目录：)  
vue-router关于history管理完全参照h5history接口[传送门](../../blob/master/h5history.md)  
我们知道，在vue－router中跳转路由，主要有两种类型，一种是使用<router-link></router-link>，另一种则是使用组件的$router(也可使用router实例)  
几个接口  
1. push在history盏中推入一个路由
2. replace替换当前history纪录
3. go跳转至history的某个追踪
4. back forward
前两个是不使用history，因此需要确定相关参数等，以push为例
```JavaScript
router.push('path')

router.push({name: 'name'})

router.push({name: 'name', params: {userId: id, essayId: essayId}})

router.push({name: 'name', params: {userId: id}, query: {name: 'hz'}})
```

### 重定向及别名与命名视图
[toTop](#目录：)  
1. 什么是重定向？将一个跳转指向另一个跳转，如输入／a后会自动改为／b并跳转至／b路由
2. 什么是别名？将一个跳转行为转化为另一个跳转行为，但是url不变
告诉我，在哪可以买到？  
1. 重定向使用redirect
2. 别名使用alias
3. 两者都是在routes中配置
```JavaScript
routes: [
  {
    path: '/b',
    redirect: '/a' // /a is defined
  },
  {
    path: '/c',
    redirect: {name: 'a'} // name a is defined
  },
  {
    path: '/d',
    redirect: to => {
      console.log(to.name) // c
      return '/a' // sure you can return a object like {name: 'a'}
    }
  },

  {
    path: '/a',
    component: A,
    alias: '/b' // so if url is /b and content is A
  },

  {
    path: '*',
    redirect: '/' // all invalid router will go /
  }
]
```
显然别名比重定向更为友好，但是重定向可以catch到所有不该产生的跳转，可以在routes最后一项将所有重定向到一个页面

## vueRouter进阶使用
### 路由钩子
[toTop](#目录：)  
1. 全局钩子，router实例有一个beforeEach方法，在一个页面跳转行为发生，进入页面前；afterEach，见名知意，因此不存在from与next [go detail](#全局钩子)
2. 路由独享钩子，在routes配置中定义 [go detail](#路由独享钩子)
3. 组件钩子，beforeRouteEnter，beforeRouteUpdate，beforeRouteLevel [go detail](#组件钩子)

#### 全局钩子
[to 路由钩子](#路由钩子)  

#### 路由独享钩子
[to 路由钩子](#路由钩子)  
#### 组件钩子  
[to 路由钩子](#路由钩子)  

### 元信息与滚动行为
[toTop](#目录：)  

### 过渡动效与数据获取
[toTop](#目录：)  

### 异步加载模块
[toTop](#目录：)  

## vueRouterAPI
[toTop](#目录：)  
