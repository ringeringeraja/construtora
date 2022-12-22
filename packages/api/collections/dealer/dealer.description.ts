import { makeDescription } from '@savitri/api'
export { Person as Dealer } from '../person/person.description'

export default makeDescription({
  $id: 'dealer',
  alias: 'person'
})
