require('dotenv').config();

//Lee el archivo server/index.js 
const server = require('./server');

// Se define el puerto de la API si existe en .env se toma, sino toma el 8085
const PORT = process.env.PORT || 8115;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));