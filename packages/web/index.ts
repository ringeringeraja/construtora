import { useApp, AppOptions } from '@savitri/web'
import { routes, SvMain } from '@savitri/ui'
import '@savitri/addon-tailwind/boot.css'

import DashboardModule from './modules/dashboard'
import ExternalModule from './modules/external'

const options: AppOptions = {
  routes,
  component: SvMain,
  modules: [
    DashboardModule(),
    ExternalModule()
  ],
  i18n: {
    locale: 'pt_BR',
    messages: {
      pt_BR: {
        ...require('@savitri/i18n-ptbr'),
        ...require('./i18n/pt_BR/index.json')
      }
    }
  },
  menuSchema: {
    'Área do cliente': {
      roles: [
        'root'
      ],
      children: [
        'dashboard-my-constructions'
      ]
    },
    'Geral': {
      roles: [
        'root'
      ],
      children: [
        'dashboard-construction',
        'dashboard-material'
      ]
    },
    'Recursos humanos': {
      roles: [
        'root'
      ],
      children: [
        'dashboard-customer',
        'dashboard-employee',
        'dashboard-geolocation',
      ]
    },
    'Administrativo': {
      roles: [
        'root'
      ],
      children: [
        'dashboard-user'
      ]
    }
  }
}

useApp(options).then(({ app }) => {
  app.mount('#app')
})
