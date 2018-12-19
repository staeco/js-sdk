import '@babel/polyfill'
import meta from './meta.json'
import createBaseClient from 'sutro-client'

export default ({ key, root='https://municipal.systems/', ...rest }={}) => {
  if (typeof key !== 'string') throw new Error('Invalid key option!')
  if (typeof root !== 'string') throw new Error('Invalid base option!')
  const opts = {
    ...rest,
    root,
    simple: true,
    options: { key, ...rest.options }
  }
  return createBaseClient(meta, opts)
}
