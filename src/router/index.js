import Vue from 'vue'
import Router from 'vue-router'
import SimulationNew from '@/components/SimulationNew'
import SimulationEdit from '@/components/SimulationEdit'
import SimulationList from '@/components/SimulationList'
import ShelfList from '@/components/ShelfList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simulation-list',
      component: SimulationList
    },
    {
      path: '/new',
      name: 'simulation-new',
      component: SimulationNew
    },
    {
      path: '/shelf',
      name: 'shelf-list',
      component: ShelfList
    },
    {
      path: '/:id',
      name: 'simulation-edit',
      component: SimulationEdit
    },
  ]
})
