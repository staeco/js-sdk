/*global it: true, describe: true */
/*eslint no-console: 0*/

import should from 'should'
import createClient from '../src'

describe('createClient', () => {
  it('should construct', async () => {
    const api = createClient({ key: '123' })
    should.exist(api)
    should.exist(api.place.find)
  })
  it('should list places', async () => {
    const api = createClient({ key: '' })

    const { results } = await api.place.find()
    should.exist(results)
  })
  it('should get jers-nj 911 calls', async () => {
    const api = createClient({ key: '' })

    const { results } = await api.place.dataType.datum.find({
      placeId: 'jers-nj',
      dataTypeId: '911-call'
    })
    should.exist(results)
  })
})
