// Lectura de todos los modelos creados
const models = require("../database/models");

// Creamos una función asíncrona para el POST de un usuario nuevo
const createUser = async (req, res) => {
    try {
        // Genera una sentencia SQL tipo INSERT INTO
        const user = await models.dmaldonado.create(req.body);
        // El código 201 significa que se insertó bien
        return res.status(201).json({ user });
    } catch (error) {
        // Código 500 es un error del lado del servidor
        return res.status(500).json({ error: error.message });
    }
};

// Método GET para usuarios
const getAllUsers = async (req, res) => {
    console.log('getting users');
    try {
        // Genera una sentencia SQL tipo INSERT INTO
        const users = await models.dmaldonado.findAll({
            include: [
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        // Código 500 es un error del lado del servidor
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers
};