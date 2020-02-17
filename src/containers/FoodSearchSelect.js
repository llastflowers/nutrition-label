import React, { useState } from 'react';
import useFoods from '../hooks/useFoods';

const FoodSearchSelect = () => {
  const [query, setQuery] = useState('');
  const foodsList = useFoods(query);
  const foodItem = foodsList.foods.map(food =>
    <li key={food.id}>
      <h2>{food.name}</h2>
    </li>
  );

  return (
    <>
      <form>
        <input type='text' placeholder="Search for a food" value={query} onChange={(event) => setQuery(event.target.value)} />
      </form>
      <ul>
        {foodItem}
      </ul>
    </>
  );
};

export default FoodSearchSelect;
