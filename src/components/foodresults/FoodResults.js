import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FoodResults = ({ foodsList }) => {
  const foodItem = foodsList.map(food => (
    <li key={food.fdcId}>
      <Link to={`/${food.fdcId}`}>
        <h2>{food.description}</h2>
      </Link>
      <h5>{food.brandOwner}</h5>
    </li>
  )
  );

  return (
    <>
      <ul>
        {foodItem}
      </ul>
    </>
  );
};

FoodResults.propTypes = {
  foodsList: PropTypes.array
};

export default FoodResults;
