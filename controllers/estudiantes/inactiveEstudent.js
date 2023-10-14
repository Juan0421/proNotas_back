import Estudiate from "../../models/Estudiante.js";

let inactiveEstudent = async(req, res, next)=>{
    try {
        const id = req.params.id
        const is_active = req.body.is_active
        let updActive = await Estudiate.findByIdAndUpdate({_id:id}, {is_active:is_active}, {new:true})
        if(updActive){
            return res.status(201).json({
                status:201,
                success:true,
                Response:updActive
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
export default inactiveEstudent