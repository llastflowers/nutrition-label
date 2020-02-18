import React from 'react';

const FoodResults = ({ foodsList }) => {
  const foodItem = foodsList.map(food => (
    <li key={food.fdcId}>
      <h2>{food.description}</h2>
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

// name.propTypes = {
//   foodsList.PropTypes.array,
// };

export default FoodResults;
