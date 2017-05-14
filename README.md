# vue_design

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

看会儿笔记？  
[vue](#vue)  
[vuex初体验](./vuex.md)  
[vueRouter初体验](./vuerouter.md)  
[vueTouch初体验](./vuetouch.md)

## vue
#### 大纲
![](./file/vue.png)  
#### initState
![](./file/initState.png)  
#### dep,definedProperty,watcher如何工作的？
![](./file/set.png)  
> 以上细节仅供参考，但是大致原理如上，确实不太清楚为什么每次get一个computed都需要重新收集依赖，可能是有些细节没注意到吧
