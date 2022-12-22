import { makeDescription, Schema } from '@savitri/api'

export type Message = Schema<typeof schema>

const schema = {
  $id: 'message',
  properties: {
    name: {
      description: 'Nome',
      type: 'string'
    },
    created_at: {
      description: 'Data e hora',
      type: 'string',
      format: 'date-time'
    }
  }
} as const

export default makeDescription<typeof schema>(schema)
