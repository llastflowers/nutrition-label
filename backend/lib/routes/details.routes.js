require('dotenv').config();
const fetch = require('node-fetch');

module.exports = require('express').Router()
  .get('/:id', ({params: { id }}, res, next) => {
    fetch(`https://api.nal.usda.gov/fdc/v1/${id}?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(next);
  });
