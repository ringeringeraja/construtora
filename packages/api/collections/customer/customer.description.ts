import { makeDescription } from '@savitri/api'
export { Person as Customer } from '../person/person.description'

export default makeDescription<unknown>({}, {
  $id: 'customer',
  alias: 'person'
})
