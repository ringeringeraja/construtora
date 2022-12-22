import { makeDescription, Schema } from '@savitri/api'

export type Proposal = Schema<typeof schema>

const schema = {
  $id: 'proposal',
  properties: {
    customer: {
      description: 'Cliente',
      $ref: 'person'
    }
  }
} as const

export default makeDescription<typeof schema>(schema)
