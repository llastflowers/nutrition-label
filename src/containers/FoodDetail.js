import React from 'react';
import { useParams } from 'react-router-dom';
import useNutrition from '../hooks/useNutrition';

const FoodDetail = () => {
  const { id } = useParams();
  const nutritionList = useNutrition(id);
  const nutrientItem = nutritionList.map(({ fdcId, name, amount }) => (
    <li key={fdcId}>
      <strong>{name}</strong>: {amount}
    </li>
  )
  );

  return (
    <>
      <ul>
        {nutrientItem}
      </ul>
    </>
  );
};

export default FoodDetail;
