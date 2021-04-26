const { Router } = require('express'); // Importamos clase Router de express
const controllers = require('../controllers');

// Creamos objeto router a partir de clase Router
const router = Router();

// Definimos rutas
router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', controllers.createUser); // Para insertar un nuevo usuario
router.get('/users', controllers.getAllUsers); // Para leer todos los usuarios

module.exports = router;