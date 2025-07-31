// Importamos Express para poder usar su sistema de enrutamiento
const express = require('express');

// Creamos un "router", que nos permite definir rutas específicas
const router = express.Router();

// Importamos el controlador que contiene las funciones para manejar los cursos
const controller = require('../controllers/coursesController');


// ==========================================
// RUTA: Obtener todos los cursos (GET)
// ==========================================
router.get('/', controller.obtenerCourses);


// ===================================================
// RUTA: Obtener un curso específico por ID (GET)
// ===================================================
router.get('/:id', controller.obtenerCoursePorId);


// Exportamos el router para que pueda ser usado en `app.js` o `index.js`
module.exports = router;
