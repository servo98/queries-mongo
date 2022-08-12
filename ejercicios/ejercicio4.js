//Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base

import Restaurant from '../Restaurant.js';

export default async () => {
  const restaurantsScoreGreatherNine = await Restaurant.find(
    { grades: { $elemMatch: { score: { $gt: 9 } } } },
    { name: 1 }
  );

  console.log(restaurantsScoreGreatherNine.length);
};
