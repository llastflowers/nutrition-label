import React, { useState } from 'react';
import useFoods from '../hooks/useFoods';
import FoodResults from '../components/foodresults/FoodResults';

const FoodSearchSelect = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const foodsList = useFoods(query);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Search for a food by name" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value);}} />
        <button>Search</button>
      </form>
      {foodsList.length > 1 && <FoodResults foodsList={foodsList} />}
    </>
  );
};

export default FoodSearchSelect;
