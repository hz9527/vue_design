#### 目录
[**vueRouter基本使用**](#vuerouter基本使用)  
[h5history与编程式导航](#h5history与编程式导航)  
[重定向及别名与命名视图](#重定向及别名与命名视图)  

[**vueRouter进阶使用**](#vuerouter进阶使用)  
[路由钩子](#路由钩子)  
[元信息与滚动行为](#元信息与滚动行为)  
[过渡动效与数据获取](#过渡动效与数据获取)  
[异步加载模块](#异步加载模块)  

[**vueRouterAPI**](#vuerouterapi)  
[routerlink与routerview标签](#routerlink与routerview标签)  
[router路由对象（实例）与route路由信息对象](#router路由对象（实例）与route路由信息对象)  
[构造函数配置](#构造函数配置)

## vueRouter基本使用
#### 1.引入vue－router与基本配置
[toTop](#目录)  
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
[toTop](#目录)  
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
[toTop](#目录)  
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
[toTop](#目录)  
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
[toTop](#目录)  
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
[toTop](#目录)  
1. 全局钩子，router实例有一个beforeEach方法，在一个页面跳转行为发生，进入页面前；afterEach，见名知意，因此不存在from与next [go detail](#全局钩子)
2. 路由独享钩子，在routes配置中定义 [go detail](#路由独享钩子)
3. 组件钩子，beforeRouteEnter，beforeRouteUpdate，beforeRouteLevel [go detail](#组件钩子)

#### 全局钩子
[to 路由钩子](#路由钩子)  
beforeEach与afterEach将作为全局的路由钩子，这也意味着每次路由跳转都将执行钩子内的代码，包括修改参数和父子路由的跳转
1.beforeEach，三个参数，to from next，to与from都是跳转对象，即route（就是那个可以访问name params query的对象而不是可以push的路由对象）
```JavaScript
var router = new vueRouter({
  routes: [
    ...
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'xx') {
    ...
  }
  ...
  next()
})
```
顺便提一下，next到底是个啥？就像express中的next，在责任链模式中承担将一个行为交给责任链中下一个选手处理  
> next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。  
next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。  
next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。  
next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。  
**确保要调用 next 方法，否则钩子就不会被 resolved。**

2.afterEach，一个参数route，此时路由跳转已经完成，因此并没有from，to，next，可以理解为to
#### 路由独享钩子
[to 路由钩子](#路由钩子)  
无需多言，直接上代码
```JavaScript
routes: [
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    beforeEnter: (to, from, next) => {
      ... //参考beforeRouteEnter
    }
  }
]
```
#### 组件钩子  
[to 路由钩子](#路由钩子)  
1. beforeRouteEnter，参数to， from， next，注此时组件还没创建，因此访问this并不是组件
2. beforeRouteUpdate，参数to， from， next，可以访问this，比较适合参数变化，父页面使用
3. beforeRouteLeave，参数to， from， next，可以访问this，比较适合在跳转前需要将一些状态保存给vuex的场景
理解了上面，组件路由钩子应该分分钟就能弄明白，不过还是以比较特殊的beforeRouteEnter为例吧  
```JavaScript
beforeRouteEnter (to, from, next) => {
  if (to.name === 'detail') {
    next(vm => { // next内函数将在created时执行
      vm.list = this.getVuexList
    })
  } else {
    next() // do`t forget exec next
  }
}
```

### 元信息与滚动行为
[toTop](#目录)  
先说滚动行为吧，这个看起来还是很有用的，我们将滚动行为，这个钩子(scrollBehavior)位于配置项中  
```JavaScript
new vueRouter({
  routes:[
    ...
  ],
  scrollBehavior (to, from, savedPosition) {
    ...
  }
})
```
**scrollBehavior钩子如何使用？**  
需要返回一个定位信息或锚点描述
```JavaScript
return {x: 0, y: 100}
return {selector: '#floor3'}
return savedPosition
```
**什么是savedPosition？**  
在history中会对历史跳转的页面存储跳转是页面的位置（scrollTop），因此只适合popState操作，如点击浏览器前进或返回按钮，因此对它的判断是不准确的，因为我们也不知道to的route是否存在于history中。举个 :chestnut:  
```JavaScript
new vueRouter({
  routes: [
    ...
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else if (savedPosition) {
      return savedPosition
    } else {
      if (to.name === 'list' && from.name === 'essay') {
        return {x: 0, y: 100}
      } else {
        return {x: 0, y: 0}
      }
    }
  }
})
```
**元信息是什么鬼？**  
虽然在配置项中用meta表示，但是暂时还没弄明白和html meta有啥关系，主要是对html meta也不太了解吧。不过可以作为一个标示来使用。  
比如在某一些标识下我们需要做一些行为，另一些标识做另一些行为，比较常见得是，有写页面不需要用户登录，有些需要。  
结合页面滚动，我们甚至可以把滚动信息存储在meta中  
> 一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航钩子中的 route 对象）的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。

```JavaScript
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // meta: {requiresAuth: true}
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```
这样看来其实元信息可以作为跳转配置，在路由钩子中检查元信息，对于不同的元信息做不同的行为控制，这样更有利于代码的维护性，比如原来是判断name字段，根据name来完成不同的行为，这种判断显然交给meta对象更为合理，这样我们要修改行为不需要去更改逻辑代码，只需要更改配置代码即可

### 过渡动效与数据获取
[toTop](#目录)  

### 异步加载模块
[toTop](#目录)  

## vueRouterAPI
[toTop](#目录)  
### routerlink与routerview标签
### router路由对象（实例）与route路由信息对象
### 构造函数配置
