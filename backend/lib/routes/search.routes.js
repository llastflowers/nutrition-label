require('dotenv').config();
const fetch = require('node-fetch');

module.exports = require('express').Router()
  .get('/:search', ({ params: { search }}, res, next) => {
    fetch(`https://api.nal.usda.gov/fdc/v1/search?api_key=${process.env.API_KEY}&generalSearchInput=${search}&dataType=Branded`)
    .then(res => res.json())
    .then(json => res.send(json.foods))
    .catch(next);
  });
