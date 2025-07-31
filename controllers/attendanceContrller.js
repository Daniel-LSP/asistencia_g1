const Attendance=require('../models/Attendance');

exports.obtenerAttendances= async(req, res)=>{

    try{
        const Attendances = await Attendance.findAll();
        return res.json(Attendances);
    }catch(error){
        return res.json({mensaje: error})
    }


    
}

exports.obtenerAttendancesPorId=async(req, res)=>{
    try{
const id=parseInt(req.params.id);
    const Attendance= await Attendance.findByPk(id); // si existe el Attendance lo encontrara
        if(!Attendance){
            return res.status(404).json({
             mensaje:"Attendance no encontrado"
           })
       }
        res.json(Attendance) // si encuantra el Attendance en la BD entrega los datos
    }catch(error){
       // console.log(error)
        return res.status(401).json({mensaje:error.message})
    }
        

}