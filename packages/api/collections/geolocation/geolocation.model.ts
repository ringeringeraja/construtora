import { createModel } from '@savitri/api'
import GeolocationDescription from './geolocation.description'

export default createModel(GeolocationDescription, {
  schemaCallback: (schema) => {
    schema.virtual('address_line').get(function() {
      return `${this.city}/${this.state}`
    })
  }
})
