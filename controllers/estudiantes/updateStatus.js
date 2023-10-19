import Estudiate from "../../models/Estudiante.js";


const updateStatus = async(req, res)=>{
    try {
        const updated = await Estudiate.findByIdAndUpdate(req.params.id, {is_active:false}, {new:true})
        if (updated) {
            return res.status(200).json({
                status:200,
                success:true, 
                Response: `Estudiante ${updated.nombre} desactivado`
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false, 
            Response: `Estudiante no encontrado`
        })
    }
    

}
export default updateStatus