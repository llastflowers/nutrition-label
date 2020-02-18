import { useState, useEffect } from 'react';
import { getFoods } from '../services/fakeFoodData.js';

const useFoods = (query) => {
  const [foodResults, setFoodResults] = useState([]);
  useEffect(() => {
    if(query !== '') {
      getFoods(query)
        .then(foodResults => setFoodResults(foodResults));
    }
  }, [query]);
  return foodResults;
};

export default useFoods;
