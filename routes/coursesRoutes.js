const express = require('express');
const router = express.Router();
const UsuarioController = require ('../controllers/coursesController')

router.get ("/courses",CoursesController.obtenerCousers);



module.exports = router;
