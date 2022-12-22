import { makeDescription, Schema } from '@savitri/api'

export type Construction = Schema<typeof schema>

const schema = {
  $id: 'construction',
  properties: {
    name: {
      description: 'Nome',
      type: 'string'
    },
    location: {
      description: 'Localização',
      type: 'array',
      items: {
        enum: [
          'rural',
          'urban',
        ],
      },
      maxItems: 4,
      s$format: 'select',
      // s$translate: true
    },
    address: {
      description: 'Endereço',
      $ref: 'geolocation',
      s$inline: true,
      s$index: 'address_line'
    },
    pictures: {
      description: 'Imagens',
      type: 'array',
      items: {
        $ref: 'file'
      },
      s$accept: [
        'image/*'
      ]
    },
    messages: {
      description: 'Mensagens',
      type: 'array',
      items: {
        $ref: 'message'
      },
      s$inline: true
    }
  }
} as const

export default makeDescription<typeof schema>(schema, {
  presets: [
    'crud'
  ]
})
