import mongoose from 'mongoose';

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

mongoose.connect('mongodb://localhost:27017', () => {
  console.log('Ejercicios:');
});
