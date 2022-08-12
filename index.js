import mongoose from 'mongoose';
import ejercicio1 from './ejercicios/ejercicio1.js';

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
  await ejercicio1();
  /**
   * 1.- Entregue todos los documentos de la colección restaurants
   */
});
