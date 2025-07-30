// Importamos express y lo inicializamos
const express = require("express");
const app = express();

// Cargamos variables de entorno desde el archivo .env
require("dotenv").config();

// Middleware para permitir que Express entienda JSON
app.use(express.json());

// Importamos las rutas de cursos
const coursesRoutes = require("./routes/coursesRoutes");

// Registramos las rutas en la aplicación con un prefijo
app.use("/api/courses", coursesRoutes);

// Puerto que tomamos desde .env
const port = process.env.PORT;

// Iniciamos el servidor en el puerto indicado
app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`);
});
