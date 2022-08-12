//Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base

import Restaurant from '../Restaurant.js';
//Función que imprima los primeros 10 restaurantes que lleven cocina americana(cousine) ordenados por su nombre alfabéticamente
export default async () => {
  const restaurants = await Restaurant.find(
    {
      cuisine: 'American ',
    },
    {
      name: 1,
    }
  )
    .sort('-name street')
    .limit(10);

  console.log(restaurants);
};
