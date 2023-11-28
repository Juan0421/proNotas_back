import Profesor from "../../models/Profesor.js"


const updateStatus = async(req, res)=>{
    try {
        const updated = await Profesor.findByIdAndUpdate(req.params.id, {is_active:req.body.active}, {new:true})
        if (updated) {
            return res.status(200).json({
                status:200,
                success:true, 
                Response: `profesor ${updated.nombre} desactivado`
            })
        }
    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false, 
            Response: `Profesor no encontrado`
        })
    }
    

}
export default updateStatus