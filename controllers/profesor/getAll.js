import Profesor from "../../models/Profesor.js";

const getAll = async(req, res)=>{
    try {
        const one = await Profesor.find().populate({path:'user_id'})
        if(one.length ===0){
            return res.status(200).json({
                status:200,
                success:true,
                Response: []
            })
        }
        return res.status(200).json({
            status:200,
            success:true,
            Response: one
        })

    } catch (error) {
        return res.status(400).json({
            status:400,
            success:false,
            Response: 'Bad Request'
        })
    }
}
export default getAll