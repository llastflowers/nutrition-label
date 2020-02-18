require('dotenv').config();
const fetch = require('node-fetch');

module.exports = require('express').Router()
  .get('/:id', ({params: { id }}, res, next) => {
    fetch(`https://api.nal.usda.gov/fdc/v1/${id}?api_key=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => res.send(json.foodNutrients
      .filter(nutrient => ['Protein',
      'Sugars, total including NLEA',
      'Energy',
      'Cholesterol',
      'Sodium',
      'Total lipid (fat)',
      'Fatty acids, total saturated',
      'Carbohydrate, by difference',
      'Fiber, total dietary']
        .includes(nutrient.nutrient.name))
        .map(nutrient => ({
          name: nutrient.nutrient.name,
          amount: nutrient.amount + ' ' + nutrient.nutrient.unitName
        }))))
        //.some(targetString => nutrient.nutrient.name.includes(targetString)))
    .catch(next);
  });
