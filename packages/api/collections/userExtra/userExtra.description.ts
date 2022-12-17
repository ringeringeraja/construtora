import { makeDescription, Schema } from '@savitri/api'

export type UserExtra = Schema<typeof schema>

const schema = {
  $id: 'userExtra',
  properties: {
    person: {
      description: 'Pessoa',
      $ref: 'person'
    }
  }
} as const

export default makeDescription<typeof schema>(schema)
