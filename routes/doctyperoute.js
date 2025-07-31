const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController')

router.get("/usuarios/todos",UsuarioController.obtenerUsuario);
router.get("/usuarios/buscar/:id",UsuarioController.obtenerUsuarioPorId)
router.post("/usuarios/crear/",UsuarioController.crearUsuario);
//router.put(/usuario/actualizar/:id", UsuarioController.actualizarUsuario);


module.exports = router;