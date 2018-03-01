import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import GDELT from 'src/components/Dashboard/Views/GDELT.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/events',
    component: DashboardLayout,
    redirect: '/events',
	  children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'oceanus',
        name: 'oceanus',
        component: Maps
      }
		]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'GDELT',
        name: 'GDELT',
        component: GDELT
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
