// Importar Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto
const PORT = 5000;

// Ruta básica de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! El servidor está funcionando correctamente.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});