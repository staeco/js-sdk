# Stae JS SDK [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

An API client for [municipal.systems](https://municipal.systems) for both Node.js and Browsers

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

// getting a specific 911 callfor San Francisco
const call = await api.place.datumType.datum.findById({
  placeId: 'sf-ca',
  dataTypeId: '911-call',
  datumId: 'abcd-efg'
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

## API List

### Place APIs

- place.find({ options })
- place.findById({ placeId })

#### Data Types

- place.dataType.find({ placeId, options })
- place.dataType.findById({ placeId, dataTypeId })
- place.dataType.values({ placeId, dataTypeId })
- place.dataType.fields({ placeId, dataTypeId })
- place.dataType.export({ placeId, dataTypeId })
- place.dataType.analytics({ placeId, dataTypeId, options })
- place.dataType.datum.find({ placeId, dataTypeId, options })
- place.dataType.datum.findById({ placeId, dataTypeId, datumId })
- place.dataType.insight.find({ placeId, dataTypeId, options })
- place.dataType.insight.findById({ placeId, dataTypeId, insightId })

#### Sources

- place.source.find({ placeId, options })
- place.source.findById({ placeId, sourceId })
- place.source.values({ placeId, sourceId })
- place.source.fields({ placeId, sourceId })
- place.source.export({ placeId, sourceId })
- place.source.analytics({ placeId, sourceId, options })
- place.source.datum.find({ placeId, sourceId, options })
- place.source.datum.findById({ placeId, sourceId, datumId })

### Misc APIs

#### Boundaries

- boundary.find({ options })
- boundary.findById({ boundaryId })

#### Data Types

- dataType.find({ options })
- dataType.findById({ dataTypeId })
- dataType.insight.find({ dataTypeId, options })
- dataType.insight.findById({ dataTypeId, insightId })

#### Sources

- source.find({ options })
- source.findById({ sourceId })
- source.values({ sourceId })
- source.fields({ sourceId })
- source.export({ sourceId, options })
- source.analytics({ sourceId, options })
- source.datum.create({ sourceId, data })
- source.datum.find({ sourceId, options })
- source.datum.findById({ sourceId, datumId })

[downloads-image]: http://img.shields.io/npm/dm/stae.svg
[npm-url]: https://npmjs.org/package/stae
[npm-image]: http://img.shields.io/npm/v/stae.svg

[travis-url]: https://travis-ci.org/staeco/js-sdk
[travis-image]: https://travis-ci.org/staeco/js-sdk.png?branch=master
