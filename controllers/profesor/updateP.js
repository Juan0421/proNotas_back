import Profesor from "../../models/Profesor.js";

let updatePgrado = async(req, res, next)=>{
    try {
        const id = req.params.id
        let updmat = await P.findByIdAndUpdate({_id:id} ,{materias:req.body.materias}, {new:true})
        if(updateMaterias){
            return res.status(201).json({
                status:201,
                success:true,
                Response:updmat
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
export default update