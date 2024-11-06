// Importar Express y el módulo OS
const express = require('express');
const os = require('os');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto
const PORT = 5000;

// Función para obtener la IP local
const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces();
  for (let interfaceName in interfaces) {
    for (let iface of interfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        console.log(iface.address);

        return iface.address;
      }
    }
  }
  console.log('IP no disponible');
  return 'localhost';
};

// Ruta básica de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo! El servidor está funcionando correctamente.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  const ipAddress = getLocalIpAddress();
  console.log(`Servidor escuchando en http://${ipAddress}:${PORT}`);
});