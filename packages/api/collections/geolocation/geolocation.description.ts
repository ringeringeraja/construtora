import { makeDescription, Schema } from '@savitri/api'

const schema = {
  $id: 'geolocation',
  strict: true,
  properties: {
    city: {
      description: 'Cidade',
      type: 'string'
    },
    state: {
      description: 'Estado (UF)',
      type: 'string',
      s$mask: '@@'
    },
    zipcode: {
      description: 'Código postal',
      type: 'string',
      s$mask: '#####-###'
    },
    district: {
      description: 'Bairro',
      type: 'string'
    },
    street: {
      description: 'Logradouro',
      type: 'string'
    },
    number: {
      description: 'Número',
      type: 'number'
    },
    address_line: {
      description: 'Linha de endereço',
      type: 'string',
      s$meta: true
    }
  }
} as const

export type Geolocation = Schema<typeof schema>
export default makeDescription<typeof schema>(schema, {
  formLayout: {
    city: {
      span: 4
    },
    state: {
      span: 2
    }
  }
})
