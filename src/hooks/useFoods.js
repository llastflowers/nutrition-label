import { useState, useEffect } from 'react';
import { getFoods } from '../services/foodAPI';

const useFoods = (query) => {
  const [foodResults, setFoodResults] = useState([]);
  useEffect(() => {
    if(query !== '') {
      getFoods(query)
        .then(results => setFoodResults(results));
    }
  }, [query]);
  return foodResults;
};

export default useFoods;
