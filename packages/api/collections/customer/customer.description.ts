import { makeDescription } from '@savitri/api'
export { Person as Customer } from '../person/person.description'

export default makeDescription({
  $id: 'customer',
  alias: 'person'
})
