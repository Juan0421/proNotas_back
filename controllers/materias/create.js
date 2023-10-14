import Materia from "../../models/Materia.js";

let create = async (req, res, next)=>{
    
    try {
        let one = await Materia.create(req.body)
        if(one){
            return res.status(201).json({
                status:201,
                success:true,
                Response:one
            })
        }
        else{
            return res.status(400).json({
                status:400,
                success:false,
                Response:'bad request'
            })
            next()
        }
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
        next(error)
    }
}
export default create