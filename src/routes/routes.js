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
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
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
