import Estudiate from "../../models/Estudiante.js";

let updateGrado = async(req, res, next)=>{
    try {
        const id = req.params.id
        let updgrado = await Estudiate.findByIdAndUpdate({_id:id}, {director_curso:req.body.director_curso}, {new:true})
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