import { makeDescription } from '@savitri/api'
export { Person as Employee } from '../person/person.description'

export default makeDescription({
  $id: 'employee',
  alias: 'person'
})
