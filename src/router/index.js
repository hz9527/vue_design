import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Index'
import condition1 from '@/components/condition/1.vue'
import condition2 from '@/components/condition/2.vue'
import condition3 from '@/components/condition/3.vue'
import condition4 from '@/components/condition/4.vue'
import condition5 from '@/components/condition/5.vue'
import condition6 from '@/components/condition/6.vue'
import condition7 from '@/components/condition/7.vue'
import condition8 from '@/components/condition/8.vue'
import mechanism1 from '@/components/mechanism/1.vue'
import mechanism2 from '@/components/mechanism/2.vue'
import mechanism3 from '@/components/mechanism/3.vue'
import mechanism4 from '@/components/mechanism/4.vue'
import mechanism5 from '@/components/mechanism/5.vue'
import mechanism6 from '@/components/mechanism/6.vue'
import mechanism7 from '@/components/mechanism/7.vue'
import mechanism8 from '@/components/mechanism/8.vue'
import mechanism9 from '@/components/mechanism/9.vue'
import mechanism10 from '@/components/mechanism/10.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/condition1',
      name: '1.1',
      component: condition1,
      meta: 'test'
    },
    {
      path: '/condition2',
      name: '1.2',
      component: condition2
    },
    {
      path: '/condition3',
      name: '1.3',
      component: condition3
    },
    {
      path: '/condition4',
      name: '1.4',
      component: condition4
    },
    {
      path: '/condition5',
      name: '1.5',
      component: condition5
    },
    {
      path: '/condition6',
      name: '1.6',
      component: condition6
    },
    {
      path: '/condition7',
      name: '1.7',
      component: condition7
    },
    {
      path: '/condition8',
      name: '1.8',
      component: condition8
    },
    {
      path: '/mechanism1',
      name: '2.1',
      component: mechanism1
    },
    {
      path: '/mechanism2',
      name: '2.2',
      component: mechanism2
    },
    {
      path: '/mechanism3',
      name: '2.3',
      component: mechanism3
    },
    {
      path: '/mechanism4',
      name: '2.4',
      component: mechanism4
    },
    {
      path: '/mechanism5',
      name: '2.5',
      component: mechanism5
    },
    {
      path: '/mechanism6',
      name: '2.6',
      component: mechanism6
    },
    {
      path: '/mechanism7',
      name: '2.7',
      component: mechanism7
    },
    {
      path: '/mechanism8',
      name: '2.8',
      component: mechanism8
    },
    {
      path: '/mechanism9',
      name: '2.9',
      component: mechanism9
    },
    {
      path: '/mechanism10',
      name: '2.10',
      component: mechanism10
    }
  ]
})
