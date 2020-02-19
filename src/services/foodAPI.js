export const getFoods = (query) => {
  return fetch(`http://nutrition-label.herokuapp.com/api/v1/search/${query}`)
    .then(res => res.json());
};

export const getNutrition = (fdcId) => {
  return fetch(`http://nutrition-label.herokuapp.com/api/v1/details/${fdcId}`)
    .then(res => res.json());
};
