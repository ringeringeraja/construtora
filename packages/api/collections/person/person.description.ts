import { makeDescription, Schema } from '@savitri/api'

export type Person = Schema<typeof schema>

const schema = {
  $id: 'person',
  required: [
    'name',
    'document'
  ],
  properties: {
    name: {
      description: 'Name',
      type: 'string'
    },
    type: {
      description: 'Tipo',
      enum: [
        'customer',
        'dealer'
      ]
    },
    document: {
      description: 'Documento',
      type: 'string',
      s$mask: [
        '###.###.###-##',
        '###.###.###/####-#'
      ]
    },
    birthday: {
      description: 'Data de nascimento',
      type: 'string',
      format: 'date'
    },
    address: {
      description: 'Endereço',
      $ref: 'geolocation',
      s$inline: true
    }
  }
} as const

export default makeDescription<typeof schema>(schema, {
  presets: [
    'crud',
    'duplicate'
  ]
})
