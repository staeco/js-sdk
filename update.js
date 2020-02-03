const fs = require('graceful-fs')
const request = require('superagent')
const { join } = require('path')
const stringify = require('fast-json-stable-stringify')

request.get('https://municipal.systems/v1')
  .then((res) => {
    const content = stringify(res.body)
    fs.writeFileSync(join(__dirname, './src/meta.json'), content)
    fs.writeFileSync(join(__dirname, './dist/meta.json'), content)
  })
