import Profesor from "../../models/Profesor.js";
let get_one = async(req, res, next)=>{
    try {
        let one = await Profesor.findOne({user_id:req.user.id}).populate('materias')
        if(one){
            return res.status(200).json({
                status: 200,
                success: true,
                Response: one
            });
        }
    } catch (error) {
        next()
        return res.status(400).json({
            status: 400,
            success: false,
            Response: "Cannot find profesor"
        });
    }
  
}
export default get_one