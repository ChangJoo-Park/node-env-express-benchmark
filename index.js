'use strict'

const express = require('express')
const compression = require('compression')
const MOCK_DATA = require('./MOCK_DATA.json')

const app = express()

app.use(compression())

app.get('/', (req, res) => {
  res.json(MOCK_DATA);
})

app.listen(3000, () => {
  console.log('Server start on http://localhost:3000')
})