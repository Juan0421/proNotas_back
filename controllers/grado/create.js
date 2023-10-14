import Grado from '../../models/Grado.js'
import User from '../../models/User.js'

let create = async(req, res, next)=>{
     req.body.user_id=req.user._id
     req.body.is_active=true
   try {
        let grado = await Grado.create(req.body)
        await User.findByIdAndUpdate(req.user._id , {new:true})
        return res.status(201).json({
            success:true,
            Response:grado
        })
    } catch (error) {
        next(error)
        return res.status(400).json({
            success:false,
            Response:"Bad request"
        })
    }
} 
export default create