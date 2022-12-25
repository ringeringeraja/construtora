import { makeDescription, Schema } from '@savitri/api'

export type Construction = Schema<typeof schema>

const schema = {
  $id: 'construction',
  properties: {
    name: {
      description: 'Nome',
      type: 'string'
    },
    customer: {
      description: 'Customer',
      $ref: 'customer',
      s$index: 'name'
    },
    location: {
      description: 'Localização',
      enum: [
        'rural',
        'urban',
      ],
      maxItems: 4,
      s$element: 'select',
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
      s$inline: true,
      s$maxDepth: 0
    }
  }
} as const

export default makeDescription<typeof schema>(schema, {
  layout: {
    name: 'grid',
    options: {
      title: 'name',
      picture: 'pictures'
    }
  },
  presets: [
    'crud',
    'duplicate'
  ]
})
