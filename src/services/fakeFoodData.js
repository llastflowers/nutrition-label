export const getFoods = (query) => {
  return fetch(`https://api.nal.usda.gov/fdc/v1/search?api_key=Na0aHl6TSreWHORgZr5SRQoUg0x3irWOUwnbafoZ&generalSearchInput=${query}`)
    .then(res => res.json())
    .then(json => json.foods);
};

