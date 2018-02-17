import Sidebar from './SideBar.vue'
import GDELT from 'src/components/Dashboard/Views/GDELT.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'ti-dashboard',
      path: '/admin/overview'
    },
    {
      name: 'Oceanus',
      icon: 'ti-map-alt',
      path: '/admin/oceanus'
    },
    {
      name: 'People',
      icon: 'ti-user',
      path: '/admin/maps',
      component: Maps
    },
    {
      name: 'Organizations',
      icon: 'ti-briefcase',
      path: '/gdelt/admin'
    },
    {
      name: 'Events',
      icon: 'ti-calendar',
      path: '/gdelt/admin'
    },
    {
      name: 'GDELT',
      icon: 'ti-server',
      path: '/admin/gdelt',
      component: GDELT
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
