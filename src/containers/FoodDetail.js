import React from 'react';
import { useParams } from 'react-router-dom';
import useNutrition from '../hooks/useNutrition';

const FoodDetail = () => {
  // const [fcdId, setFdcId] = useState('');
  const { id } = useParams();
  const nutritionList = useNutrition(id);
  
  return (
    <>
      {JSON.stringify(nutritionList)}
    </>
  );
};

export default FoodDetail;
