import { useState, useEffect } from 'react';
import { getNutrition } from '../services/foodAPI';

const useNutrition = (fdcId) => {
  const [nutritionResults, setNutritionResults] = useState([]);
  useEffect(() => {
    getNutrition(fdcId)
      .then(results => setNutritionResults(results));
  }, [fdcId]);
  return nutritionResults;
};

export default useNutrition;
