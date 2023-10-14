import Notas from "../../models/Notas.js";

let read = async(req, res, next)=>{
    try {
        let all = await Notas.find()
        if(all){
            return res.status(200).json({
                status:200,
                success:true,
                Response:all
            })
        }
            return res.status(400).json({
                status:400,
                success:false,
                Response:'bad request'
            })
            next()
        
    } catch (error) {
        return res.status(500).json({
            status:500,
            success:false,
            Response:'Internal Server Error'
        })
        next(error)
    }
}

export default read