import { makeDescription, Schema } from '@savitri/api'

const schema = {
  $id: 'construction',
  properties: {
    name: {
      description: 'Nome',
      type: 'string'
    },
    location: {
      description: 'Localização',
      enum: [
        'rural',
        'urban',
      ],
      s$format: 'select',
      s$translate: true
    },
    address: {
      description: 'Endereço',
      $ref: 'geolocation',
      s$inline: true,
      s$index: 'address_line'
    }
  }
} as const

export type Construction = Schema<typeof schema>
export default makeDescription<typeof schema>(schema, {
  presets: [
    'crud'
  ]
})
