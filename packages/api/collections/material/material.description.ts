import { makeDescription, Schema } from '@savitri/api'

export type Material = Schema<typeof schema>

const schema = {
  $id: 'material',
  strict: true,
  properties: {
    name: {
      description: 'Nome',
      type: 'string'
    },
    type: {
      description: 'Tipo',
      enum: [
        'tool',
      ],
      s$element: 'select',
      s$translate: true
    },
    dealer: {
      description: 'Fornecedor',
      $ref: 'person',
      s$index: [
        'name',
        'document'
      ]
    }
  }
} as const

export default makeDescription<typeof schema>(schema, {
  presets: [
    'crud'
  ]
})
