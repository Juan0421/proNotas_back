import Estudiate from "../../models/Estudiante.js";

let read = async(req, res, next)=>{
    try {
        let all = await Estudiate.find()
        if(all){
            return res.status(200).json({
                status:200,
                success:true,
                Response:all
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
export default read