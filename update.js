const fs = require('graceful-fs')
const t2 = require('through2')
const request = require('superagent')
const { join } = require('path')

const inp = request.get('https://municipal.systems/v1').pipe(t2())
inp.pipe(fs.createWriteStream(join(__dirname, './src/meta.json')))
inp.pipe(fs.createWriteStream(join(__dirname, './dist/meta.json')))
