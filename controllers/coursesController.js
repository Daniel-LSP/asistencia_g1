const Usuario=require('../models/Course');


exports.obtenerCourses= async(req, res)=>{

    try {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    }catch(error){
        res.json({mensaje: error})
    }

}

exports.obtenerUsuarioPorId=async(req,res)=>{
    try {
    const id=parseInt(req.params.id);
    const usuario= await Usuario.findByPk(id);//si existe lo encontrara
        if (!usuario){
            return res.status(400).json({
                mensaje:"usuarios no encontrado"
            })
        }
        res.json(usuario)  //si encuentra el usuario en BD entrega los datos
    }catch(error){
        console.log(error)
        return res.status(401).json({mensaje:error.message})
    }
}
