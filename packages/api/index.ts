import type { ApiContext } from '@savitri/api'
import { init } from '@savitri/api/server'

const context: Partial<ApiContext> = {
  apiConfig: {
    roles: {
      guest: {
        grantEverything: true
      },
      root: {
        grantEverything: true
      },
    }
  }
}

init({ context }).then(server => {
  server.start()
})
