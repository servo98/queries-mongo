//Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base

import Restaurant from '../Restaurant.js';
export default async () => {
  const restaurants = await Restaurant.find({ borough: 'Bronx' }).limit(5);
  console.log(restaurants);
};
