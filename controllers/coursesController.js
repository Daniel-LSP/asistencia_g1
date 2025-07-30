// Importamos el modelo de Course desde la carpeta models
// Este modelo representa la tabla "courses" en la base de datos
const Course = require('../models/Course');


// ================================
// FUNCIÓN: Obtener todos los cursos
// ================================
exports.obtenerCourses = async (req, res) => {
    try {
        // Usamos Sequelize para consultar todos los registros de la tabla "courses"
        const courses = await Course.findAll();

        // Respondemos con el arreglo de cursos en formato JSON y un estado 200 (OK)
        return res.status(200).json(courses);

    } catch (error) {
        // Si ocurre un error, lo mostramos por consola
        console.error(error);

        // Enviamos una respuesta con estado 500 (error del servidor) y el mensaje del error
        return res.status(500).json({ mensaje: 'Error al obtener los cursos.' });
    }
};


// ========================================
// FUNCIÓN: Obtener un curso específico por ID
// ========================================
exports.obtenerCoursePorId = async (req, res) => {
    try {
        // Obtenemos el parámetro "id" de la URL y lo convertimos a número entero
        const id = parseInt(req.params.id);

        // Usamos Sequelize para buscar el curso con ese ID en la base de datos
        const course = await Course.findByPk(id); // findByPk = buscar por clave primaria

        // Si no se encontró el curso, respondemos con 404 (no encontrado)
        if (!course) {
            return res.status(404).json({ mensaje: 'Curso no encontrado.' });
        }

        // Si lo encuentra, enviamos el curso como respuesta
        return res.status(200).json(course);

    } catch (error) {
        // Si ocurre un error, lo mostramos por consola
        console.error(error);

        // Respondemos con un error 500 y el mensaje de error
        return res.status(500).json({ mensaje: 'Error al buscar el curso.' });
    }
};
