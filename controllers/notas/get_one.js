import Notas from "../../models/Notas.js";

let get_one = async(req, res, next)=>{
    try {
        let one = await Notas.findById({_id:req.params.id})
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
            Response: "Cannot find notas"
        });
    }
  
}
export default get_one