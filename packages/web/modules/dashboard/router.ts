import type { RouterExtension } from '@savitri/web'

export default {
  dashboard: {
    'dashboard-home': {
      path: 'home',
      component: () => import('./views/home.vue'),
      meta: {
        title: 'Dashboard',
        icon: 'tachometer-fast-alt'
      }
    }
  }
} as RouterExtension
