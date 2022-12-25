import type { ApiContext } from '@savitri/api'
import { initWithDatabase as init } from '@savitri/api/server'

const context: Partial<ApiContext> = {
  apiConfig: {
    roles: {
      guest: {
        grantEverything: true
      },
      root: {
        grantEverything: true
      },
      customer: {
        grantEverything: true
      }
    },
    beforeWrite(_token, collectionName) {
      const preset: { what: Record<string, any> } = { what: {} }
      const personCollections = [
        'customer'
      ]

      if( personCollections.includes(collectionName) ) {
        preset.what.type = collectionName
      }

      return preset
    }
  }
}

init({ context }).then(server => {
  server.start()
})
