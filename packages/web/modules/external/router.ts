import type { RouterExtension } from '@savitri/web'

export default {
  'external': {
    'check-status': {
      path: '/check-status',
      component: () => import('./views/check-status.vue')
    }
  }
} as RouterExtension
