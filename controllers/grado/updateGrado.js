import Grado from "../../models/Grado.js";

let updateGrado = async(req, res, next)=>{
    try {
        const id = req.params.id
        let updgrado = await Grado.findByIdAndUpdate({_id:id}, {grado_pertenece:req.body.grado_pertenece}, {new:true})
        if(updateGrado){
            return res.status(201).json({
                status:201,
                success:true,
                Response:updgrado
            })
        }
    } catch (error) {
        next(error)
        return res.status(400).json({
            status:400,
            success:false,
            Response:'Bad request'
        })
    }
}
export default updateGrado