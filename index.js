import mongoose from 'mongoose';
import ejercicio1 from './ejercicios/ejercicio1.js';
import ejercicio2 from './ejercicios/ejercicio2.js';
import ejercicio3 from './ejercicios/ejercicio3.js';
import ejercicio4 from './ejercicios/ejercicio4.js';
import ejercicio5 from './ejercicios/ejercicio5.js';
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Se ha conectado a la base de datos 🟢');
});

db.on('connecting', () => {
  console.log('Intentando conectar a la base 🟡');
});

db.on('error', () => {
  console.log('Error en la conexión 🔴');
});

mongoose.connect('mongodb://localhost:27017/Queries', async () => {
  console.log('Ejercicios:');
  // await ejercicio1();
  // await ejercicio2();
  // await ejercicio3();
  // await ejercicio4();
  await ejercicio5();

  /**
   * 1.- Entregue todos los documentos de la colección restaurants
   * 2.- Entregue los campos restaurant_id, name, borough y couisine de todos los documentos
   * 3.- Función que imprima los primeros 5 restaurantes de "Bronx" que se encuentren en la base
   * 4.- Función que imprima los nombres de los restaurantes que tengan al menos una calificación (grade) mayor a 9
   * 5.- Función que imprima los primeros 10 restaurantes que lleven cocina americana(cousine) ordenados por su nombre alfabéticamente
   */
});
