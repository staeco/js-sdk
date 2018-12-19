# stae [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

An API client for [municipal.systems](https://municipal.systems)

## Install

```
npm install stae --save
```

## Examples

```js
import stae from 'stae'

// create a basic readable API client, authed as you
const api = stae.createClient({ key: 'your-account-key-from-municipal.systems' })

// get a list of places available
const { results } = await api.place.find()

// getting 911 calls for San Francisco
const { results } = await api.place.datumType.datum.find({
  placeId: 'sf-ca',
  dataTypeId: '911-call'
})

// getting traffic jams for NYC, with filtering and ordering
const { results } = await api.place.datumType.datum.find({
  placeId: 'nyc-ny',
  dataTypeId: 'traffic jam',
  options: {
    filters: [
      { 'data.severity': { $gte: 0.5 } }
    ],
    orderings: [
      { direction: 'desc', value: { field: 'data.startedAt' } }
    ]
  }
})

// creating a 311 issue for a source
const writer = stae.createClient({ key: 'source-write-key-from-municipal.systems' })
await writer.source.datum.create({
  sourceId: 'source-id-from-municipal.systems',
  data: {
    id: 'example-ticket',
    type: 'litter',
    notes: 'Somebody littered here!',
    status: 'open',
    location: {
      type: 'Point',
      coordinates: [
        -73.989464,
        40.752964
      ]
    }
  }
})
```

[downloads-image]: http://img.shields.io/npm/dm/stae.svg
[npm-url]: https://npmjs.org/package/stae
[npm-image]: http://img.shields.io/npm/v/stae.svg

[travis-url]: https://travis-ci.org/staeco/js-sdk
[travis-image]: https://travis-ci.org/staeco/js-sdk.png?branch=master
